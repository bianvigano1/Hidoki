const randomPuppy = require('random-puppy');
const request = require('snekfetch');
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
  .setAuthor('Aide du Penis')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}penis`)
  .addField('Utilité :', "*hum hum* :smirk:")
  .setFooter('Commande Penis')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Penis help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}penis`)
   .addField('His utility :', "*hum hum*")
   .setFooter('Command Penis')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command :facepalm:")

    var subreddits = [
        'dickpic'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`dick.jpg`, r.body)
                message.channel.send({files: [{attachment: r.body, name: 'dick.jpg'}] })
                fs.unlink(`./dick.jpg`)
            })
        })
}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'penis', description: 'Voir une joli photo', usage: `penis`
     };