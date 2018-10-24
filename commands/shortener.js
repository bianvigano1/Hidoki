const shorten = require('isgd');
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
  .setAuthor('Aide du Shortener')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}shortener <lien> <nouveau nom>`)
  .addField('Utilité :', "Raccourics un lien")
  .setFooter('Commande Shortener')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Shortener help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}shortener <link> <new name>`)
   .addField('His utility :', "Shorten a link")
   .setFooter('Command Shortener')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
 if(clangue === "fr"){
  if (!args[0]) return message.channel.send('**Usage : '+ prefix + 'shortener <URL> [titre]**')
 
  if (!args[1]) { 
    shorten.shorten(args[0], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send("Merci d'entrer un lien valide !");
     
      message.channel.send(`**<${res}>**`); 
   
    })
   
  } else { 
   
    shorten.custom(args[0], args[1], function(res) { 
     
      if (res.startsWith('Error:')) return message.channel.send(`**${res}**`); 
     
      message.channel.send(`**<${res}>**`); 
     
     
    }) 
   
  }}
  if(clangue === "en"){
  if (!args[0]) return message.channel.send('**Usage : '+prefix+ 'shortener <URL> [title]**')
 
  if (!args[1]) { 
    shorten.shorten(args[0], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send("Enter a valid link.");
     
      message.channel.send(`**<${res}>**`); 
   
    })
   
  } else { 
   
    shorten.custom(args[0], args[1], function(res) { 
     
      if (res.startsWith('Error:')) return message.channel.send(`**${res}**`); 
     
      message.channel.send(`**<${res}>**`); 
     
     
    }) 
   
  }}
}

exports.conf = {
  aliases: ['link', 'shortenlink', 'shorten']
  };
  
  exports.help = {
   name: 'shortener', description: 'Raccourci un lien', usage: `shortener <lien>`
   };