const Discord = require("discord.js");
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Youtube')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `youtube <query>`)
  .addField('Utilité :', "Fait une recherche sur Youtube")
  .setFooter('Commande Youtube')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Youtube help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `youtube <query>`)
   .addField('His utility :', "Search on Youtube")
   .setFooter('Command Youtube')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  if(clangue === "fr"){
      let args = message.content.split(" ").slice(1);
let youtube = args.slice(0).join('+');
  if(!youtube) return message.reply("Merci d'indiquer un texte")
let link = `https://www.youtube.com/results?search_query=` + youtube;
  message.channel.send(link);
  
}
   if(clangue === "en"){
      let args = message.content.split(" ").slice(1);
let youtube = args.slice(0).join('+');
  if(!youtube) return message.reply("Please put some text")
let link = `https://www.youtube.com/results?search_query=` + youtube;
  message.channel.send(link);
  
}
}
exports.conf = {
    aliases: ['youtube search', "ytb"]
    };
    
    exports.help = {
     name: 'youtube', description: 'Faites une recherche sur Youtube', usage: `youtube <texte>`
     }