const Discord = require('discord.js')

module.exports = {
	name: 'freegame',
    description: 'Lhe mostra os jogos grátis do momento!',
    execute(message) {
        const fetch = require("node-fetch")

        var api = `https://argus-api.vercel.app/api/game`
        fetch(api)
        .then(response =>{
            return response.json();D
        })
        .then(data =>{
            var qtde = data.message.length;
            if(qtde == 0){
                message.reply(`desculpe, não temos jogos de graça por enquanto.`);
            }
            if(qtde == 1){
                message.reply(`um jogo está de graça agora!`);
            }
            if(qtde > 1){
                message.reply(`${qtde} jogos estão de graça agora!`);
            }
            for(i=0; i<qtde; i++){
                gameName = data.message[i].title;
                gameURL = data.message[i].url;
                gamePlace = gameURL.split('.')[1]
                gamePlace = gamePlace[0].toUpperCase() + gamePlace.substr(1);
                gameEnd = data.message[i].end;
                gamePic = data.message[i].icon;
                const embed = new Discord.MessageEmbed()
                .setImage(gamePic)
                message.channel.send(`O jogo __**${gameName}**__ está de graça na ${gamePlace}!\nA promoção vai até  ${gameEnd} e está disponível no link abaixo:\n||${gameURL}||`);
                message.channel.send(embed)
            }
        
        });

},
};

