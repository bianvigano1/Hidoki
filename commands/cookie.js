var request = require('request')
const errors = require('../util/errors.json')
const config = require('../util/config.json')
const arg = require('../util/args.json')
const fs = require('fs')
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
  .setAuthor('Aide du Cookie')
  .setDescription(arg.fr.psobl)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}cookie [utilisateur]`)
  .addField('Utilité :', "Donne un cookie à un autre utilisateur")
  .setFooter('Commande Cookie')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Cookie help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}cookie [user]`)
   .addField('His utility :', "Give a cookie ton an user")
   .setFooter('Command Cookie')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
      let number = Math.floor(Math.random() * 29) + 1;

  

       let user = message.mentions.users.first() ? message.mentions.users.first() : client.user


request(`https://api.giphy.com/v1/gifs/search?api_key=${config.giphyapikey}&q=cookie&limit=30&offset=0&rating=G&lang=fr`, function (error, response, body) {
    if(!JSON.parse(body).data[number]) return message.channel.send(errors.fr.permissions.erreur)

let url = JSON.parse(body).data[number].url

message.channel.send(`${message.author} a donné un cookie à ${user}\n`+url)
  })
}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'cookie', description: 'Donne un cookie', usage: `cookie [user]`
     };