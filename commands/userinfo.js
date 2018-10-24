const Discord = require("discord.js");
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
  .setAuthor('Aide du Userinfo')
  .setDescription(arg.fr.psobl)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}userinfo [membre]`)
  .addField('Utilité :', "Voir les infos sur un utilisateur")
  .setFooter('Commande Userinfo')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Userinfo help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}userinfo`)
   .addField('His utility :', "Show info about an user")
   .setFooter('Command Userinfo')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author

     const moment = require('moment');
       const stats_embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Statistiques du joueurs' , '------------')
       .setThumbnail(user.displayAvatarURL)
       .addField('Nom', user.username, true)
       .addField('ID', user.id)
       .addField('Discriminateur', user.discriminator, true)
       .addField('Status', user.presence.status)
       .addField('Joue à', user.presence.game ? user.presence.game.name : 'rien', true)
       .addField('Inscription', moment(user.createdAt).format('LLL'), false)
       message.channel.send(stats_embed)
       }
       
exports.conf = {
    aliases: ['ui']
    };
    
    exports.help = {
     name: 'userinfo', description: 'Infomrations d\'un joueur', usage: `ui [membre]>`
     };