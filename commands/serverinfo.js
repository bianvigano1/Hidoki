var moment = require("moment");
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
  .setAuthor('Aide du Serverinfo')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}serverinfo`)
  .addField('Utilité :', "Voir les infos du serveur")
  .setFooter('Commande Serverinfo')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Serverinfo help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}serverinfo`)
   .addField('His utility :', "Show the serverinfo")
   .setFooter('Command Serverinfo')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 

if(clangue === "fr"){
    message.channel.send(`Information du serveur : **${message.guild.name}**`, {
        embed: {
            color: 0xDF9C9D,

            fields: [{
                    name: "• Nom :",
                    value: `${message.guild.name}`,
                    inline: true
                }, {
                    name: "• ID :",
                    value: `${message.guild.id}`,
                    inline: true
                }, {
                    name: "• Crée le :",
                    value: moment(message.guild.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Propriétaire :",
                    value: message.guild.owner.user.tag,
                    inline: true
                },{
                    name: "• Région du serveur : ",
                    value: `${message.guild.region}`,
                    inline: true
                },
                {
                    name: "• Membres :",
                    value: `${message.guild.memberCount}`,
                    inline: true
                }, {
                    name: "• Dernier membre :",
                    value: `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`,
                    inline: true
                }, {
                    name: "• Channel :",
                    value: `**${message.guild.channels.filter(channel => channel.type === 'text').size}** texte - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`,
                    inline: true
                }, {
                    name: "• AFK channel",
                    value: `${message.guild.afkChannel}`,
                    inline: true
                },{
                  name: 'Acronyme',
                  value: message.guild.nameAcronym,
                  inline: true
                },{
                  name: "• Niveau de vérification", 
                  value: `${message.guild.verificationLevel}`, 
                  inline: true
                }, {
                    name: `• Nombre de rôles :`,
                    value: message.channel.guild.roles.size,
                    inline: true
                }, {
                    name: `• Nombre d'emojis :`,
                    value: message.channel.guild.emojis.size,
                    inline: true
                }
            ]
          
        }
    })
}
  if(clangue === "en"){
    message.channel.send(`Server info : **${message.guild.name}**`, {
        embed: {
            color: 0xDF9C9D,

            fields: [{
                    name: "• Name :",
                    value: `${message.guild.name}`,
                    inline: true
                }, {
                    name: "• ID :",
                    value: `${message.guild.id}`,
                    inline: true
                }, {
                    name: "• Created At :",
                    value: moment(message.guild.createdAt).format("LL"),
                    inline: true
                }, {
                    name: "• Guild owner :",
                    value: message.guild.owner.user.tag,
                    inline: true
                },{
                    name: "• Guild region : ",
                    value: `${message.guild.region}`,
                    inline: true
                },
                {
                    name: "• Membercount :",
                    value: `${message.guild.memberCount}`,
                    inline: true
                }, {
                    name: "• Last members :",
                    value: `${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}`,
                    inline: true
                }, {
                    name: "• Channelcount :",
                    value: `**${message.guild.channels.filter(channel => channel.type === 'text').size}** texte - **${message.guild.channels.filter(channel => channel.type === 'voice').size}** audio`,
                    inline: true
                }, {
                    name: "• AFK channel",
                    value: `${message.guild.afkChannel}`,
                    inline: true
                },{
                  name: "• Verification level", 
                  value: `${message.guild.verificationLevel}`, 
                  inline: true
                }, {
                    name: `• Roles - **${message.channel.guild.roles.size}**:`,
                    value: message.guild.roles.array().map(g => g).join(', '),
                    inline: true
                }, {
                    name: `• Emojis - **${message.channel.guild.emojis.size}**:`,
                    value: `${message.guild.emojis.map(e => e).join(', ')} ** **`,
                    inline: true
                }
            ]
          
        }
    })
}
  
  
  
  
  
}


exports.conf = {
    aliases: ['si']
    };
    
    exports.help = {
     name: 'serverinfo', description: 'Information sur un serveur', usage: `si`
     }