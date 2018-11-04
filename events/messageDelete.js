module.exports = async(client, message) => {
    const Discord = require('discord.js')
    if(message.author.bot) return
let textlog = require('../database/textlog.json')
if(!textlog[message.guild.id]) return;
let cid = textlog[message.guild.id].channel
let embed = new Discord.RichEmbed()
.setAuthor('Delete')
.setDescription('Message Delete')
.addField(' Message', `\`\`\`${message}\`\`\``)
client.channels.get(cid).send(embed) 

}
