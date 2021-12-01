let listaSorteio = [];

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
      throw new Error(`Você não passou valores, ${message.author}! Busque a ajuda necessária no "${process.env.PREFIX}help"`);
    }

    if (args[0] === 'entrar') {
      listaSorteio.forEach((element) => {
        if (element === message.author.id) {
          throw new Error(`Você já está no sorteio!!!!!!!!!!!!!!!!!!`);
        }
      });
      listaSorteio.push(message.author.id);
      message.author.send('Você entrou no sorteio do server! c:');
    }

    if (args[0] === 'sair') {
      console.log(listaSorteio);
      let listHasUser = false;
      let indexOfUser = 0;
      listaSorteio.forEach((element, index) => {
        if (element === message.author.id) {
          listHasUser = true;
          indexOfUser = index;
        }
      });

      if (!listHasUser) {
        throw new Error('Você não está no sorteio!!!!!!!!!!!!');
      }

      listaSorteio.splice(indexOfUser, 1);
      console.log(listaSorteio);
      message.author.send('Você saiu do sorteio do server! :c');
    }

    if (args[0] === 'sortear') {
      let copiaSorteio = listaSorteio;
      copiaSorteio = sortear(copiaSorteio);
      listaSorteio.forEach(async (el) => {
        const randomUser = copiaSorteio.shift();
        console.log(`${el} => ${randomUser}`);
        const user = await client.users.fetch(el, false);
        user.send(`Você tirou <@${randomUser}>!`);
      });
      listaSorteio = [];
      message.channel.send('ve a dm ai');
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
