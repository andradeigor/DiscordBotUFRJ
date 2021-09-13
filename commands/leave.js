const execute = (message) => {
  const voiceChannel = message.member.voice.channel;
  voiceChannel.leave();
};

module.exports = {
  name: 'leave',
  description: 'Força o bot a sair da sala de voz',
  execute,
};
