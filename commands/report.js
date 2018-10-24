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
  .setAuthor('Aide du Report')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}report <bug>`)
  .addField('Utilité :', "Permet de rapporter un bug")
  .setFooter('Commande Report')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Report help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}report <bug>`)
   .addField('His utility :', "Report a bug")
   .setFooter('Command Report')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
let oui = client.emojis.get('482478938493288448')
let non = client.emojis.get('482478890841800714')
let bug = args.join(" ").slice(0);
if(!bug) return message.channel.send('Veuillez décrire votre bug en étant le plus précis possible.')
let user = message.author.username;
let userid = message.author.id
let guild = message.guild.name;
let guildid = message.guild.id;
let channel = client.channels.get("475286577845633026")
let embed = new Discord.RichEmbed()
.setTitle(":bell: **Alerte : Nouvelle requête** :bell:")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug rencontré : " + bug, "Rapporté par : **" + user + "** avec l'ID **"+userid+"** depuis le serveur : **"+ guild + "** avec l'ID de guild ** "+guildid+"**",)
.setColor("#f49542")

message.channel.send("<:yep:482478938493288448>**| Votre bug a été envoyé au serveur officiel, veuillez attendre, il sera examiné sous peu.**")
channel.send(embed).then(i => i.react(oui).then(i.react(non)))

  


}
exports.conf = {
    aliases: ['bugreport','bug']
    };
    
    exports.help = {
     name: 'report', description: 'Rapporter votre bug', usage: `report <bug>`
     };