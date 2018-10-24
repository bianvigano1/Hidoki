const moment = require("moment")
const Discord = require('discord.js')
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Infobot')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}infobot`)
  .addField('Utilité :', "Voir les info du bot")
  .setFooter('Commande Infobot')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Infobot help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}infobot`)
   .addField('His utility :', "Show the bot info")
   .setFooter('Command Infobot')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
   const os = require('os');
const used = process.memoryUsage().heapUsed / 1024 / 1024;  
 

 
let pourcent = Math.random(used / 4096 * 100).toFixed(2)
var info_embed = new Discord.RichEmbed()
.setColor("#FE0101")
.addField('Mon nom et mon tag : ', 'Hidoki#6500')
.addField("💾 Mémoire vive:", `\`${Math.round(used * 100) / 100}MB/4096 MB\``,true)
.addField('Pourcentage de RAM utilisée : ', "`"+pourcent+"%`", true)
.addField("Plateforme d'hébergement :", `\`Linux - Debian\``, true)
   .addField("Version de Node:", `${process.version}`, true)
   .addField('Version de Discord', "V11.4.2",true)
   .addField('Configuration du Processeur : ', `\`\`\`css\nINTEL XEON E5-1620\`\`\``, true)

     
     if(clangue === "fr"){
       message.channel.send(info_embed)
}
 var inffo_embed = new Discord.RichEmbed()
    .setColor("#FE0101")
    .addField("💾 RAM available:", `${Math.round(used * 100) / 100}MB/4096 MB`)
       .addField('RAM used : ', pourcent)
       .addField("Node version :", `${process.version}`)
       .addField("Host platform :", `Linux --> Debian`)
       if(clangue === "en"){
        message.channel.send(inffo_embed)
 }

}

exports.conf = {
    aliases: ['botinfo']
    };
    
    exports.help = {
     name: 'infobot', description: 'Voirles info du bot', usage: `infobot`
     }