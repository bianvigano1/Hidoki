const Discord = require("discord.js");
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Table')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}table <number>`)
  .addField('Utilité :', "Tricheur..")
  .setFooter('Commande Table')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Table help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}table <number>`)
   .addField('His utility :', "Ohw cheater")
   .setFooter('Command Table')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  const lettre = ["a", "b","d", "c", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","&", "'", '"', "(", "è", ";", ":", "!", "ù", "?", "/", "+", "-", "*"];
 
    if( lettre.some(word => args[0].includes(word)) ) {

      message.channel.send('Seul les nombres sont autorisés ! ')
      return;
    }else{
let nombre = args[0];
  let nombre1 = nombre * 1;
let nombre2 = nombre * 2;
let nombre3 = nombre * 3;
let nombre4 = nombre * 4;
let nombre5 = nombre * 5;
let nombre6 = nombre * 6;
let nombre7 = nombre * 7;
let nombre8 = nombre * 8;
let nombre9 = nombre * 9;
let nombre10 = nombre * 10;

message.channel.send(`__Table de ${nombre}__ : \n\n ${nombre} x 1 = **${nombre1}**\n ${nombre} x 2 = **${nombre2}**\n ${nombre} x 3 = **${nombre3}**\n ${nombre} x 4 = **${nombre4}**\n ${nombre} x 5 = **${nombre5}**\n ${nombre} x 6 = **${nombre6}**\n ${nombre} x 7 = **${nombre7}**\n ${nombre} x 8 = **${nombre8}**\n ${nombre} x 9 = **${nombre9}**\n ${nombre} x 10 = **${nombre10}**\n `)
 


}    }

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'table', description: 'Voir les tables de multiplications', usage: `table <nombre>`
     };