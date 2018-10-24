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
  .setAuthor('Aide du Reload')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}reload`)
  .addField('Utilité :', "Permet de recharger une commande")
  .setFooter('Commande Reload')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Reeload help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}reload`)
   .addField('His utility :', "Reload a command")
   .setFooter('Command Reload')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
    if (message.author.id !== config.owner) return message.channel.send("J'vais reset ton compte bancaire :joy:");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Impossible de reload : ${args[0]}.js`);
    }

    message.channel.send(`**J'ai reload :** ${args[0]}.js`);


}

exports.conf = {
    aliases: ['recharge']
    };
    
    exports.help = {
     name: 'reload', description: 'Reload une commande', usage: `reload`
     }