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
  .setAuthor('Aide du Newinvite')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}newinvite`)
  .addField('Utilité :', "Créer une invitation")
  .setFooter('Commande Newinvite')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Newinvite help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}newinvite`)
   .addField('His utility :', "Create an invite link")
   .setFooter('Command Newinvite')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  if(!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send("J'ai besoin de la permissions `Créez une invitation`")

    let sv = client.guilds.get(message.guild.id)
    sv.channels.random().createInvite().then(a => message.channel.send('Voilà une invitation de ce serveur : '+a.toString()))
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(errors.en.permissions.botperm)

}
exports.conf = {
    aliases: ["ni"]
    };
    
    exports.help = {
     name: 'newinvite', description: 'Obtenir l\'invitation', usage: `gi`
     };