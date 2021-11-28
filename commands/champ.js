const execute = (message, client, args) => {
  try {
    if (!args.length) {
      throw new Error(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
    }

    const champ = args[0];

    message.reply(`aqui está a página do op.gg requerida:\nhttps://kr.op.gg/champion/${champ}/statistics`);
  } catch (error) {
    message.channel.send(error.message);
  }
};

module.exports = {
  name: 'champ',
  description: 'Te mostra o op.gg do campeão',
  execute,
};
