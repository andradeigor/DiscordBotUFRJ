const Discord = require('discord.js');
const fetch = require('node-fetch');

const execute = async (message) => {
  const api = `https://argus-api.vercel.app/api/game`;
  const response = await fetch(api);
  const data = await response.json();
  const qtde = data.message.length;

  if (qtde === 0) {
    message.reply('desculpe, não temos jogos de graça por enquanto.');
  }

  if (qtde === 1) {
    message.reply('um jogo está de graça agora!');
  }

  if (qtde > 1) {
    message.reply(`${qtde} jogos estão de graças agora!`);
  }

  for (let i = 0; i < qtde; i += 1) {
    const gameName = data.message[i].title;
    const gameURL = data.message[i].url;
    let gamePlace = gameURL.split('.')[1];
    gamePlace = gamePlace[0].toUpperCase() + gamePlace.substr(1);
    const gameEnd = data.message[i].end;
    const gamePic = data.message[i].icon;
    const embed = new Discord.MessageEmbed().setImage(gamePic);
    let resposta = `O jogo __**${gameName}**__ está de graça na ${gamePlace}!\n`;
    resposta += `A promoção vai até  ${gameEnd} e está disponível no link abaixo:\n||${gameURL}||`;
    message.channel.send(resposta);
    message.channel.send(embed);
  }
};

module.exports = {
  name: 'freegame',
  description: 'Lhe mostra os jogos grátis do momento!',
  execute,
};
