var request = require('request')
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
  .setAuthor('Aide du Macron')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `macron`)
  .addField('Utilité :', "Voir un gif de macron")
  .setFooter('Commande Macron')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Macron help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `macron`)
   .addField('His utility :', "Are you a donator")
   .setFooter('Command Macron')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }   
    let number = Math.floor(Math.random() * 29) + 1;

  

  
request(`https://api.giphy.com/v1/gifs/search?api_key=${config.giphyapikey}&q=macron&limit=30&offset=0&rating=G&lang=fr`, function (error, response, body) {
    if(!JSON.parse(body).data[number]) return message.channel.send('Une erreur est survenue')

let url = JSON.parse(body).data[number].url

message.channel.send(url)
  })
}

exports.conf = {
    aliases: ['perlimpimpin']
    };
    
    exports.help = {
     name: 'macron', description: 'Montre un gif de Macron', usage: `macron`
     };