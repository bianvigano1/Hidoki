const superagent = require("superagent");
const errors = require('../util/errors.json')
const arg = require('../util/args.json')
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
  .setAuthor('Aide du Baton')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `baton`)
  .addField('Utilité :', "Joue contre l'intelligence artificielle")
  .setFooter('Commande Baton')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Baton help')
   .setDescription(arg.en.no)
   .addField('Command :', `${dnd} - Unavailable`)
   .addField('How to use it :', `baton`)
   .addField('His utility :', "Play versus the IA")
   .setFooter('Command Baton')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(clangue === "fr"){
  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);
if(!body) message.channel.send(errors.fr.permissions.erreur)
  let catembed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Cat 🐱")
  .setImage(body.file);

  message.channel.send(catembed);
}
  
  if(clangue === "en"){
  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);
if(!body) message.channel.send(errors.en.permissions.erreur)
  let catembed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Cat 🐱")
  .setImage(body.file);

  message.channel.send(catembed);
  }
}

exports.conf = {
    aliases: ["chat", "meow", "miaou"]
    };
    
    exports.help = {
     name: 'cat', description: 'Je montre une photo de chat', usage: `cat>`
     };