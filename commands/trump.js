var request = require('request')
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
  .setAuthor('Aide du Trump')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `trump`)
  .addField('Utilité :', "Voir un gif de Trump")
  .setFooter('Commande Trump')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Trump help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `trump`)
   .addField('His utility :', "Show a gif about Trump")
   .setFooter('Command Trump')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    let number = Math.floor(Math.random() * 29) + 1;

  



  
request(`https://api.giphy.com/v1/gifs/search?api_key=${config.giphyapikey}&q=trump&limit=30&offset=0&rating=G&lang=fr`, function (error, response, body) {
    if(!JSON.parse(body).data[number]) return message.channel.send('Une erreur est survenue')

let url = JSON.parse(body).data[number].url

message.channel.send(url)
  })
}

exports.conf = {
    aliases: ['tromp']
    };
    
    exports.help = {
     name: 'trump', description: 'Montre un gif de Trump', usage: `trump`
     };