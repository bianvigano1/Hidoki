const Discord = require('discord.js')
const config = require('../util/config.json')
exports.run = (client, message, args1) => {
if(message.author.id === config.owner){
  

       let args = message.content.split(" ").slice(1);
       let embed = new Discord.RichEmbed()
       .setAuthor('Annonce du Bot')
       .setDescription('Changement')
       .addField('Passage en : ', '**`V2.0.0`**')
       .addField('Changements : ', '```diff\n- Rewrite du code\n- Nouvelles commandes\n- Préfix customisables\n- Ajout sur DiscordBot et BotList.Space```')
       .addField('Chose à venir', '```diff\n- Aventure\n- Avantage premium```')
       .setFooter('Mise à Jour')
message.channel.send(embed)
}}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'annonce', description: 'Lance une annonce', usage: `annonce`
     };