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
  .setAuthor('Aide du Setprefix')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}setprefix <prefix>`)
  .addField('Utilité :', "Changer le préfix du bot")
  .setFooter('Commande Setprefix')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Setprefix help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}setprefix <prefix>`)
   .addField('His utility :', "Change the prefix of the bot")
   .setFooter('Command Setprefix')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    if(clangue === "fr"){
      if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Tu n'as pas les permissions");
    if(!args[0] || args[0 == null]) return message.reply(`Usage: ${prefix}setprefix <new prefix>`);
  
    prefixes[message.guild.id] = {
      prefixes: args[0]
    };
  
    fs.writeFile("./database/prefix.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });
  
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF0500")
    .setTitle("Préfix modifié")
    .setDescription(`Nouveau prefix : ${args[0]}`);
  
    message.channel.send(sEmbed);}

    if(clangue === "en"){
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You can't make that");
    if(!args[0] || args[0 == null]) return message.reply(`Usage: ${prefix}setprefix <new prefix>`);
  
    prefixes[message.guild.id] = {
      prefixes: args[0]
    };
  
    fs.writeFile("./database/prefix.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });
  
    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF0500")
    .setTitle("New prefix")
    .setDescription(`The new prefix is : ${args[0]}`);
  
    message.channel.send(sEmbed);}






}

  exports.conf = {
    aliases: ['newprefix', 'prefixset']
    };
    
    exports.help = {
     name: 'setprefix', description: 'Modifier le préfix', usage: `setprefix <prefix>`
     };