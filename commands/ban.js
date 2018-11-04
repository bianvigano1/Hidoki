//<------------------MODULE--------------------->

const Discord = require("discord.js"); // Discord Module Required

const fs = require('fs')
//<------------------PACKAGE--------------------->

let logc = require('../database/log.json')

const errors = require('../util/errors.json')

const arg = require('../util/args.json')

let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require("../database/langue.json");
exports.run = async (client, message, args1) => { // if your cmd handler has different things than client, message etc change it

    let log = logc[message.guild.id].log
    

    let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);

    if(args[0] === "help"){
      const online = client.emojis.get("482485733886656512");
const idle = client.emojis.get("482485733316362241");
const dnd = client.emojis.get("482485733488197642");

let frembed = new Discord.RichEmbed()
.setAuthor('Aide du Ban')
.setDescription(arg.fr.requis)
.addField('Commande :', `${online} - Disponible`)
.addField('Utilisation :', `ban <utilisateur> [raison]`)
.addField('Utilité :', "Banni un utilisateur")
.setFooter('Commande Ban')
let enembed = new Discord.RichEmbed()
 .setAuthor('Ban help')
 .setDescription(arg.en.requis)
 .addField('Command :', `${online} - Available`)
 .addField('How to use it :', `ban <user> [reason]`)
 .addField('His utility :', "Ban an user")
 .setFooter('Command Ban')
 if(clangue === "fr") return message.channel.send(frembed)
 if(clangue === "en") return message.channel.send(enembed)
}
  if(clangue === "fr"){
  if(args[0] === "help"){
      message.reply("Usage : " + prefix + "ban <user> <reason>");
      return;
    }
  if(message.mentions.users.size === 1) {
    
    let user = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(errors.fr.permissions.membre);
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(errors.fr.permissions.botperm)
  if (user.hasPermission("BAN_MEMBERS")) return message.channel.send(errors.fr.permissions.permuser);
  let reason = args.join(" ").slice(22);
  if(!reason) reason = "Pas de raison donnée"

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("Utilisateur banni :")
  .setFooter("Ban logs")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Utilisateur banni :", `${user}, ID: ${user.id}`)
  .addField("Raison :", reason)
  .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
  .addField("Heure :", message.createdAt)
  .addField("Channel :", message.channel)
let logs = message.guild.channels.find("id", log);
  if(!logs) message.channel.send(logsEmbed); 
  
  logs.send(logsEmbed);
  message.channel.send(`${user} est banni par ${message.author} `);}else{
    message.channel.send(errors.fr.mention.une);

  }
  }
  
  if(clangue === "en"){
  if(args[0] == "help"){
      message.reply("Usage : " + prefix + "ban <user> <reason>");
      return;
    }
  if(message.mentions.users.size === 1) {
    let user = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(errors.en.permissions.membre);
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(errors.en.permissions.botperm)
  if (user.hasPermission("BAN_MEMBERS")) return message.channel.send(errors.en.permissions.permuser);
  let reason = args.join(" ").slice(22);
  if(!reason) reason = "No reason given"

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("User banned :")
  .setFooter("Ban logs")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("User banned :", `${user}, ID: ${user.id}`)
  .addField("Reason :", reason)
  .addField("Moderator :", `${message.author}, ID: ${message.author.id}`)
  .addField("At :", message.createdAt)
  .addField("Channel :", message.channel)
let logs = message.guild.channels.find("id", log);
  if(!logs) message.channel.send(logsEmbed); 
  
  logs.send(logsEmbed);
  message.channel.send(`${user} is banned by ${message.author} `);}else{message.channel.send(errors.en.mention.une)
}
  
  
  
  
  }
}

exports.conf = {
    aliases: ['bannir']
    };
    
    exports.help = {
     name: 'ban', description: 'Bannir un utilisateur', usage: `ban <user>`
     }