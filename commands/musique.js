

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
  .setAuthor('Aide du Musique')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `musique`)
  .addField('Utilité :', "Aucune idée, juste un délire de mon développeur")
  .setFooter('Commande Musique')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Musique help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `musique`)
   .addField('His utility :', "No idea, just my developper is crazy")
   .setFooter('Command Musique')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 

   message.channel.send(`C'est la musique préférée de mon développeur :rolling_eyes:`, {
    files: [
      "./database/musique/sonnerie.mp3"
    ]
  })
}





exports.conf = {
    aliases: ['music']
    };
    
    exports.help = {
     name: 'musique', description: 'Tutututu', usage: `musique`
     };