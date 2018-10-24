const A = require('discord.js');

const arg = require('../util/args.json')
const fs = require('fs')
const Discord = require('discord.js')
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
  .setAuthor('Aide du Colorgif')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}colorgif`)
  .addField('Utilité :', "Le temps des épipetiques")
  .setFooter('Commande Colorgif')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Colorgif help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}colorgif`)
   .addField('His utility :', "Seizure time")
   .setFooter('Command Colorgif')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }   
  let replys = ["https://cdn.glitch.com/ce500e3d-b500-47a8-a6a8-c0b5657d808c%2FWebp.net-gifmaker.gif", "http://www.gif-maniac.com/gifs/41/40586.gif", "http://aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370331/big-53703314d1.gif?v=18", "https://jeu.video/forum/uploads/monthly_2015_11/2.gif.f3174444fbed6d52ab7ec47ceae67600.gif",
               "http://media.tumblr.com/tumblr_ma3s80ynoJ1qg7p8h.gif", "http://damax75.free.fr/serendipity/uploads/epileptique.gif", "https://www.pixilart.com/images/art/80fc1a2805a6c5c.gif", "https://detendusdupad-prod-discourse-uploads.s3-eu-west-1.amazonaws.com/original/2X/4/41372480c1b2b64839582b3cb536afb03add20ad.gif",
               "https://graphism.fr/wp-content/uploads/2009/07/cut_1.gif", "https://i.imgur.com/1wXNQ54.gif", "http://chud.smbks.net/zenphoto/albums/seizures/output.gif", "http://i.imgur.com/OB6C0Bz.gif", "http://38.media.tumblr.com/a4360016f2ab6be1cf00d395c5075512/tumblr_nxxe6roT6E1qjrwyno1_1280.gif", 
               "http://31.media.tumblr.com/75129dc3f5f91c34bad46e81bc8fadd1/tumblr_mt4vulNOgA1sfoh9mo1_400.gif", "http://33.media.tumblr.com/6e30fbda40cf43ae957ac499647a856a/tumblr_n4a4s7qbZ61tu3mtao1_500.gif", "https://vignette.wikia.nocookie.net/desencyclopedie/images/9/99/Seizure.gif/revision/latest?cb=20100524125133", ]
        let reponse = (replys[Math.floor(Math.random() * replys.length)])

if(clangue === "fr"){
    const emoji1 = '🇳'
    const emoji = '🇾'
    message.channel.send('Attention:  Cette commande est dangereuse pour les épiléptiques, si vous acceptez, vous êtes responsables de quelques conséquences que ce soit sur vous ou les autres.').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const yes = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
            const sure = msg.createReactionCollector(yes, {
                time: 1000000
            });
            const no = msg.createReactionCollector(nopleas, {
                time: 1000000
            });
            sure.on('collect', r => {
              message.channel.send("Ce gif se supprime dans 19 secondes").then(async msg => {
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 18 secondes");
    }, 1000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 17 secondes");
    }, 2000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 16 secondes");
    }, 3000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 15 secondes");
    }, 4000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 14 secondes");
    }, 5000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 13 secondes");
    }, 6000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 12 secondes");
    }, 7000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 11 secondes");
    }, 8000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 10 secondes");
    }, 9000);
    setTimeout(() => {
      msg.edit("Ce gif se supprime dans 9 secondes");
    }, 10000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 8 secondes");
    }, 11000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 7 secondes");
    }, 12000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 6 secondes");
    }, 13000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 5 secondes");
    }, 14000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 4 secondes");
    }, 15000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 3 secondes");
    }, 16000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 2 secondes");
    }, 17000);
      setTimeout(() => {
      msg.edit("Ce gif se supprime dans 1 secondes");
    }, 18000);
      setTimeout(() => {
      msg.edit("Gif supprimé");
    }, 19000);
  });
                msg.delete();
                const emb = new A.RichEmbed()
                    .setColor(0xFFFF00)
                    .setImage(reponse)
                    .setFooter(`Requested by: ${message.author.tag}`);
                message.channel.send({
                    embed: emb
                }).then(msg => {
                    msg.delete(19000)
                });
            })
            no.on('collect', r => {
                msg.delete();
            })
        })
    })
   
}
 
  if(clangue === "en"){
      const emoji1 = '🇳'
    const emoji = '🇾'
    message.channel.send(':warning: Warning ! \nThis command is dangerous for epileptics ! \nIf you accept that, you are responsible for the consequences to you, or others !').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const yes = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
            const sure = msg.createReactionCollector(yes, {
                time: 1000000
            });
            const no = msg.createReactionCollector(nopleas, {
                time: 1000000
            });
            sure.on('collect', r => {
              message.channel.send("This gif will be deleted in 19 seconds").then(async msg => {
    setTimeout(() => {
      msg.edit("This gif will be deleted in 18 seconds");
    }, 1000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 17 seconds");
    }, 2000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 16 seconds");
    }, 3000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 15 seconds");
    }, 4000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 14 seconds");
    }, 5000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 13 seconds");
    }, 6000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 12 seconds");
    }, 7000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 11 seconds");
    }, 8000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 10 seconds");
    }, 9000);
    setTimeout(() => {
      msg.edit("This gif will be deleted in 9 seconds");
    }, 10000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 8 seconds");
    }, 11000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 7 seconds");
    }, 12000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 6 seconds");
    }, 13000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 5 seconds");
    }, 14000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 4 seconds");
    }, 15000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 3 seconds");
    }, 16000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 2 seconds");
    }, 17000);
      setTimeout(() => {
      msg.edit("This gif will be deleted in 1 seconds");
    }, 18000);
      setTimeout(() => {
      msg.edit("Gif deleted");
    }, 19000);
  });
                msg.delete();
                const emb = new A.RichEmbed()
                    .setColor(0xFFFF00)
                    .setImage(reponse)
                    .setFooter(`Requested by: ${message.author.tag}`);
                message.channel.send({
                    embed: emb
                }).then(msg => {
                    msg.delete(19000)
                });
            })
            no.on('collect', r => {
                msg.delete();
            })
        })
    })
   
  
  
  }
  
  
  
}
exports.conf = {
    aliases: ['seizure']
    };
    
    exports.help = {
     name: 'colorgif', description: 'Voir un gif pas beau', usage: `colorgif`
     }  