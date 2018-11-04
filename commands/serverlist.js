const Discord = require("discord.js");
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Serverlist')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `serverlist`)
  .addField('Utilité :', "Voir la liste des serveurs")
  .setFooter('Commande Serverlist')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Serverlist help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `serverlist`)
   .addField('His utility :', "Show the serverlist")
   .setFooter('Command Serverlist')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }   
  let Table = require(`cli-table`);
    let table = new Table({
        head: [
            `ID`,
            `Nom`,
            `Users`,
            `Bots`,
            `Total`
                ], colWidths: [30, 50, 10, 10, 10]
    });
    client.guilds.map(g =>
      table.push(
        [g.id, g.name, g.members.filter(u => !u.user.bot).size, g.members.filter(u => u.user.bot).size, g.members.size]
      ));
    require(`snekfetch`)
    .post(`https://hastebin.com/documents`)
    .set(`Content-Type`, `application/raw`)
    .send(table.toString())
    .then(r =>
       message.channel.send(`Voici la liste des serveurs : http://hastebin.com/` + r.body.key));
};

exports.conf = {
    aliases: ['listserver', 'serveur']
    };
    
    exports.help = {
     name: 'serverlist', description: 'Voir la liste des serveurs', usage: `serverlist`
     };