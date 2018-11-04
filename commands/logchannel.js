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
  .setAuthor('Aide du Logchannel')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `logchannel <ID du channel>`)
  .addField('Utilité :', "Configurer le salon des logs")
  .setFooter('Commande Logchannel')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Logchannel help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `logchannel <channel ID>`)
   .addField('His utility :', "Configurer le salon des logs")
   .setFooter('Command Logchannel')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
    let logc = require('../database/log.json')
 

    


    if(clangue === "fr"){
        var maxLen = 18
      if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Tu n'as pas les permissions");
    if(!args[0] || args[0 == null]) return message.reply(`Usage: ${prefix}logchannel <ID DU CHANNEL>`);
    if(isNaN(args[0])) return message.channel.send("Pour configurer les logs, vous devez insérer l'ID du channel ")
     if(args.join(' ').length !== maxLen) return message.channel.send('Un ID d\'un channel possède 18 chiffres ')

    logc[message.guild.id] = {
      log: args[0]
    };
  
    fs.writeFile("./database/log.json", JSON.stringify(logc), (err) => {
      if (err) console.log(err)
    });
  
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF0500")
    .setTitle("Channel des logs modifié")
    .setDescription(`Nouveau channel des logs : <#${args[0]}>`);
  
    message.channel.send(sEmbed);}

    if(clangue === "en"){
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You can't make that");
    if(!args[0] || args[0 == null]) return message.reply(`Usage: ${prefix}logchannel <CHANNELID>`);
    if(isNaN(args[0])) return message.channel.send("To configure the LOG channel, you need to put a number.")
    logc[message.guild.id] = {
        log: args[0]
      };
    
      fs.writeFile("./database/log.json", JSON.stringify(logc), (err) => {
        if (err) console.log(err)
      });
    
  
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF0500")
    .setTitle("Log channel set")
    .setDescription(`The logs will be in : <#${args[0]}>`);
  
    message.channel.send(sEmbed);}




}


  exports.conf = {
    aliases: ['setlog', 'logset']
    };
    
    exports.help = {
     name: 'logchannel', description: 'Modifier le channel log', usage: `logchannel <IDCHANNEL>`
     };