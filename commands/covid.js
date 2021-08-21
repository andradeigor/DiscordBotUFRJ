module.exports = {
	name: 'covid',
	description: 'Te mostra situacao da covid no estado do RJ',
	execute(message) {
        const fetch = require("node-fetch")

        var api = `https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/rj`
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            var casos = data.cases;
            var mortes = data.deaths;
            message.reply(`atualmente, desde o inicio da pandemia, foram registrados ${casos} casos e infelizes ${mortes} :'c`)});
	}
}
