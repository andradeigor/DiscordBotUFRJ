require('dotenv').config();
const execute = (message, client ,args) =>{
    if(!args.length || args.length!=2){
        return message.channel.send(`Você não passou valores, ${message.author}! Busque a ajuda necessária no "${process.env.PREFIX}help"`)
    }
    const numeroDeDados = args[1]
    const tamanhoDoDado = args[0]
    const roladas = []
    for(i=0; i<numeroDeDados;i++){
        const rolada = Math.floor(Math.random() * (tamanhoDoDado) + 1);
        roladas.push(rolada)
    }
    
    let soma = roladas.reduce((soma, numero)=>soma +=numero)
    message.reply(`As roladas foram [${roladas}], e a soma deu ${soma}`)
}

module.exports = {
    name:"dado",
    description: "Rola um d20 um numero de vezes e retorna a soma.",
    execute
}