
const arg = require('../util/args.json')
const fs = require('fs')
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
  .setAuthor('Aide du Combat')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `combat <utilisateur>`)
  .addField('Utilité :', "Combat un autre utilisateur")
  .setFooter('Commande Combat')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Combat help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${dnd} - Unavailable`)
   .addField('How to use it :', `combat <user>`)
   .addField('His utility :', "Fight an user")
   .setFooter('Combat command')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    
  
  if(clangue === "fr"){
    let user1 = message.author

      let user2 = message.mentions.users.first();
     
      if(user2.id === "381116968327053313") return message.channel.send("*Un conseil, n'affrontez pas mon créateur*")

      if(user2.id === "477088974045708288") return message.channel.send("*Un conseil, ne m'affrontez pas.*")
      
      if(!user2) return message.channel.send('Vous devez mentionner un utilisateur à combattre')
  if(user1 === user2) return message.channel.send('Vous ne pouvez pas vous affrontez vous même')
  let réponse = [`${user1} frappe violemment son adversaire au visage`, `${user1} lance les hostilités par un somptueux coup`, `${user1} mitraille de coup de poings son adversaire`, `${user1} rate misérablement son attaque`, `${user1} balaye son adversaire et lui fait la misère`, `${user1} ne fait rien et ampathie` ]
          let reponse = réponse[Math.floor(Math.random() * réponse.length)]
          
           let réponse2 = [`${user2} se défend et éxécute un magnifique coup de pied`, `${user2} atomise son adversaire à l'aide de sa botte secrète`, `${user2} échoue littérallement son attaque`, `${user2} ne rigole pas avec son adversaire et se défend rapidement puis contre-attaque`, `${user2} ne réagis pas` ]
          let reponse2 = réponse2[Math.floor(Math.random() * réponse2.length)]
          
            let réponse3 = [`${user1} se laisse pas faire et se défend à l'aide d'un coup de genou, puis d'un puissant coup de boule à la Zidane`, `${user1} ne comprends pas ce qu'il se passe et est perdu mais tente de répliquer`, `${user1} achève son adversaire à coup poings`, `${user1} tente de faire alliance mais échoue`, `${user1} frappe sans conviction son adversaire` ]
          let reponse3 = réponse3[Math.floor(Math.random() * réponse3.length)]
          
          
          let réponse4 = [`${user2} assome son adversaire`, `${user2} n'arrête pas et frappe violemment son adversaire`, `${user2} rate son attaque`, `${user2} réussit son attaque **spéciale** mais n'impressione pas son adversaire` ]
          let reponse4 = réponse4[Math.floor(Math.random() * réponse4.length)]
          
           let réponse5 = [`${user2} a gagné haut les mains`, `${user2} abandonne`, `${user2} gagne avec une force fantastique`, `${user2} est battu par ${user1}`, `${user1} a gagné ce combat sans qu'on s'y attende`, `${user1} mérite largement cette victoire`, `A l'issue de ce combat c'est ${user2} qui ressort vainqueur`, `A l'issue de ce combat c'est ${user1} qui ressort vainqueur`,  ]
          let reponse5 = réponse5[Math.floor(Math.random() * réponse5.length)]
          
          let a = reponse
          let b = reponse2
          let c = reponse3
          let d = reponse4
          let e = reponse5
          var embed1 = new Discord.RichEmbed()
.setAuthor('Combat')
.setColor('RANDOM')
.setDescription(`Combat entre ${user1} et ${user2}`)
.addField(':warning: Le combat vas commencer dans 5 secondes :warning:', "** **")
          .addField('Attaquant', user1)
          .addField('Défenseur', user2)
.setFooter('Préparez-vous')
          
           var embed2 = new Discord.RichEmbed()
.setAuthor('Combat')
.setColor('RANDOM')
.setDescription(`Combat entre ${user1} et ${user2}`)
.addField('Attaque 1', a)
        
.setFooter('Combat en cours')
var embed3 = new Discord.RichEmbed()
.setAuthor('Combat')
.setColor('RANDOM')
.setDescription(`Combat entre ${user1} et ${user2}`)
.addField('Attaque 1', a)
.addField('Défense 1', b)
        
.setFooter('Combat en cours')

var embed4 = new Discord.RichEmbed()
.setAuthor('Combat')
.setColor('RANDOM')
.setDescription(`Combat entre ${user1} et ${user2}`)
.addField('Attaque 1', a)
.addField('Défense 1', b)
.addField('Attaque 2', c)

        
.setFooter('Combat en cours')

var embed5 = new Discord.RichEmbed()
.setAuthor('Combat')
.setColor('RANDOM')
.setDescription(`Combat entre ${user1} et ${user2}`)
.addField('Attaque 1', a)
.addField('Défense 1', b)
.addField('Attaque 2', c)
.addField('Défense 2', d)

        
.setFooter('Combat en cours')

var embed6 = new Discord.RichEmbed()
.setAuthor('Combat')
.setColor('RANDOM')
.addField('Résultat', e)
        
.setFooter('Combat terminé')


 message.channel.send(embed1).then(async msg => {
    setTimeout(() => {
      msg.edit(embed2);
    }, 5000);
    setTimeout(() => {
      msg.edit(embed3);
    }, 8000);
    setTimeout(() => {
      msg.edit(embed4);
    }, 11000);
    setTimeout(() => {
      msg.edit(embed5);
    }, 14000);
    setTimeout(() => {
      msg.edit(embed6);
    }, 20000);
    
  });

}
if(clangue === "en"){

message.channel.send('This command is unavailable in English')}
}

exports.conf = {
    aliases: ['fight', "punch"]
    };
    
    exports.help = {
     name: 'combat', description: 'Défiez un adversaire', usage: `combat <user>`
     }