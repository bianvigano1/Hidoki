const randomPuppy = require('random-puppy');
const request = require('snekfetch');
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
  .setAuthor('Aide du Public')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `public`)
  .addField('Utilité :', "Ohlala :smirk:")
  .setFooter('Commande Public')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Public help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `$public`)
   .addField('His utility :', "Mmh :smirk:")
   .setFooter('Command Pfc')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command :facepalm:")

    var subreddits = [
            'naughtyinpublic',
            'gwpublic',
            'exposedinpublic',
            'beachgirls'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                request.get(url).then(r => {
                    fs.writeFile(`public.jpg`, r.body)
                    message.channel.send({files: [{attachment: r.body, name: 'public.jpg'}] })
                    fs.unlink(`./public.jpg`)
                })
            })
        }

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'public', description: 'Voir une joli photo', usage: `public`
     };