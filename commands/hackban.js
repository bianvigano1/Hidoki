const errors = require('../util/errors.json')
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
  .setAuthor('Aide du Hackban')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `hackban <id>`)
  .addField('Utilité :', "Permet de bannir un utilisateur par son ID")
  .setFooter('Commande Hackban')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Hackban help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `hackban <id>`)
   .addField('His utility :', "Used to ban an user with his ID")
   .setFooter('Command Hackban')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
if(clangue === "fr"){
  let mid = args.join(' ');
  if(!mid) return message.channel.send('Vous devez insérer un ID')
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send(errors.fr.permissions.membre);
    client.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send("Echec du ban de : "+id)
        console.log(err)
      })
      message.channel.send(`Ok, j'ai ban l'utilisateur avec l'ID : ${id}.`)
    }).catch(() => {
      message.channel.send(`Pas d'utilisateur avec l'ID : ${mid}, veuillez réésayer. :face_palm:`)
    })
}

if(clangue === "en"){
  let mid = args.join(' ');
  if(!mid) return message.channel.send('You have to put an ID.')

  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send(errors.en.permissions.membre);
    client.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send("Failed to ban user : "+id)
        console.log(err)
      })
      message.channel.send(`I hackban the user with ID :  ${id}.`)
    }).catch(() => {
      message.channel.send(`No user with ID : ${mid}, please retry. :face_palm:`)
    })
}


}

exports.conf = {
    aliases: ['idban']
    };
    
    exports.help = {
     name: 'hackban', description: 'Bannir par ID', usage: `hackban <id>`
     }