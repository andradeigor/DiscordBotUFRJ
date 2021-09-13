const execute = (message) => {
  const userCount = message.guild.members.cache.filter(
    (member) => !member.user.bot
  ).size;
  const offlineCount = message.guild.members.cache.filter(
    (member) => member.presence.status === 'offline'
  ).size;
  const onlineCount = userCount - offlineCount;
  let resposta = `você está no servidor ${message.guild.name}.\n`;
  resposta += `Atualmente existem ${userCount} membros no servidor.\n`;
  resposta += `${onlineCount} estão online.`;
  message.reply(resposta);
};

module.exports = {
  name: 'server',
  description: 'Informações sobre o server',
  execute,
};
