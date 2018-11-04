module.exports = async(client, oldmsg, newmsg) => {
    const Discord = require('discord.js')
    if(oldmsg.author.bot) return
let textlog = require('../database/textlog.json')
if(!textlog[oldmsg.guild.id]) return;
let cid = textlog[oldmsg.guild.id].channel
let embed = new Discord.RichEmbed()
.setAuthor('Update')
.setDescription('Message update')
.addField('Old message', `\`\`\`${oldmsg}\`\`\``)
.addField('New message', `\`\`\`${newmsg}\`\`\``)
client.channels.get(cid).send(embed) 

}
