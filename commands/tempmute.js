
const ms = require("ms");
const Discord = require("discord.js");
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Tempmute')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `tempmute <user> [temps] [raison]`)
  .addField('Utilité :', "Mute temporairement quelqu'un")
  .setFooter('Commande Tempmute')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Tempmute help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `tempmute <user> [time] [reason]`)
   .addField('His utility :', "Mute someone")
   .setFooter('Command Tempmute')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    let logc = require('../database/log.json')
   
    let log = logc[message.guild.id].log
  

    
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas !");
  if(args[0] == null){
    message.reply("Usage: "+prefix+"tempmute <user> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Veuillez mentionner un utilisateur !");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas le mute !");
  let reason = args.slice(2).join(" ");
  if(!reason) reason = "Pas de raison donnée"

  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#0c0000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) mutetime = "1h"

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Salut ! t'as été muter pour ${mutetime}. Désolé !`)
  }catch(e){
    message.channel.send(`Un utilisateur a été mute, mais ses MP sont bloqués, il a été mute pour ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute fait par ${message.author}`)
  .setColor("RANDOM")
  .addField("Utilisateur muted :", tomute)
  .addField("Muted dans le salon", message.channel)
  .addField("Muted à", message.createdAt)
  .addField("Temps du mute", mutetime)
  .addField("Raison", reason);

  let incidentschannel = message.guild.channels.find(`id`, log);
  if(!incidentschannel) return message/channel.send('muteembed');
  incidentschannel.send(muteembed);
message.channel.send(`<@${tomute.id}> est mute pour ${mutetime}`)
  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a été unmuted !`);
  }, ms(mutetime));
}

exports.conf = {
    aliases: ['mute']
    };
    
    exports.help = {
     name: 'tempmute', description: 'Lute un utilisateur', usage: `mute <user> <temps>`
     }