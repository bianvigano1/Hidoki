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
  .setAuthor('Aide du Invite')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}invite`)
  .addField('Utilité :', "Avoir les liens d'invitations")
  .setFooter('Commande Invite')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Invite help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}invite`)
   .addField('His utility :', "Invite the bot")
   .setFooter('Command Invite')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let ava1 = "https://discordapp.com/oauth2/authorize?client_id=469054026001022986&scope=bot&permissions=8"
    let ava2 = "https://discordapp.com/oauth2/authorize?client_id=469054026001022986&scope=bot&permissions=0"
    let ava3 = "https://discordapp.com/oauth2/authorize?client_id=469054026001022986&scope=bot&permissions=334884055"
    let embed = new Discord.RichEmbed()
    .setAuthor('Lien d\'invitation')
    .setDescription("Voici différents liens pour m'inviter")
    .addField('Permission administrateur :', "[cliquez-ici]("+ava1+")")
    .addField('Sans permissions :', "[cliquez-ici]("+ava2+")")
    .addField('Permissions nécéssaires :', "[cliquez-ici]("+ava3+")")
    message.channel.send(embed);
  }
  exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'invite', description: 'Inviter le bot', usage: `invite`
     }  