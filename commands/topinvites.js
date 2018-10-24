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
  .setAuthor('Aide du Topinvites')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}topinvites`)
  .addField('Utilité :', "Voir le top des initations")
  .setFooter('Commande Topinvites')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Topinvites help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}topinvites`)
   .addField('His utility :', "Show the leaderboard of invites")
   .setFooter('Command Topinvites')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  if(clangue === "fr"){
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Désole, je ne peux pas voir les invitations');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} a invité ${invites.uses} personnes`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor(0xCB5A5E)
        .setDescription(`\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
}

    if(clangue === "en"){
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Soory, i can\'t see invitations.');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} invited ${invites.uses} members`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor(0xCB5A5E)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
}

  
  
}

exports.conf = {
    aliases: ['inviteleaderboards']
    };
    
    exports.help = {
     name: 'topinvites', description: 'Voir le top des invitation', usage: `topinvites`
     }