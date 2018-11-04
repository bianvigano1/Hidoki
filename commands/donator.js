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
  .setAuthor('Aide du Donator')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `donator`)
  .addField('Utilité :', "Voir si tu es Donateur")
  .setFooter('Commande Donator')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Donator help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `donator`)
   .addField('His utility :', "Are you a donator")
   .setFooter('Command Donator')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
let texte;
if(clangue === "fr") texte = "Tu n'es pas donateur"
if(clangue === "en") texte = "You are not a donator"
if(message.author.id === "409091614414209054"||message.author.id === "381116968327053313"){
        message.channel.send('Tu es un **donateur**')
    }else{
        message.channel.send(texte)
    }

   
    
    
    
    }
    exports.conf = {
        aliases: []
        };
        
        exports.help = {
         name: 'donator', description: 'T\'est un donateur', usage: `daily`
         };