module.exports = {
	name: 'server',
	description: 'Server name!',
	execute(message) {
		var userCount = message.guild.members.cache.filter(member => !member.user.bot).size;  
		var offlineCount = message.guild.members.cache.filter(member => member.presence.status == "offline").size
		var onlineCount = userCount - offlineCount 
		message.reply(`você está no servidor ${message.guild.name}.\nAtualmente existem ${userCount} membros no servidor.\n${onlineCount} estão online.`);
	},
};