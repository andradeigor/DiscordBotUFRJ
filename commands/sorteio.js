let listaSorteio = [];

const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.String },
});

const sorteioSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.String },
  pessoaTirada: { type: mongoose.Schema.Types.String },
});

const User = mongoose.model('User', userSchema);
const Sorteio = mongoose.model('Sorteio', sorteioSchema);

const shuffle = (array) => {
  const copiaArray = array;
  let currentIndex = copiaArray.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [copiaArray[currentIndex], copiaArray[randomIndex]] = [copiaArray[randomIndex], copiaArray[currentIndex]];
  }

  return copiaArray;
};

const sortear = (copiaSorteio) => {
  let copia = [...copiaSorteio];
  copia = shuffle(copia);
  console.log(copia);
  copia.forEach((el, index) => {
    if (el === listaSorteio[index]) {
      copia = sortear(copia);
    }
  });
  return copia;
};

const execute = async (message, client, args) => {
  // ;sorteio => diz quem você tirou na dm
  // ;sorteio entrar => entra no sorteio
  // ;sorteio sair => sai do sorteio
  // ;sorteio sortear => sorteia os que entraram e envia na dm de todos
  try {
    message.channel.startTyping();

    if (!args.length) {
      const busca = await Sorteio.findById(message.author.id);
      if (!busca) {
        throw new Error('O sorteio ainda não foi sorteado!');
      }
      message.author.send(`Você tirou <@${busca.pessoaTirada}> no sorteio atual!`);
    }

    if (args[0] === 'entrar') {
      const busca = await User.findById(message.author.id);
      if (busca) {
        throw new Error('Você já está no sorteio atual!');
      }
      const usuario = new User({ _id: message.author.id });
      await usuario.save();
      message.author.send('Você entrou no sorteio do server! c:');
    }

    if (args[0] === 'sair') {
      const busca = await User.findById(message.author.id);
      if (!busca) {
        throw new Error('Você não está no sorteio!');
      }
      await User.deleteOne({ _id: message.author.id });
      message.author.send('Você saiu do sorteio do server! :c');
    }

    if (args[0] === 'sortear') {
      if (message.author.id !== '198943365990055936') {
        throw new Error('Você não é o LeoBardo para sortear!');
      }
      listaSorteio = await User.find();
      if (!listaSorteio.length) {
        throw new Error('Não há participantes!');
      }
      const sorteioRolando = await Sorteio.find();
      if (sorteioRolando.length) {
        await Sorteio.deleteMany({});
      }
      /* eslint no-underscore-dangle: 0 */
      listaSorteio = listaSorteio.map((item) => item._id);
      let copiaSorteio = listaSorteio;
      copiaSorteio = sortear(copiaSorteio);
      listaSorteio.forEach(async (el) => {
        const randomUser = copiaSorteio.shift();
        console.log(`${el} => ${randomUser}`);
        const sorteioTirado = new Sorteio({ _id: el, pessoaTirada: randomUser });
        await sorteioTirado.save();
        const user = await client.users.fetch(el, false);
        user.send(`O sorteio foi realizado e você tirou <@${randomUser}>!`);
      });
      message.channel.send('Sorteio sorteado! Chequem suas DMs!');
    }
  } catch (error) {
    message.channel.send(error.message);
  } finally {
    message.channel.stopTyping();
  }
};

module.exports = {
  name: 'sorteio',
  description: 'Entre para um sorteio secreto :eyes:',
  execute,
};
