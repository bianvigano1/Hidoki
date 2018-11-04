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
  .setAuthor('Aide du Random')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `random [nombre]`)
  .addField('Utilité :', "Tire un nombre au hasard")
  .setFooter('Commande Random')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Random help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `random [number]`)
   .addField('His utility :', "Roll a number")
   .setFooter('Command Random')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
  if(clangue === "fr"){
let nombre = args[0]
if(!nombre) nombre = 100


  let random = Math.floor(Math.random() * nombre) + 1;
  let random1 = Math.floor(Math.random() * nombre) + 1;
  let random2 = Math.floor(Math.random() * nombre) + 1;
  let random3 = Math.floor(Math.random() * nombre) + 1;
  let random4 = Math.floor(Math.random() * nombre) + 1;
  let random5 = Math.floor(Math.random() * nombre) + 1;
  var embed = new Discord.RichEmbed()
  .setTitle('RANDOM')
  .setDescription('Nombre aléatoire')
  .setColor('RANDOM')
 .addField('Nombre minimum :', "1")
 .addField('Nombre maximum :', nombre)
 .addField('Résultat :', random)
 .setFooter('RANDOM')
 .setTimestamp()
  
  await message.channel.send(random1).then(async msg => {
    setTimeout(() => {
      msg.edit(random2);
    }, 200);
    setTimeout(() => {
      msg.edit(random3);
    }, 500);
    setTimeout(() => {
      msg.edit(random4);
    }, 800);
    setTimeout(() => {
      msg.edit(random5);
    }, 1100);
    setTimeout(() => {
    msg.edit(embed)
    }, 1500);

  });
}



if(clangue === "en"){
let nombre = args[0]
if(!nombre) return message.channel.send('Please, put a number')


  let random = Math.floor(Math.random() * nombre) + 1;
  let random1 = Math.floor(Math.random() * nombre) + 1;
  let random2 = Math.floor(Math.random() * nombre) + 1;
  let random3 = Math.floor(Math.random() * nombre) + 1;
  let random4 = Math.floor(Math.random() * nombre) + 1;
  let random5 = Math.floor(Math.random() * nombre) + 1;
  var embed = new Discord.RichEmbed()
  .setTitle('RANDOM')
  .setDescription('Random number')
  .setColor('RANDOM')
 .addField('Minimal number :', "1")
 .addField('Maximal number :', nombre)
 .addField('Result :', random)
 .setFooter('RANDOM')
 .setTimestamp()
  await message.channel.send(random1).then(async msg => {
    setTimeout(() => {
      msg.edit(random2);
    }, 200);
    setTimeout(() => {
      msg.edit(random3);
    }, 500);
    setTimeout(() => {
      msg.edit(random4);
    }, 800);
    setTimeout(() => {
      msg.edit(random5);
    }, 1100);
    setTimeout(() => {
       msg.edit(embed)
    }, 1500);

  });
}



}

exports.conf = {
    aliases: ['number', 'randomnumber'],
    };
    
    exports.help = {
     name: 'random', description: 'Affiche un random number', usage: `random <nombre>`
     };