
const errors = require('../util/errors.json')
const arg = require('../util/args.json')
const fs = require('fs')
const Discord = require('discord.js')
let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require("../database/langue.json");
module.exports.run = async (client, message, args1) => {
    let prefix = prefixes[message.guild.id].prefixes;

let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);
    if(args[0] === "help"){
        const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Clear')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}clear <nombre>`)
  .addField('Utilité :', "Delete un certain nombre de messages")
  .setFooter('Commande Clear')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Clear help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}clear <number>`)
   .addField('His utility :', "Delete message")
   .setFooter('Command Baton')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
      let logc = require('../database/log.json')

    let log = logc[message.guild.id].log
  
  if(clangue === "fr"){
    message.delete();

    if (isNaN(args[0])) return message.channel.send(errors.fr.raisons.chiffre);
    
    if (args[0] > 100) return message.channel.send(errors.fr.clear.nombre);
    message.channel.bulkDelete(args[0]).catch().catch((e) =>  message.channel.send(errors.fr.clear.raison));
    let clearEmbed = new Discord.RichEmbed() // Master is MessageEmbed
    .setTitle("Messages supprimés : ")
    .setFooter("Message supprimé")
    .setColor("#ff0000")
    .setTimestamp()
    .addField("Nombre de messages supprimés :", `${args[0]}`)
    .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
    .addField("Heure :", message.createdAt)
    .addField("Channel :", message.channel)
    let logs = message.guild.channels.find("id", log);
  if(!logs) return message.channel.send(`**J'ai supprimé\`${messages.size}/${args[0]}\` messages**`).then(message => message.delete({
        timeout: 5000
      }))
  
  logs.send(clearEmbed);
  
  
  }
 if(clangue === "en"){
       message.delete();


    if (isNaN(args[0])) return message.channel.send(errors.en.raison.chiffre);
    
    if (args[0] > 100) return message.channel.send(errors.en.clear.nombre);

    
 message.channel.bulkDelete(args[0]).catch().catch((e) =>  message.channel.send(errors.en.clear.raison));

      
  
    let clearEmbed = new Discord.RichEmbed() // Master is MessageEmbed
    .setTitle("Messages deleted : ")
    .setFooter("Message deleted")
    .setColor("#ff0000")
    .setTimestamp()
    .addField("Number of message deleted :", `${args[0]}`)
    .addField("By :", `${message.author}, ID: ${message.author.id}`)
    .addField("At :", message.createdAt)
    .addField("In Channel :", message.channel)
    let logs = message.guild.channels.find("id", log);
  if(!logs) return message.channel.send(`**I delete \`${messages.size}/${args[0]}\` messages**`).then(message => message.delete({
        timeout: 5000
      }))
  
  logs.send(clearEmbed);
  
  


  }



}

exports.conf = {
    aliases: ['purge', "delete"]
    };
    
    exports.help = {
     name: 'clear', description: 'Supprime des messages', usage: `purge <nombre de messages>`
     }