const execute = (message) => {
  message.reply(
    'aqui está a documentação do bot: \nhttps://github.com/andradeigor/discordbotufrj\n\nCaso queria participar deste projeto, contate um mod ou criador do bot para oferecer ajuda.'
  );
};

module.exports = {
  name: 'docs',
  description: 'Retorna a documentação do bot',
  execute,
};
