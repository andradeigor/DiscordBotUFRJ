const execute = (message) => {
  const now = new Date();
  let day = String(now.getDate());
  if (now.getDate() < 10) {
    day = `0${day}`;
  }
  let month = String(now.getMonth() + 1);
  if (now.getMonth() + 1 < 10) {
    month = `0${month}`;
  }
  message.reply(`o código do DontPad de Comp1 de hoje é https://dontpad.com/aulaComp1${day}${month}`);
};

module.exports = {
  name: 'dontpad',
  description: 'Acha o dontpad certo para aula de Comp1',
  execute,
};
