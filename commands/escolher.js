const execute = (message, client, args) => {
  try {
    message.channel.startTyping();
    if (args.length === 0) throw new Error('Nenhuma opção escrita.');
    const escolha = args[Math.floor(Math.random() * args.length)];
    message.channel.send(`Eu escolho... ${escolha}`);
  } catch (error) {
    console.log(error);
    message.channel.send(error.message);
  } finally {
    message.channel.stopTyping();
  }
};

module.exports = {
  name: 'escolher',
  description: 'O bot escolhe uma opção dentre várias que você passar como parâmetro para ele escolher',
  execute,
};
