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
  .setAuthor('Aide du Removerole')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `removerole <membre> <role>`)
  .addField('Utilité :', "Retire un rôle à un utilisateur")
  .setFooter('Commande Removerole')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Removerole help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `removerole <user> <role>`)
   .addField('His utility :', "Remove a role to an user")
   .setFooter('Command Removerole')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
  let logc = require('../database/log.json')
 
  let log = logc[message.guild.id].log

if(clangue === "fr"){
 
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("T'as pas la permission requise : `MANAGE_ROLES`");
  if (args[0] == null) {
    message.reply("Usage : "+prefix+"removerole <user> <Nom du rôle>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.channel.send(message.channel);
  let role = args.slice(1).join(" ");
  if (!role) return message.reply("Merci de spécifier un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Je ne trouve pas ce rôle !");

  if (!rMember.roles.has(gRole.id)) return message.reply("Il ne possède pas ce rôle.");
  await (rMember.removeRole(gRole.id));

  try {
    await rMember.send(`Vous avez perdu le rôle : ${gRole.name}`)
    message.channel.send(`<@${rMember.id}>, a perdu le rôle ${gRole.name}. `)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}>, a perdu le rôle ${gRole.name}. `)
  }
  let clearEmbed = new Discord.RichEmbed() // Master is MessageEmbed
    .setTitle("Rôle retiré : ")
    .setFooter("Rôle retiré")
    .setColor("#ff0000")
    .setTimestamp()
    .addField("Membre concerné :", `<@${rMember.id}>`)
    .addField("Rôle retiré :", `${gRole.name}`)
    .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
    .addField("Heure :", message.createdAt)
    .addField("Channel :", message.channel)
  let logs = message.guild.channels.find("id", log);
  if(!logs) return
  
  logs.send(clearEmbed);
}
  
  if(clangue === "en"){
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have : `MANAGE_ROLES`");
  if (args[0] == null) {
    message.reply("Usage : "+prefix+"addrole <user> <role nale>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.channel.send(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Please specify a role.");
  let gRole = message.guild.roles.find(`id`, role);
  if (!gRole) return message.reply("I can't find this role.");

  if (!rMember.roles.has(gRole.id)) return message.reply("He has not this role.");
  await (rMember.removeRole(gRole.id));

  try {
    await rMember.send(`You lost this role : ${gRole.name}`)
    message.channel.send(`<@${rMember.id}> lost the role : ${gRole.name}. `)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}> lost the role : ${gRole.name}. `)
  }
  
  let clearEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("Role removed : ")
  .setFooter("Role removed")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Member :", `<@${rMember.id}>`)
  .addField("Role removed :", `${gRole.name}`)
  .addField("By :", `${message.author}, ID: ${message.author.id}`)
  .addField("At :", message.createdAt)
  .addField("In Channel :", message.channel)
let logs = message.guild.channels.find("id", log);
if(!logs) return

logs.send(clearEmbed);
}
}

exports.conf = {
  aliases: ['roleremove', 'delrole']
  };
  
  exports.help = {
   name: 'removerole', description: 'Retire un rôle', usage: `removerole <user> <role>`
   }