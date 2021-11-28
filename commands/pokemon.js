const fetch = require('node-fetch');

const execute = async (message) => {
  if (message.author.id === '213024732772171776') {
    let resposta = `seu pokemón aleatório é Psyduck\n`;
    resposta += `Aqui está a página dele: https://www.pokemon.com/br/pokedex/Psyduck`;
    return message.reply(resposta);
  }
  if (message.author.id === '257389498378223616') {
    let resposta = `seu pokemón aleatório é Lopunny\n`;
    resposta += `Aqui está a página dele: https://www.pokemon.com/br/pokedex/Lopunny`;
    return message.reply(resposta);
  }

  const random = Math.floor(Math.random() * (151 - 1)) + 1;
  const api = `https://pokeapi.co/api/v2/pokemon/${random}`;
  const response = await fetch(api);
  const data = await response.json();
  const pokerandom = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  let resposta = `seu pokemón aleatório é ${pokerandom}\n`;
  resposta += `Aqui está a página dele: https://www.pokemon.com/br/pokedex/${pokerandom}`;
  return message.reply(resposta);
};

module.exports = {
  name: 'pokemon',
  description: 'Gera um pokemon aleatório',
  execute,
};
