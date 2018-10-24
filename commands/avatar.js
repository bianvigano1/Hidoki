
//<------------------MODULE--------------------->
const Discord = require('discord.js')
const fs = require('fs')
//<------------------PACKAGE--------------------->
let langue = require("../database/langue.json");

let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let arg = require('../util/args.json')
//<------------------DEBUT DU CODE--------------->

exports.run = (client, message, args1) => {
    let prefix = prefixes[message.guild.id].prefixes;

 let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);
 if(args[0] === "help"){
         const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Avatar')
  .setDescription(arg.fr.psobl)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}avatar [utilisateur]`)
  .addField('Utilité :', "Voit l'avatar de quelqu'un")
  .setFooter('Commande Avatar')
  let enembed = new Discord.RichEmbed()
    .setAuthor('Avatar help')
    .setDescription(arg.en.psobl)
    .addField('Command :', `${online} - Available`)
    .addField('How to use it :', `${prefix}avatar [user]`)
    .addField('His utility :', "Look the avatar of an user")
    .setFooter('Command Avatar')
    if(clangue === "fr") return message.channel.send(frembed)
    if(clangue === "en") return message.channel.send(enembed)
  }
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let ava = user.displayAvatarURL
    let embed = {
        color:0x542437,
        description:"Voici l'avatar de "+user.username+". Pour le visionner en plus grand : [clique-ici]("+ava+")",
        image:{url:ava}
    }
    message.channel.send("", {embed});
  }
  exports.conf = {
    aliases: ['pdp']
    };
    
    exports.help = {
     name: 'avatar', description: 'Voir l\'avatar d\'un utilisateur', usage: `avatar [utilisateur]`
     }  