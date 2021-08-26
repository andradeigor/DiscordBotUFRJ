const Discord = require('discord.js');

const execute = (message) => {
  const member = message.mentions.members.first() || message.member;

  const embed = new Discord.MessageEmbed()
    .setDescription(
      `Clique [aqui](${member.user.displayAvatarURL({
        format: 'png',
      })}) para baixar a imagem.`
    )
    .setImage(
      member.user.displayAvatarURL({
        format: 'png',
        dynamic: true,
        size: 4096,
      })
    )
    .setColor('BLUE');
  message.channel.send(embed);
};

module.exports = {
  name: 'user',
  description: 'Exibe o avatar do usuário',
  execute,
};
