//<------------------MODULE--------------------->

const Discord = require("discord.js");

const fs = require('fs')
//<------------------PACKAGE--------------------->

const errors = require('../util/errors.json')

let langue = require('../database/langue.json')



let logc = require('../database/log.json')

const arg = require('../util/args.json')

//<--------------------DEBUT DU CODE--------------->

module.exports.run = async (client, message, args1) => {
  let clangue = langue[message.author.id].langue

  let log = logc[message.guild.id].log

    let args = message.content.split(" ").slice(1);
    if(args[0] === "help"){
    let prefix = prefixes[message.guild.id].prefixes;
      const online = client.emojis.get("482485733886656512");
    const idle = client.emojis.get("482485733316362241");
    const dnd = client.emojis.get("482485733488197642");
    
    let frembed = new Discord.RichEmbed()
    .setAuthor('Aide du AddRole')
    .setDescription(arg.fr.requis)
    .addField('Commande :', `${online} - Disponible`)
    .addField('Utilisation :', `addrole [Membre] [Nom de rôle]`)
    .addField('Utilité :', "Ajoute un rôle à un utilisateur")
    .setFooter('Commande AddRole')
    let enembed = new Discord.RichEmbed()
      .setAuthor(arg.en.requis)
      .setDescription('Args required')
      .addField('Command :', `${online} - Available`)
      .addField('How to use it :', `addrole [User] [Role name]`)
      .addField('His utility :', "Add a role to an user")
      .setFooter('Command AddRole')
      if(clangue === "fr") return message.channel.send(frembed)
      if(clangue === "en") return message.channel.send(enembed)
    }
if(clangue === "fr"){
 if(message.mentions.users.size === 0) return message.channel.send(errors.fr.mention.une)
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(errors.fr.permissions.membre);
  if (args[0] == null) {
    message.reply("Usage : "+prefix+"addrole <user> <nom du role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.channel.send(message.channel);
  let role = args.slice(1).join(" ");
  if (!role) return message.reply("Merci de spécifier un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply(errors.fr.raisons.rolew);

  if (rMember.roles.has(gRole.id)) return message.reply(errors.fr.raisons.role);
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Vous avez obtenu le rôle : ${gRole.name}`)
    message.channel.send(`<@${rMember.id}>, a reçu le rôle ${gRole.name}. `)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}>, a reçu le rôle ${gRole.name}. `)
  }
  let clearEmbed = new Discord.RichEmbed() // Master is MessageEmbed
    .setTitle("Rôle ajouté : ")
    .setFooter("Rôle ajouté")
    .setColor("#ff0000")
    .setTimestamp()
    .addField("Membre concerné :", `<@${rMember.id}>`)
    .addField("Rôle ajouté :", `${gRole.name}`)
    .addField("Modérateur :", `${message.author}, ID: ${message.author.id}`)
    .addField("Heure :", message.createdAt)
    .addField("Channel :", message.channel)
  let logs = message.guild.channels.find("id", log);
  if(!logs) return
  
  logs.send(clearEmbed);
}
  
  if(clangue === "en"){
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(errors.en.permissions.membre);
  if (args[0] == null) {
    message.reply("Usage : "+prefix+"addrole <user> <role name>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.channel.send(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Please specify a role.");
  let gRole = message.guild.roles.find(`id`, role);
  if (!gRole) return message.reply(errors.en.raison.rolew);

  if (rMember.roles.has(gRole.id)) return message.reply(errors.en.raisons.role);
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`You obtain this role : ${gRole.name}`)
    message.channel.send(`<@${rMember.id}> receive the role : ${gRole.name}. `)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}> receive the role : ${gRole.name}. `)
  }
  
  let clearEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("Role added : ")
  .setFooter("Role added")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Member :", `<@${rMember.id}>`)
  .addField("Role added :", `${gRole.name}`)
  .addField("By :", `${message.author}, ID: ${message.author.id}`)
  .addField("At :", message.createdAt)
  .addField("In Channel :", message.channel)
let logs = message.guild.channels.find("id", log);
if(!logs) return

logs.send(clearEmbed);
}
}

exports.conf = {
  aliases: ['roleadd']
  };
  
  exports.help = {
   name: 'addrole', description: 'Ajoute un rôle', usage: `addrole <user> <role>`
   }