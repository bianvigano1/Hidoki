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
  .setAuthor('Aide du Gt')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}gt <texte>`)
  .addField('Utilité :', "Parle aux utilisateurs du bot")
  .setFooter('Commande Gt')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Gt help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}gt <text>`)
   .addField('His utility :', "Talk with other users")
   .setFooter('Command Gt')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
let xoargs = message.content.split(" ").slice(1);
let xo03 = xoargs.join(" ")
var xo02 = message.guild.channels.find('name', 'guysmowtchat');
if(!xo02) return message.reply(" Le channel guysmowtchat est introuvable")
if(message.channel.name !== 'guysmowtchat') return message.reply("Commande à effectuer dans le guysmowtchat")
if(!xo03) return message.reply("Merci d'écrire un message à envoyer à la globalité des discords.")
var tchat_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Message global Guysmow")
.addField("Pseudo de l'utilisateur :", message.author.username + "#" + message.author.discriminator, true)
.addField("Em provenance de :", message.guild.name, true)
.addField("Contenu du mesage : ", xo03)
.setFooter("GuysmowBOT")
.setTimestamp()
message.delete();
client.channels.findAll('name', 'guysmowtchat').map(channel => channel.send(tchat_embed))
}

exports.conf = {
    aliases: ['global', 'tchat']
    };
    
    exports.help = {
     name: 'gt', description: "Envoie un message à tout le monde", usage: `gt [message]`
     };