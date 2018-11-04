module.exports = async (client, guild) => {
    const Discord = require('discord.js')
    const config = require('../util/config.json')
    let embed = new Discord.RichEmbed()
	.setAuthor(client.user.username, client.user.avatarURL)
	.setColor("RANDOM")
	.setTitle(`🤖 ADIEU SERVEUR 🤖`)
	.setDescription(`**On m'a retiré du serveur :** ${guild.name}\n**Son id est :** ${guild.id}\n**Il a** : ${guild.memberCount} membres !\nSon propiétaire est : ${guild.owner}`)
    client.guilds.get("469060312830574594").channels.get("475324562452774924").send(embed)
    client.users.get(config.onwer).send(embed)

}