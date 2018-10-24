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
  .setAuthor('Aide du Sondage')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}sondage <sujet>`)
  .addField('Utilité :', "Lance un sondage")
  .setFooter('Commande Sondage')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Sondage help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}sondage <topic>`)
   .addField('His utility :', "Make a poll")
   .setFooter('Command Sondage')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 

const oui = client.emojis.get("482478938493288448");
const non = client.emojis.get("482478890841800714");

if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas la permission d'organiser un sondage.");
var sondage = args.slice(0).join(" ")
if(!sondage) return message.reply("Entrez un texte")

var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle(`Sondage lancé par ${message.author.username}`)
.setDescription(`**----------** \n Sujet du sondage : ${sondage}`, `** **`)
.addField(`Choisissez une réponse avec ${oui} ou ${non}`, "** **")
.setFooter("Sondage")

message.channel.send(embed)
       .then(message =>{ 
             message.react(oui); 
             message.react(non);
 })
console.log(`Un sondage a été envoyé correctement et son sujet est : ${sondage}`)
}



exports.conf = {
    aliases: ['poll']
    };
    
    exports.help = {
     name: 'sondage', description: 'Rapporter votre bug', usage: `report <bug>`
     };