const request = require('request');
const fs = require('fs')
const Discord = require('discord.js')
let langue = require('../database/langue.json')
exports.run = (client, message, args1) => {
  let clangue = langue[message.author.id].langue
  let args = message.content.split(" ").slice(1);

  if(args[0] === "help"){
    let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));
let prefix = prefixes[message.guild.id].prefixes;
    const online = client.emojis.get("482485733886656512");
 const idle = client.emojis.get("482485733316362241");
 const dnd = client.emojis.get("482485733488197642");
 let frembed = new Discord.RichEmbed()
 .setAuthor('Aide du Vdm')
 .setDescription('Aucun argument nécéssaire')
 .addField('Commande :', `${online} - Disponible`)
 .addField('Utilisation :', `${prefix}vdm`)
 .addField('Utilité :', "Vous raconte une Vie de Merde")
 .setFooter('Commande VDM')
 let enembed = new Discord.RichEmbed()
    .setAuthor('VDM help')
    .setDescription('No args required')
    .addField('Command :', `${dnd} - Unavailable`)
    .setFooter('Command vdm')
    if(clangue === "fr") return message.channel.send(frembed)
    if(clangue === "en") return message.channel.send(enembed)
}
  
  if(clangue === "fr"){
const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/
request('https://www.viedemerde.fr/aleatoire', (error, response, body) => {
    if (error) {
        return console.error(error);
    }
    let vdm = regex.exec(body);
  if(!vdm) return message.reply('Une erreur est survenue')
    message.channel.send(vdm[1]);
})}};

exports.conf = {
    aliases: ['viedemerde']
    };
    
    exports.help = {
     name: 'vdm', description: 'Voir une VDM', usage: `vdm`
     }