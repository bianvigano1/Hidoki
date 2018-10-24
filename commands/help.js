const Discord = require('discord.js');
const fs = require('fs')
exports.run = async (client, message, args1) => {
    let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

    let prefix = prefixes[message.guild.id].prefixes;
  
    const online = client.emojis.get("482485733886656512");
    const dnd = client.emojis.get("482485733488197642");

    let embed = new Discord.RichEmbed()
    .setAuthor('Menu d\'aide')
    .setDescription('Le préfix est : ' + prefix)
    .setFooter(`Faites : ${prefix}[commande] help, afin d'avoir les informations d'une commande`)
    .addField('🛠 - Menu utilitaires' + online, "`ascii` `base32` `base64` `base85` `choose` `colorgif` `donator` `emojify` `help -_-` `heure` `infobot` `invite` `math` `newinvite` `npm` `pays` `ping` `remindme` `serverinfo` `serverlist` `setlanguage` `shortener` `table` `topinvites` `todo` `weather` `youtube`")
    .addField('😂 - Pour s\'amuser' + online, "`8ball` `angry` `avatar` `baton` `cat` `combat` `cookie` `cry` `dog` `gifsearch` `kiss` `macron` `musique` `pfc` `punch` `random` `say` `trump` `user` `userinfo` `vdm` ")
    .addField('👫 - Taux' + online, "`friendcheck` `lovecheck` `hatecheck` `loveship`")
    .addField('📧 - VCS' + online, "`gt`")
    .addField('🍆 - NSFW' + online, "`4k` `amateur` `hentai` `penis` `porngif` `public` `pussy`")
    .addField('💰 - Don/Economie' + online, "`coins` `pay` `slot` `daily` `work`")
    .addField('🔒 - Sécurité' + online, "`automod`")
    .addField('🎉 - GiveAway' + online, "`giveaway`")
    .addField('🆔 - Support' + online, "`support` `report`")
    .addField('❌ - Commandes interdites' + online, "`eval` `gi` `reboot` `destroy` `reply` `leave`")
      
     message.channel.send(embed)
    
    let ebed = new Discord.RichEmbed()
    .setAuthor('Menu d\'aide modération')
    .setFooter(`Faites : ${prefix}[commande] help, afin d'avoir les informations d'une commande`)
    .addField('addrole' + online, "Rajoute un rôle à un utilisateur")
    .addField('ban' + online, "Banir un utilisateur")
    .addField('clear' + online, "Supprime un certain nombre de messages")
    .addField('warn/deletewarn/seewarns' + online, "Gérer les avertissement")
    .addField('hackban' + online, "Bannir quelqu'un prar son ID")
    .addField('lockdown' + online, "Permet de bloquer un channel")
    .addField('logchannel' + online, "Configurer le channel des logs")
    .addField('removerole' + online, "Retire un rôle à un utilisateur")
    .addField('setprefix' + online, "Modifie le préfix du serveur")      
     message.channel.send(ebed)
    }
exports.conf = {
    aliases: ['aide']
    };
    
    exports.help = {
     name: 'help', description: 'Voir la page d\'aide', usage: `help`
     }