require('dotenv').config();

const execute = (message, client, args) => {
  try {
    if (!args.length || args.length !== 2) {
      throw new Error(`Você não passou valores, ${message.author}! Busque a ajuda necessária no "${process.env.PREFIX}help"`);
    }

    const numeroDeDados = args[1];
    const tamanhoDoDado = args[0];
    const roladas = [];
    for (let i = 0; i < numeroDeDados; i += 1) {
      const rolada = Math.floor(Math.random() * tamanhoDoDado + 1);
      roladas.push(rolada);
    }

    const soma = roladas.reduce((acumulador, numero) => acumulador + numero);
    message.reply(`As roladas foram [${roladas}], e a soma deu ${soma}`);
  } catch (error) {
    message.channel.send(error.message);
  }
};

module.exports = {
  name: 'dado',
  description: 'Rola um d20 um numero de vezes e retorna a soma.',
  execute,
};
