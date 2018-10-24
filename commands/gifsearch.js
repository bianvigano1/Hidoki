var request = require('request')
const errors = require('../util/errors.json')
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
  .setAuthor('Aide du Gifsearch')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}gifsearch <texte>`)
  .addField('Utilité :', "Cherche un gif sur Giphy")
  .setFooter('Commande Gifsearch')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Gifsearch help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}gifsearch <text>`)
   .addField('His utility :', "Search a gif")
   .setFooter('Command Gifsearch')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }     
    let number = Math.floor(Math.random() * 29) + 1;

  

  let name = args.join(" ")
  if(!name) return message.channel.send('Vous devez insérez un texte.')

request(`https://api.giphy.com/v1/gifs/search?api_key=${config.giphyapikey}&q=${name}&limit=30&offset=0&rating=G&lang=fr`, function (error, response, body) {
    if(!JSON.parse(body).data[number]) return message.channel.send(errors.fr.permissions.erreur)

let url = JSON.parse(body).data[number].url

message.channel.send(url)
  })
}

exports.conf = {
    aliases: ['gif']
    };
    
    exports.help = {
     name: 'gifsearch', description: 'Montre un GIF', usage: `gifsearch <texte>`
     };