var request = require('request')
const errors = require('../util/errors.json')
const arg = require('../util/args.json')
const config = require('../util/config.json')
const fs = require('fs')
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
  .setAuthor('Aide du Cry')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `cry`)
  .addField('Utilité :', "Pleure")
  .setFooter('Commande Cry')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Cry help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `cry`)
   .addField('His utility :', "To cry")
   .setFooter('Command Cry')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }     let number = Math.floor(Math.random() * 29) + 1;

  

       let user = message.mentions.users.first() ? message.mentions.users.first() : message.author

request(`https://api.giphy.com/v1/gifs/search?api_key=${config.giphyapikey}&q=cry&limit=30&offset=0&rating=G&lang=fr`, function (error, response, body) {
    if(!JSON.parse(body).data[number]) return message.channel.send(errors.fr.permissions.erreur)

let url = JSON.parse(body).data[number].url

message.channel.send(`${user} pleure\n`+url)
  })
}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'cry', description: 'Pleure', usage: `cry [user]`
     };