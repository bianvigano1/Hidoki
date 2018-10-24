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
  .setAuthor('Aide du Reply')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}reply <id> <message>`)
  .addField('Utilité :', "Contace un membre par le bot.")
  .setFooter('Commande Reply')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Reply help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}reply <id> <message>`)
   .addField('His utility :', "Talk to an user")
   .setFooter('Command Reply')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
   if(message.author.id !== config.owner) return message.channel.send('Tu veux MP qui toi ?')
let membre = args[0]
let messagec = args.slice(1).join(" ");
let rMembre = client.users.get(membre)
let embed = new Discord.RichEmbed()
.setAuthor('Message privé du bot')
.setDescription('Auteur de ce message : ' + message.author)
.addField('Contenu du message : ', messagec)
.setFooter('Message privé du bot')
try {
    await rMembre.send(embed)
    message.channel.send(`J'ai envoyé un message à <@${membre}>, avec le contenu suivant : **${messagec}**`)
  } catch (e) {
    message.channel.send(`<@${membre}> a bloqué ses MP `)
  }
}

exports.conf = {
    aliases: ['repondre']
    };
    
    exports.help = {
     name: 'reply', description: 'Contacte un user par MP', usage: `reply <id> <message>`
     }