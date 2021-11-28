const fetch = require('node-fetch');

const execute = async (message) => {
  const api = `https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/rj`;
  const response = await fetch(api);
  const data = await response.json();
  const [casos, mortes] = [data.cases, data.deaths];
  message.reply(`atualmente, desde o inicio da pandemia, foram registrados ${casos} casos e infelizes ${mortes} :'c`);
};

module.exports = {
  name: 'covid',
  description: 'Te mostra situação da covid no estado do RJ',
  execute,
};
