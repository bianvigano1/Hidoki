const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
const Discord = require('discord.js')
let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require("../database/langue.json");
module.exports.run = async (client, message, args1) => {
    

let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);
    if(args[0] === "help"){
        const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Leave')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `$leave <id>`)
  .addField('Utilité :', "Fait quitter le bot d'un serveur")
  .setFooter('Commande Leave')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Leave help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `leave <id>`)
   .addField('His utility :', "Leave a server")
   .setFooter('Command Leave')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
let id = args[0]
if(isNaN(id)) return message.channel.send("Un ID mdr")

if(message.author.id !== config.owner) return message.channel.send(`Vous êtes signalé à mon créateur et allé être banni sous peu`);
    message.delete();
    client.guilds.get(id).leave()
};

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'leave', description: 'Quitte le bot d\'un serveur', usage: `eval`
     };