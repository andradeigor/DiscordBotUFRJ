const execute = (message, client) => {
  let replyMessage = '**===== Ajuda =====**\n\n';
  client.commands.forEach((command) => {
    if (command.description) {
      replyMessage += `**${process.env.PREFIX}${command.name}**: ${command.description}.\n`;
    }
  });
  message.channel.send(replyMessage);
};

module.exports = {
  name: 'help',
  description: 'Exibe informações acerca de todos os comandos',
  execute,
};
