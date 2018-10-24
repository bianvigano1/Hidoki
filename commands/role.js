const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Role')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}role <add/remove> <nom du role>`)
  .addField('Utilité :', "Utilisable sur le serveur de support")
  .setFooter('Commande Role')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Role help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}role <add/remove> <role name>`)
   .addField('His utility :', "Only on the support server")
   .setFooter('Command Role')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(message.guild.id !== "469060312830574594") return message.channel.send('Cete comande ne peut-être faites que sur le serveur de support')
let choix = args[0]
let role = args[1]
const notif = message.guild.roles.find ("id", "482948611810787328")  
const NSFW = message.guild.roles.find ("id", "480167112380383242")
if(!args) return message.channel.send('Exemple : '+prefix+'`role [add/remove] [notif/NSFW]`')
if(choix === "add"){
    if(!role) return message.channel.send('Vous devez indiquer un rôle.')
    if(role === 'notif'){
        if (!message.member.roles.has("482948611810787328")) {
            message.member.addRole (notif)
            message.reply (":white_check_mark: Rôle ajouté : Notif !")
        }
        else {
            message.reply ("tu as déjà ce rôle.")
    
          
        }
        }else if(role === "nsfw"){
            if (!message.member.roles.has("480167112380383242")) {
                message.member.addRole (notif)
                message.reply (":white_check_mark: Rôle ajouté : Notif !")
            }
            else {
                message.reply ("tu as déjà ce rôle.")
        
              
            }
                


        }else{
            message.channel.send('Ce rôle n\'existe pas')
        }
}else if(choix === "remove"){
    if(!role) return message.channel.send('Vous devez indiquer un rôle.')

    if(role === 'notif'){
        if (message.member.roles.has("482948611810787328")) {

message.member.removeRole(notif)
    message.reply (":white_check_mark: Rôle retiré : Notif !")}
    else {
        message.reply('tu n\'as pas ce rôle')
    }

}else if(role === "nsfw"){
    if (message.member.roles.has("480167112380383242")) {

    message.member.removeRole (NSFW)
    message.reply (":white_check_mark: Rôle retiré : NSFW")
        
    }
    else{
        message.reply('tu n\'as pas ce rôle')
    }

}else{
    message.channel.send('Ce rôle n\'existe pas')
}
}else if(choix === "list"){
    message.channel.send('Voici les rôles auto-attribuables : \n-**Notif**\n-**NSFW**')
}

}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'role', description: "S'ajouter ou se retirer des rôles", usage: `role [add/remove/list] [Notif/NSFW]`
     };