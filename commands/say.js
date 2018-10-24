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
  .setAuthor('Aide du Say')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}say <message>`)
  .addField('Utilité :', "Je répète votre message")
  .setFooter('Commande Say')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Say help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}say <message>`)
   .addField('His utility :', "Repeat your mesage")
   .setFooter('Command Say')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(message.guild.id === "401667451189985280") return
  message.delete();
  
  let botmessage = args.join(" ");
  if(!botmessage) return message.channel.send('`Vous devez indiquer un message a répéter`')
  if(botmessage.includes("@everyone")) return message.channel.send("Notifier everyone tu feras, ban tu seras")
  if(botmessage.includes("@here")) return message.channel.send("Notifier here tu feras, ban tu seras")

  message.channel.send("**"+message.author.username+"** : "+botmessage);
}

exports.conf = {
aliases: ['dire', 'dit']
};

exports.help = {
 name: 'say', description: 'Je répète ton message', usage: '!say <message>'
 };