const A = require('discord.js');
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
const Discord = require('discord.js')
let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require("../database/langue.json");
module.exports.run = async (client, message, args1) => {
    

let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);
    if(args[0] === "help"){
        const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Pfc')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `pfc`)
  .addField('Utilité :', "Joue au Pierre-Feuille-Ciseau")
  .setFooter('Commande Pfc')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Pfc help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `pfc`)
   .addField('His utility :', "Play to a RPS")
   .setFooter('Command Pfc')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
 if(clangue === "fr"){

  
  const emoji2 = "✂";

    const emoji1 = "🗿";
    const emoji = "📝";
    message.channel.send('Veuillez appuyer sur une réaction !').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
          msg.react(emoji2)
            const feuille = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const pierre = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
           const ciseau = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
            const feuilleok = msg.createReactionCollector(feuille, {
                time: 1000000
            });
            const pierreok = msg.createReactionCollector(pierre, {
                time: 1000000
            });
          const ciseauok = msg.createReactionCollector(ciseau, {
                time: 1000000
            });
          
           let feuillechosie = ["✂, j'ai gagné", "🗿, j'ai perdu", "📝, égalité",
   ]
        let reponse1 = feuillechosie[Math.floor(Math.random() * feuillechosie.length)]
        
  let pierrechosie = ["✂, j'ai perdu", "🗿, égalité", "📝, j'ai gagné",
   ]
        let reponse2 = pierrechosie[Math.floor(Math.random() * pierrechosie.length)]
        
  let ciseauchosie = ["✂, égalité", "🗿, j'ai gagné", "📝, j'ai perdu",
   ]
        let reponse3 = ciseauchosie[Math.floor(Math.random() * ciseauchosie.length)]
        
            feuilleok.on('collect', r => {
              msg.delete();
              var embed = new A.RichEmbed()
              .setColor('RANDOM')
              .setAuthor('PFC')
              .addField('Votre choix', "📝")
              .addField('Mon choix', `${reponse1}`)
              message.channel.send(embed)
                        
            })
            pierreok.on('collect', r => {
                            msg.delete();

                var embed = new A.RichEmbed()
              .setColor('RANDOM')
              .setAuthor('PFC')
              .addField('Votre choix', "🗿")
              .addField('Mon choix', `${reponse2}`)
              message.channel.send(embed)
            })
          ciseauok.on('collect', r => {
                          msg.delete();

                var embed = new A.RichEmbed()
              .setColor('RANDOM')
              .setAuthor('PFC')
              .addField('Votre choix', "✂")
              .addField('Mon choix', `${reponse3}`)
              message.channel.send(embed)
            })
        })
    })
   
}
 if(clangue === "en"){

  
  const emoji2 = "✂";

    const emoji1 = "🗿";
    const emoji = "📝";
    message.channel.send('Click on a reaction').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
          msg.react(emoji2)
            const feuille = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const pierre = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
           const ciseau = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
            const feuilleok = msg.createReactionCollector(feuille, {
                time: 1000000
            });
            const pierreok = msg.createReactionCollector(pierre, {
                time: 1000000
            });
          const ciseauok = msg.createReactionCollector(ciseau, {
                time: 1000000
            });
          
           let feuillechosie = ["✂, I win", "🗿, I lost", "📝, equality",
   ]
        let reponse1 = feuillechosie[Math.floor(Math.random() * feuillechosie.length)]
        
  let pierrechosie = ["✂, I lost", "🗿, equality", "📝, I win",
   ]
        let reponse2 = pierrechosie[Math.floor(Math.random() * pierrechosie.length)]
        
  let ciseauchosie = ["✂, equality", "🗿, I won", "📝, I lost",
   ]
        let reponse3 = ciseauchosie[Math.floor(Math.random() * ciseauchosie.length)]
        
            feuilleok.on('collect', r => {
              msg.delete();
              var embed = new A.RichEmbed()
              .setColor('RANDOM')
              .setAuthor('PFC')
              .addField('Your choice', "📝")
              .addField('My choice', `${reponse1}`)
              message.channel.send(embed)
                        
            })
            pierreok.on('collect', r => {
                            msg.delete();

                var embed = new A.RichEmbed()
              .setColor('RANDOM')
              .setAuthor('PFC')
              .addField('Your choice', "🗿")
              .addField('My choice', `${reponse2}`)
              message.channel.send(embed)
            })
          ciseauok.on('collect', r => {
                          msg.delete();

                var embed = new A.RichEmbed()
              .setColor('RANDOM')
              .setAuthor('PFC')
              .addField('Your choice', "✂")
              .addField('My choice', `${reponse3}`)
              message.channel.send(embed)
            })
        })
    })
   
}

}

exports.conf = {
    aliases: ['shifumi', 'pierreur-feuille-ciseau', "rps"]
    };
    
    exports.help = {
     name: 'pfc', description: 'Jouez au PFC', usage: `pfc`
     }