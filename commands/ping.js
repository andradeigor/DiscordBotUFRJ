const execute = async (message) => {
  const m = await message.channel.send('Pong!');
  const resposta = `o seu ping está em ${m.createdTimestamp - message.createdTimestamp}ms.`;
  message.reply(resposta);
};

module.exports = {
  name: 'ping',
  description: 'Exibe seu ping',
  execute,
};
