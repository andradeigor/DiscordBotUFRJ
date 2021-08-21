const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config();

const { prefix, token } = process.env;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  // eslint-disable-next-line
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity('f.help para ver os comandos!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('ocorreu um erro ao tentar executar esse comando! :c');
  }
});

client.on('message', async (message) => {
  if (message.content === `${prefix}ping`) {
    const m = await message.channel.send('Pong!');

    message.reply(
      `o seu ping está em ${m.createdTimestamp - message.createdTimestamp}ms.`
    );
  }
});

client.login(token);
