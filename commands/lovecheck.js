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
  .setAuthor('Aide du Lovecheck')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}lovecheck <membre1> <membre2>`)
  .addField('Utilité :', "Fait un test d'amour")
  .setFooter('Commande Lovecheck')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Lovecheck help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}lovecheck <user1> <user2>`)
   .addField('His utility :', "Lovecheck rate")
   .setFooter('Command Lovecheck')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
   let user1 = message.mentions.users.first();
 
      let user2 = message.mentions.users.last();

      let member1 = message.guild.member(user1);
      let member2 = message.guild.member(user2);
      let number = Math.floor(Math.random() * 99) + 1;

    if(clangue === "fr"){

if(message.mentions.users.size === 2){
     if(member2.id === "381116968327053313" && member1.id === "477088974045708288") return message.channel.send('Entre mon développeur et, l\'amour n\'a pas de frontière et est **infini**')
  message.channel.send(`Il y'a ${number}% d'amour :heart:, entre ${member1.user.username} et ${member2.user.username}`)
        
    }else{message.channel.send(errors.fr.mention.deux)}
}

    if(clangue === "en"){
  
if(message.mentions.users.size === 2){
    
    
  message.channel.send(`There is ${number}% of love :heart:, beetween ${member1} et ${member2}`)
        
    }else{message.channel.send(errors.en.mention.deux)}
}



}

exports.conf = {
    aliases: ['love']
    };
    
    exports.help = {
     name: 'lovecheck', description: 'Test d\'amour', usage: `lovecheck <user1> <user2>`
     };