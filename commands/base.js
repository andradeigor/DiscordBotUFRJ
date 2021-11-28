// numero baseAtual baseDestino

const execute = (message, client, args) => {
  try {
    if (!args.length || args.length !== 3) {
      throw new Error(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
    }
    const num = args[0];
    const decimal = parseInt(num.toString(), args[1]);
    const newNum = decimal.toString(args[2]);
    message.reply(`O número ${args[0]} na base ${args[1]} é ${newNum} na base ${args[2]}`);
  } catch (error) {
    message.channel.send(error.message);
  }
};

module.exports = {
  name: 'base',
  description: 'Dado um numero, a base dele e a base destino converte ele.',
  execute,
};
