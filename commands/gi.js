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
  .setAuthor('Aide du Gi')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}gi <Id d'un serveur>`)
  .addField('Utilité :', "Obtenir un lien d'invitation")
  .setFooter('Commande Gi')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Gi help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}gi <guild ID>`)
   .addField('His utility :', "Get the invite link")
   .setFooter('Command Gi')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 

    if (message.author.id !== config.owner) return message.channel.send('Tu ne peux pas effectuer cette commande')
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Entre un ID valide.`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
exports.conf = {
    aliases: ["getinvite"]
    };
    
    exports.help = {
     name: 'gi', description: 'Obtenir l\'invitation', usage: `gi`
     };