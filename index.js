const fs = require('fs');
const mongoose = require('mongoose');
const Discord = require('discord.js');
require('dotenv').config();

const { PREFIX, TOKEN, DB_PASSWORD } = process.env;
const client = new Discord.Client();
client.commands = new Discord.Collection();

mongoose.connect(`mongodb+srv://fred:${DB_PASSWORD}@natal.z7bzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  // eslint-disable-next-line
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`${process.env.PREFIX}help para ver os comandos!`);
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}!`);
});

client.on('message', (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, client, args);
  } catch (error) {
    console.error(error);
    message.reply('ocorreu um erro ao tentar executar esse comando! :c');
  }
});

client.login(TOKEN);
