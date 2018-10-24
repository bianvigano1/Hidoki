const base64 = require("js-base64").Base64;
const fs = require('fs')
const Discord = require('discord.js')
const arg = require('../util/args.json')

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
  .setAuthor('Aide du Base64')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}base64 <decode/encode> <texte>`)
  .addField('Utilité :', "Encode ou décode votre texte de la base64")
  .setFooter('Commande Base64')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Base64 help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}base64 <decode/encode> <text> `)
   .addField('His utility :', "Encore or decode your text from base64")
   .setFooter('Command Base64')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(args[0] === null) return message.channel.send('Vous devez écrire encode ou decode en fonction de ce que vous voulez-faire.')
if(args[0] === "encode"){
    let texte = args.slice(1).join(" ");
    const b64Encoded = base64.encode(texte);
    message.channel.send(`\`\`\`\n${b64Encoded}\`\`\``);
}
if(args[0] === "decode"){
    let texte = args.slice(1).join(" ");
    const b64Encoded = base64.decode(texte);
    message.channel.send(`\`\`\`\n${b64Encoded}\`\`\``);
}
   
}

exports.conf = {
    aliases: ['b64']
    };
    
    exports.help = {
     name: 'base64', description: 'Encode ou décode de la base64.', usage: `base64 <argument> <Texte>`
     };
 