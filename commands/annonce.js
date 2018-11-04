const Discord = require('discord.js')
const config = require('../util/config.json')
exports.run = (client, message, args1) => {
if(message.author.id === config.owner){
  
message.delete();
       let args = message.content.split(" ").slice(1);
       let embed = new Discord.RichEmbed()
       .setAuthor('Annonce du Bot')
       .setDescription('Changement')
       .addField('Passage en : ', '**`V2.3.0`**')
       .addField('Changements : ', '```diff\n- Ajout d\'une vingtaine commandes en plus dans la catégorie Images\n- Optimisation du code (encore)```')
       .addField('Chose à venir', '```diff\n- Aventure (en cours)\n- Avantage premium```')
       .setFooter('Mise à Jour')
message.channel.send(embed)
}}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'annonce', description: 'Lance une annonce', usage: `annonce`
     };