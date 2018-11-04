
//<------------------MODULE--------------------->
const fs = require('fs')

const Discord = require("discord.js")
//<------------------PACKAGE--------------------->
let langue = require('../database/langue.json')

const arg = require('../util/args.json')
//<--------------------DEBUT DU CODE--------------->
module.exports.run = async (client, message, args1) => {
let clangue = langue[message.author.id].langue
let args = message.content.split(" ").slice(1);

if(args[0] === "help"){

  const online = client.emojis.get("482485733886656512");
const idle = client.emojis.get("482485733316362241");
const dnd = client.emojis.get("482485733488197642");

let frembed = new Discord.RichEmbed()
.setAuthor('Aide du 8ball')
.setDescription(arg.fr.requis)
.addField('Commande :', `${online} - Disponible`)
.addField('Utilisation :', `8ball <question>`)
.addField('Utilité :', "Répond aléatoirement à ue question")
.setFooter('Commande 8ball')
let enembed = new Discord.RichEmbed()
  .setAuthor('8ball help')
  .setDescription(arg.en.requis)
  .addField('Command :', `${online} - Available`)
  .addField('How to use it :', `8ball <issue>`)
  .addField('His utility :', "Respond to a question")
  .setFooter('Command 8ball')
  if(clangue === "fr") return message.channel.send(frembed)
  if(clangue === "en") return message.channel.send(enembed)
}
if(clangue === "fr"){
  let tte = args.join(" ")
if (!tte){
  return message.reply("Me faudrait une question pur que je puisse répondre :rolling_eyes:")};
var replys = [


    ":8ball: | Les signes indiquent que **Oui !**",
    ":8ball: | Les signes indiquent que **Non !**",
    ":8ball: | **Je ne sais pas !**",
    ":8ball: | **Peut-être !**",
    ":8ball: | **Peut-être pas !**",
    ":8ball: | **Sûrement !**",
    ":8ball: | **Sans doute !**",
    ":8ball: | **Probablement ! **",
    ":8ball: | **Probablement pas !**",
    ":8ball: | **Absolument !**",
    ":8ball: | **Sans aucun doute !**",
    ":8ball: | **Je pense que non !**",
    ":8ball: | **Je pense que oui !**",
    ":8ball: | **Absolument pas !**",
    ":8ball: | **Sûrement pas !**",
    ":8ball: | Ta question ne sert à **rien**",
    ":8ball: | C'est évident... c'est un **non**",
    ":8ball: | C'est évident... c'est un **oui**",
    ":8ball: | Je ne répondrais pas",

]

 let reponse = (replys[Math.floor(Math.random() * replys.length)]) 

 message.channel.send(reponse)
}
  
  if(clangue === "en"){
  
  
let tte = args.join(" ")
if (!tte){
  return message.reply("Please, ask me a question.")};
var replys = [


    ":8ball: | Yes",
    ":8ball: | No",
    ":8ball: | I don't know",
    ":8ball: | Maybe",
    ":8ball: | Maybe not",
    ":8ball: | Surely",
    ":8ball: | Sure",
    ":8ball: | Probably",
    ":8ball: | Probably not",
    ":8ball: | Absolutly",
    ":8ball: | No way",
    ":8ball: | I think not",
    ":8ball: | I think so",
    
]

 let reponse = (replys[Math.floor(Math.random() * replys.length)]) 

 
 message.channel.send(reponse)
  
  }
}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: '8ball', description: 'Je réponds à vos questions', usage: `8ball <question>`
     };