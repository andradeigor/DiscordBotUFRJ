module.exports = {
  name: 'server',
  description: 'Server name!',
  execute(message) {
    const userCount = message.guild.members.cache.filter(
      (member) => !member.user.bot
    ).size;
    const offlineCount = message.guild.members.cache.filter(
      (member) => member.presence.status === 'offline'
    ).size;
    const onlineCount = userCount - offlineCount;
    message.reply(
      `você está no servidor ${message.guild.name}.\nAtualmente existem ${userCount} membros no servidor.\n${onlineCount} estão online.`
    );
  },
};
