module.exports = {
	name: 'leave',
	description: 'Force the bot to quit the voice channel!',
	execute(message) {
        const voiceChannel = message.member.voice.channel
        voiceChannel.leave()
    }
};