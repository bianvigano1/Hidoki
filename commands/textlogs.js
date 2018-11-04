const Discord = require('discord.js')
const fs = require('fs')
let errors = require('../util/errors.json')
let langue = require('../database/langue.json')
const textlog = require('../database/textlog.json')
module.exports.run = async(client, message, args1) => {
    let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1)
    if(clangue === "fr"){
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(errors.fr.permissions.membre)}else{
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(errors.en.permissions.membre)
    }

let channeli = message.mentions.channels.first()
let msg2;
if(clangue === "fr") msg2 = "Vous devez insérer le nom d'un channel"
else msg2 = "You have to put a channel name."
if(!channeli && !textlog[message.guild.id]) return message.channel.send(msg2)
if(!textlog[message.guild.id]){
    textlog[message.guild.id] = {
    channel: channeli.id
}
fs.writeFile("./database/textlog.json", JSON.stringify(textlog), (err)=>console.log(err));
}
if(!textlog[message.guild.id]){
    let msg;
    if(clangue === "fr") msg = "Vous n'avez pas de salon de logs de texte configurés, faites `textlogs #channel`"
    else msg = "You do not have textlogs, write `textlogs #channel` to configure it"
    message.channel.send(msg)
    return
}else{
    let idchannel = textlog[message.guild.id].channel
    let msg; 
    if(clangue === "fr") msg = `Votre salon textlogs est configuré à <#${idchannel}>`
    else msg = `Your text logs channel is configure in <#${idchannel}>`
    message.channel.send(msg)
}
}

exports.conf = {
    aliases: ['textlog', "logtexte"]
    };
    
    exports.help = {
     name: 'textlogs', description: 'Configure le channel des logs', usage: `textlogs #channel`
     }