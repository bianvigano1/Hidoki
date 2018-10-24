let date = require('date-time')
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Heure')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}heure`)
  .addField('Utilité :', "Voir l'heure")
  .setFooter('Commande Heure')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Heure help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}heure`)
   .addField('His utility :', "Show the hour")
   .setFooter('Command Heure')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  let heure =  message.createdAt.toLocaleTimeString()
message.channel.send(date({showTimeZone: true}));

}

exports.conf = {
    aliases: ["time"]
    };
    
    exports.help = {
     name: 'heure', description: 'Quelle heure est t\'il ?', usage: `time`
     };