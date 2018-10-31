const Discord = require('discord.js');
const fs = require('fs')
const langue = require('../database/langue.json')
exports.run = async (client, message, args1) => {
    let clangue = langue[message.author.id].langue
    let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));
    let args = message.content.split(" ").slice(1);

    let prefix = prefixes[message.guild.id].prefixes;
  
    const online = client.emojis.get("482485733886656512");
    const dnd = client.emojis.get("482485733488197642");

    let fembed = new Discord.RichEmbed()
    .setAuthor('Menu d\'aide')
    .setDescription('Le préfix est : ' + prefix)
    .setFooter(`Faites : ${prefix}[commande] help, afin d'avoir les informations d'une commande(sauf catégorie Images)`)
    .addField('🛠 - Menu utilitaires' + online, "`ascii` `base32` `base64` `base85` `choose` `colorgif` `donator` `emojify` `help -_-` `heure` `infobot` `invite` `math` `newinvite` `npm` `pays` `ping` `remindme` `serverinfo` `serverlist` `setlanguage` `shortener` `table` `topinvites` `todo` `weather` `youtube`")
    .addField('😂 - Pour s\'amuser' + online, "`8ball` `angry` `avatar` `baton` `cat` `combat` `cookie` `cry` `dog` `gifsearch` `kiss` `macron` `musique` `pfc` `punch` `random` `say` `trump` `user` `userinfo` `vdm` ")
    .addField('👫 - Taux' + online, "`friendcheck` `lovecheck` `hatecheck` `loveship`")
    .addField('📧 - VCS' + online, "`gt`")
    .addField('🖼 - Images' + online, "`blurple` `blur` `convinvert` `convulte` `darkgreen` `darkred` `discord` `displace` `fire` `french` `ghost` `grayscale` `green` `invert` `orangly` `pixelate` `posterize` `rainbow` `red` `reddit` `rgb` `sepia` `skin` `skull` `spotify` `steam` `time` `triggered` `triggeredinvert` `twitch` `twitter` ")
    .addField('🍆 - NSFW' + dnd, "`4k` `amateur` `hentai` `penis` `porngif` `public` `pussy`")
    .addField('💰 - Don/Economie' + online, "`coins` `pay` `slot` `daily` `work`")
    .addField('🔒 - Sécurité' + online, "`automod`")
    .addField('🎉 - GiveAway' + online, "`giveaway`")
    .addField('🆔 - Support' + online, "`support` `report`")
    .addField('❌ - Commandes interdites' + online, "`eval` `gi` `reboot` `destroy` `reply` `leave`")
    .addField('Modération' + online, "help mod")
      
    
    let febed = new Discord.RichEmbed()
    .setAuthor('Menu d\'aide modération')
    .setFooter(`Faites : ${prefix}[commande] help, afin d'avoir les informations d'une commande`)
    .addField('addrole' + online, "Rajoute un rôle à un utilisateur")
    .addField('ban' + online, "Bannir un utilisateur")
    .addField('clear' + online, "Supprime un certain nombre de messages")
    .addField('warn/deletewarn/seewarns' + online, "Gérer les avertissement")
    .addField('hackban' + online, "Bannir quelqu'un par son ID")
    .addField('lockdown' + online, "Permet de bloquer un channel")
    .addField('logchannel' + online, "Configurer le channel des logs")
    .addField('removerole' + online, "Retire un rôle à un utilisateur")
    .addField('setprefix' + online, "Modifie le préfixe du serveur")  
    
    let eembed = new Discord.RichEmbed()
    .setAuthor('Help menu')
    .setDescription('Préfix is : ' + prefix)
    .setFooter(`Write : ${prefix}[commande] help, to have info on commands (except category Images)`)
    .addField('🛠 - Tools commands' + online, "`ascii` `base32` `base64` `base85` `choose` `colorgif` `donator` `emojify` `help -_-` `heure` `infobot` `invite` `math` `newinvite` `npm` `pays` `ping` `remindme` `serverinfo` `serverlist` `setlanguage` `shortener` `table` `topinvites` `todo` `weather` `youtube`")
    .addField('😂 - To have fun' + online, "`8ball` `angry` `avatar` `baton` `cat` `combat` `cookie` `cry` `dog` `gifsearch` `kiss` `macron` `musique` `pfc` `punch` `random` `say` `trump` `user` `userinfo` `vdm` ")
    .addField('👫 - Rate' + online, "`friendcheck` `lovecheck` `hatecheck` `loveship`")
    .addField('📧 - VCS' + online, "`gt`")
    .addField('🖼 - Images' + online, "`blurple` `blur` `convinvert` `convulte` `darkgreen` `darkred` `discord` `displace` `fire` `french` `ghost` `grayscale` `green` `invert` `orangly` `pixelate` `posterize` `rainbow` `red` `reddit` `rgb` `sepia` `skin` `skull` `spotify` `steam` `time` `triggered` `triggeredinvert` `twitch` `twitter` ")
    .addField('🍆 - NSFW' + dnd, "`4k` `amateur` `hentai` `penis` `porngif` `public` `pussy`")
    .addField('💰 - Money' + online, "`coins` `pay` `slot` `daily` `work`")
    .addField('🔒 - Security' + online, "`automod`")
    .addField('🎉 - GiveAway' + online, "`giveaway`")
    .addField('🆔 - Support' + online, "`support` `report`")
    .addField('❌ - Unauthorized commands' + online, "`eval` `gi` `reboot` `destroy` `reply` `leave`")
    .addField('Moderation' + online, "help mod")

    
    let eebed = new Discord.RichEmbed()
    .setAuthor('Menu d\'aide modération')
    .setFooter(`Write : ${prefix}[commande] help, to have infos on commands`)
    .addField('addrole' + online, "Add a role to an user")
    .addField('ban' + online, "Ban an user")
    .addField('clear' + online, "Delete messages")
    .addField('warn/deletewarn/seewarns' + online, "Manage the warns")
    .addField('hackban' + online, "Ban with ID")
    .addField('lockdown' + online, "Lock a channel")
    .addField('logchannel' + online, "Change the channel log")
    .addField('removerole' + online, "Remoe a role to an user")
    .addField('setprefix' + online, "Change the prefix on the server")  
    if(clangue=== "fr"){        
        if(args[0] === "mod") { return message.channel.send(febed)}


        message.channel.send(fembed)
        }
        if(clangue=== "en"){
            if(args[0] === "mod") { return message.channel.send(eebed)}

            message.channel.send(eembed)
            }
}
exports.conf = {
    aliases: ['aide']
    };
    
    exports.help = {
     name: 'help', description: 'Voir la page d\'aide', usage: `help`
     }