module.exports = async(client, guild) => {
    const Discord = require('discord.js')
    const config = require('../util/config.json')
    let embed = new Discord.RichEmbed()
	.setAuthor(client.user.username, client.user.avatarURL)
	.setColor("RANDOM")
	.setTitle(`🤖 NOUVEAU SERVEUR! 🤖`)
	.setDescription(`**On m'a ajouté sur le serveur :** ${guild.name}\n**Son id est :** ${guild.id}\n**Il a** : ${guild.memberCount} membres !\nSon propiétaire est : ${guild.owner}`)
	client.guilds.get("469060312830574594").channels.get("475324562452774924").send(embed)
	guild.owner.send("Merci beaucoup de m'avoir invité sur votre serveur, vous verrez, je ne vous décevrais pas, car je saurais assouvir à vos besoins :grin:.\n\n Je suis un bot qui a besoin de ces permissions pour fonctionner correctement : ```-MANAGE_ROLES\n-KICK_MEMBERS\n-BAN_MEMBERS\n-MANAGE_NICKNAME\nToutes les permissions de textes ainsi que vocales```\nEnfin afin que je fonctionne correctement, vous devez me configurer, faites `!logchannel` et suivez les instructions afin d'avoir un salon logs, mon créateur possède un logs entier de toutes les commandes, si jamais vous spammez des commandes, attendez-vous à être banni du bot et à être interdit d'utilisation\n\nSi vous avez toutes suggestion, contactez : Guysmow#5384 ou alors rejoignez ce serveur : https://discord.gg/F2KahGk\nEN : Thanks to add me on your server, i'm a bot he can do all what you need, cause I know what you want :grin:.\n\n To work correctly, i need this permissions : ```-MANAGE_ROLES\n-KICK_MEMBERS\n-BAN_MEMBERS\n-MANAGE_NICKNAME\nAll text and vocals permissions```\nFirst you have to configure the logchannel : `g!logchannel <CHANNEL ID>`\n\nIf you have any suggestions, contact : Guysmow#5384 or join this server : https://discord.gg/F2KahGk")
client.users.get(config.onwer).send(embed)
}