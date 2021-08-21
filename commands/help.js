module.exports = {
	name: 'help',
	description: 'Comandos do bot',
	execute(message) {
        message.channel.send(`Ainda em construção! Mas por enquanto tempos:\n\nCOMANDOS\n· f.covid: retorna os casos e covid desde o início até agora no Rio de Janeiro\n· f.dontpad: retorna o link do dontpad para Comp1 pro dia de hoje\n· f.freegame: fala os jogos gratuitos da semana (A api as vezes n funciona)\n· f.leave: o bot da sala de audio\n· f.pokemon: retorna um pokemon aleatório (menos pra carol)\n· f.server: retorna informações sobre o server (tá meio quebrado ainda haha)\n· f.user: retorna a foto do usuário mencionado (ou a sua)\n\nPROJETOS FUTUROS:\n· Conversor de bases\n· MiniCalendário de atividades`)
	},
};
