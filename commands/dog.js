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
  .setAuthor('Aide du Dog')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}dog`)
  .addField('Utilité :', "Waouf, waouf")
  .setFooter('Commande Dog')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Dog help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}dog}`)
   .addField('His utility :', "Show a dog")
   .setFooter('Command Dog')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }     let {
        body
    } = await superagent
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
        .setTitle("Wouf, wouf :dog:")
        .setColor("RANDOM")
        .setImage(body.url)
    message.channel.send(dogembed);

}

exports.conf = {
    aliases: ['chien', "waouf"]
    };
    
    exports.help = {
     name: 'dog', description: 'Montre une photo de chien', usage: `dog`
     }