const Discord = require('discord.js');

const execute = (message) => {
  const embed = new Discord.MessageEmbed().setImage(
    'http://s2.glbimg.com/zmu2uhOjtIwdFebJ5nI1tD_S54c=/620x0/top/s.glbimg.com/jo/eg/f/original/2016/11/30/roberta.png'
  );
  message.channel.send(embed);
};

module.exports = {
  name: 'capslock',
  description: 'Retorna a mensagem da Roberta Miranda',
  execute,
};
