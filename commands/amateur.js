//<------------------MODULE--------------------->

const randomPuppy = require('random-puppy');

const request = require('snekfetch');

const fs = require("fs")
//<------------------PACKAGE--------------------->

let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require('../database/langue.json')

const arg = require('../util/args.json')
//<--------------------DEBUT DU CODE--------------->

exports.run = (client, message, args1) => {
    let clangue = langue[message.author.id].langue
    let prefix = prefixes[message.guild.id].prefixes;

    let args = message.content.split(" ").slice(1);
    
    if(args[0] === "help"){
      const online = client.emojis.get("482485733886656512");
    const idle = client.emojis.get("482485733316362241");
    const dnd = client.emojis.get("482485733488197642");
    
    let frembed = new Discord.RichEmbed()
    .setAuthor('Aide du Amateur')
    .setDescription(arg.fr.no)
    .addField('Commande :', `${online} - Disponible`)
    .addField('Utilisation :', `${prefix}amateur`)
    .addField('Utilité :', "Vous montre une belle image NSFW :smirk:")
    .setFooter('Commande Amateur')
    let enembed = new Discord.RichEmbed()
      .setAuthor('8ball help')
      .setDescription(arg.fr.no)
      .addField('Command :', `${online} - Available`)
      .addField('How to use it :', `${prefix}8ball [issue]`)
      .addField('His utility :', "Show you a beautiful image NSFW")
      .setFooter('Command Amator')
      if(clangue === "fr") return message.channel.send(frembed)
      if(clangue === "en") return message.channel.send(enembed)
    }
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command :facepalm:")

    var subreddits = [
        'RealGirls',
        'amateur',
        'gonewild'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`amateur.jpg`, r.body)
                message.channel.send({files: [{attachment: r.body, name: 'amateur.jpg'}] })
                fs.unlink(`./amateur.jpg`)
            })
        })
}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'amateur', description: 'Voir une joli photo', usage: `amateur`
     };