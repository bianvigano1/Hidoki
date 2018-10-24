const ms = require('ms');
const Discord = require('discord.js')
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
  .setAuthor('Aide du Lockdown')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}lockdown <temps/unlock>`)
  .addField('Utilité :', "Locke un channel")
  .setFooter('Commande Lockdown')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Lockdown help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}lockdown <time/unlock>`)
   .addField('His utility :', "Show the bot info")
   .setFooter('Command Lockdown')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  let logc = require('../database/log.json')
  const errors = require('../util/errors.json')

  let log = logc[message.guild.id].log
if(clangue === "fr"){

    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(errors.fr.permissions.membre)

    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.channel.send('Vous devez entrez un temps en secondes, minutes ou en heure');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
            })
            .then(() => {
                message.channel.send('Lockdown retiré.');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
        .setTitle("Channel bloqué")
        .setFooter("Lockdown logs")
        .setColor("#ff0000")
        .setTimestamp()
        .addField("Channel bloqué :", `${message.channel.name}, ID: ${message.channel.id}`)
        .addField("Temps :", time)
        .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
        .addField("Heure :", message.createdAt)
        .addField("Channel :", message.channel)
      let logs = message.guild.channels.find("id", log);
        if(!logs) message.channel.send(logsEmbed); 
        
        logs.send(logsEmbed);
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            })
            .then(() => {
                message.channel.send(`Channel verrouillé pour ${ms(ms(time), { long:true })}`)
                    .then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                    SEND_MESSAGES: null
                                })
                                .then(message.channel.send('Lockdown retiré.'))
                                .catch(console.error);
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
}
  
  if(clangue === "en"){
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(errors.en.permissions.membre)
        .then(msg => msg.delete({
            timeout: 10000
        }));
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.channel.send('you have to put a time.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
            })
            .then(() => {
                message.channel.send('Channels lockdown.');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            })
            .then(() => {
                message.channel.send(`Channel locked for ${ms(ms(time), { long:true })}`)
                    .then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                    SEND_MESSAGES: null
                                })
                                .then(message.channel.send('Lockdown released.'))
                                .catch(console.error);
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
}
  
  
  
}

exports.conf = {
    aliases: ["channellocl"]
    };
    
    exports.help = {
     name: 'lockdown', description: 'Bloquer un salon', usage: `lockdown <temps>`
     };