const Discord = require("discord.js");
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Warn')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}warn <user> <raison>`)
  .addField('Utilité :', "Avertir quelqu'un")
  .setFooter('Commande Warn')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Warn help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}warn <user> <reason>`)
   .addField('His utility :', "Show a gif about Trump")
   .setFooter('Command Trump')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    const errors = require('../util/errors.json')

    let warns = JSON.parse(fs.readFileSync("./database/warns.json", "utf8"));
      
    if (message.channel.type === "dm") return;
     
    var mentionned = message.mentions.users.first();
     
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(errors.fr.permissions.membre).catch(console.error);
     
    if(message.mentions.users.size === 0) {
     
      return message.channel.send(errors.fr.mention.une);
     
    }else{
     
        const args = message.content.split(' ').slice(1);
        if(args.slice(1).includes("@everyone")) return message.channel.send("Notifier everyone tu feras, ban tu seras")
    if(args.slice(1).includes("@here")) return message.channel.send("Notifier here tu feras, ban tu seras")
    if(args.slice(1).includes("`")) return message.channel.send("Tu veux casser qui ?")
        const mentioned = message.mentions.users.first();
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size != 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
     
              if (args.slice(1).length != 0) {
     
                const date = new Date().toUTCString();
     
                if (warns[message.guild.id] === undefined)
     
                  warns[message.guild.id] = {};
     
                if (warns[message.guild.id][mentioned.id] === undefined)
     
                  warns[message.guild.id][mentioned.id] = {};
     
                const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
     
                if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
     
                  warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
     
                } else {
     
                  warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
     
                    time: date,
     
                    user: message.author.id};
     
                }
     
                fs.writeFile("./database/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
    message.delete();
     
                message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
     
    message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
     
              } else {
     
                message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
     
              }
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
     
            }
     
          } else {
     
            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
     
          }
     
        } else {
     
          message.channel.send(errors.fr.permissions.membre);
     
        }
     
      }
     
    


}

  exports.conf = {
    aliases: ['warns']
    };
    
    exports.help = {
     name: 'warn', description: 'Avertir quelqu\'un', usage: `warn <raison>`
     };