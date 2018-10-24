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
  .setAuthor('Aide du Deletewarns')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}deletewarn <utilisateur> <numero du warn/tout>`)
  .addField('Utilité :', "Supprime des warns")
  .setFooter('Commande Deletewarns')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Deletewarns help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}deletewarns <user> <Warn number/all>`)
   .addField('His utility :', "Delete warns of an user")
   .setFooter('Command Cookie')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  let logc = require('../database/log.json')

  let log = logc[message.guild.id].log
 
    let warns = JSON.parse(fs.readFileSync("./database/warns.json", "utf8"));
      const errors = require('../util/errors.json')
  
 
if(clangue === "fr"){
     
    if (message.channel.type === "dm") return;
 
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(errors.fr.permissions.membre).catch(console.error);
     
       const mentioned = message.mentions.users.first();
     
        const args = message.content.split(' ').slice(1);
     
        const arg2 = Number(args[1]);
     
        if (message.member.hasPermission('MANAGE_GUILD')){
     
          if (message.mentions.users.size != 0) {
     
            if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
     
              if (!isNaN(arg2)) {
     
                if (warns[message.guild.id][mentioned.id] === undefined) {
     
                  message.channel.send(mentioned.tag+" n'a aucun warn");
     
                  return;
     
                } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
     
                  message.channel.send("**:x: Ce warn n'existe pas**");
     
                  return;
     
                }
     
                delete warns[message.guild.id][mentioned.id][arg2];
     
                var i = 1;
     
                Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
     
                  var val=warns[message.guild.id][mentioned.id][key];
     
                  delete warns[message.guild.id][mentioned.id][key];
     
                  key = i;
     
                  warns[message.guild.id][mentioned.id][key]=val;
     
                  i++;
     
                });
     
                fs.writeFile("./database/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
     
                  delete warns[message.guild.id][mentioned.id];
     
                }

                let warnembed = new Discord.RichEmbed() // Master is MessageEmbed
                .setTitle("Warn supprimé")
                .setFooter("Warn supprimé")
                .setColor("#ff0000")
                .setTimestamp()
                .addField("Numéro du warns supprimé :", `${args[1]}`)
                .addField("Utilisateur concerné", `${args[0]}`)
                .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
                .addField("Heure :", message.createdAt)
                .addField("Channel :", message.channel)
                let logs = message.guild.channels.find("id", log);
                if(!logs) return message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`)
                message.mentions.users.first().send(`Votre warn n°${args[1]} a bien été supprimé sur le serveur ${message.guild.name}`)

                logs.send(warnembed);
                message.delete();
                
     
                return;
     
              } if (args[1] === "tout") {
     
                delete warns[message.guild.id][mentioned.id];
     
                fs.writeFile("./database/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                let warnembed = new Discord.RichEmbed() // Master is MessageEmbed
                .setTitle("Warn supprimé")
                .setFooter("Warn supprimé")
                .setColor("#ff0000")
                .setTimestamp()
                .addField("Warns supprimé :", `${args[1]}`)
                .addField("Utilisateur concerné", `${args[0]}`)
                .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
                .addField("Heure :", message.createdAt)
                .addField("Channel :", message.channel)
                let logs = message.guild.channels.find("id", log);
                if(!logs) return message.channel.send(`Tout les warns de <@${mentioned.id}> ont été supprimés`)
                message.mentions.users.first().send(`Tout vos warns ont été supprimés sur le serveur ${message.guild.name}`)

                logs.send(warnembed);
                
     
                return;
     
              } else {
     
                message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
     
              }
     
            } else {
     
              message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
     
            }
     
          } else {
     
           message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
     
          }
     
        } else {
     
          message.channel.send(errors.fr.permissions.member);
     
        }
    
 
    }

if(clangue === "en"){   
  if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(errors.en.permissions.membre).catch(console.error);

   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" has no warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: This warn does not exist");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./database/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`The warn of **${mentioned.tag}**\': **${args[1]}** has been succesfully removed`);
 
            return;
 
          } if (args[1] === "all") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./database/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`All the warns of**${mentioned.tag}** are removed`);
 
            return;
 
          } else {
 
            message.channel.send("Error wrong usage : "+prefix+"deletewarn <user> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Error wrong usage : "+prefix+"deletewarn <user> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Error wrong usage : "+prefix+"deletewarn <user> <nombre>");
 
      }
 
    } else {
 
      message.channel.send(errors.en.permissions.membre);
 
    }


}






  }


  exports.conf = {
    aliases: ['delwarn', 'delwarns', 'deletewarns']
    };
    
    exports.help = {
     name: 'deletewarn', description: 'Supprime le warn d\'un utilisateur', usage: `deletewarn <mention> <numéro du warn>`
     };