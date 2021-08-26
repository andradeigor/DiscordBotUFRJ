module.exports = {
	name: 'champ',
	description: 'Te mostra o op.gg do campeão',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
		} 

        var champ = args[0]

        message.reply(`aqui está a página do op.gg requerida:\nhttps://kr.op.gg/champion/${champ}/statistics`);
	},
};