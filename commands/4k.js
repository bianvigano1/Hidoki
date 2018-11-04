//<------------------MODULE--------------------->

const randomPuppy = require('random-puppy');

const request = require('snekfetch');

const fs = require("fs")

const Discord = require('discord.js')
//<------------------PACKAGE--------------------->

const arg = require('../util/args.json')

const errors = require('../util/errors.json')

let langue = require('../database/langue.json')
//<--------------------DEBUT DU CODE--------------->

exports.run = (client, message, args1) => {
    let args = message.content.split(" ").slice(1);
    let clangue = langue[message.author.id].langue

if(args[0] === "help"){

    const online = client.emojis.get("482485733886656512");
 const idle = client.emojis.get("482485733316362241");
 const dnd = client.emojis.get("482485733488197642");
 let frembed = new Discord.RichEmbed()
 .setAuthor('Aide du 4k')
 .setDescription(arg.fr.no)
 .addField('Commande :', `${online} - Disponible`)
 .addField('Utilisation :', `4k`)
 .addField('Utilité :', "Commande NSFW qui montre une joli image :smirk:")
 .setFooter('Commande 4k')
 let enembed = new Discord.RichEmbed()
    .setAuthor('4k help')
    .setDescription(arg.en.no)
    .addField('Command :', `${online} - Available`)
    .addField('How to use it :', `4k`)
    .addField('His utility :', "NSFW command :smirk:")
    .setFooter('Command 4k')
    if(clangue === "fr") return message.channel.send(frembed)
    if(clangue === "en") return message.channel.send(enembed)
}
    if (!message.channel.nsfw && clangue == "fr") return message.channel.send(errors.fr.permissions.nsfw)
    if (!message.channel.nsfw && clangue == "en") return message.channel.send(errors.en.permissions.nsfw)

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`4k.jpg`, r.body)
                message.channel.send({files: [{attachment: r.body, name: '4k.jpg'}] })
                fs.unlink(`./4k.jpg`)
            })
        })
}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: '4k', description: 'Voir une joli photo', usage: `4k`
     };