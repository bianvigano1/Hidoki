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
  .setAuthor('Aide du Choose')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `choose <mot1> <mot2>`)
  .addField('Utilité :', "Fait un choix entre deux mots")
  .setFooter('Commande Choose')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Choose help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `choose <word1> <word2>`)
   .addField('His utility :', "Play versus the IA")
   .setFooter('Command Choose')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
 if(clangue === "fr"){ 

  let choix1 = args[0]
  let choix2 = args[1]
if(!choix1) return message.channel.send('Veuillez entrez 2 mots')
  if(!choix2) return message.channel.send('Veuillez entrez 2 mots')
  var replys = [choix1, choix2];

  
  let reponse = replys[Math.floor(Math.random() * replys.length)]

message.reply(`Je choisis : **${reponse}**`)
}

if(clangue === "en"){
let choix1 = args[0]
  let choix2 = args[1]
if(!choix1) return message.channel.send('Please enter 2 words')
  if(!choix2) return message.channel.send('Please enter 2 words')
  var replys = [choix1, choix2
  ];
        let reponse = replys[Math.floor(Math.random() * replys.length)]
message.reply(`I choose : **${reponse}**`)
}

}



exports.conf = {
    aliases: ['choix']
    };
    
    exports.help = {
     name: 'choose', description: 'Je choisis entre deux mots', usage: `choose <mot1> <mot2>`
     } 