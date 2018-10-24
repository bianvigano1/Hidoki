const ms = require("ms");

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
  .setAuthor('Aide du Giveaway')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}giveaway [temps] [chose à gagner]`)
  .addField('Utilité :', "Voir si tu es Donateur")
  .setFooter('Commande Giveaway')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Giveaway help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}giveaway [time] [Prize]`)
   .addField('His utility :', "Are you a donator")
   .setFooter('Command Giveaway')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions !");


      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send("**Merci de mettre un temps. Usage: `g!giveaway 15min | Code**`");

      let reminder = args.slice(1).join(" ");

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .setDescription(':tada: Giveaway !')
      .addField("Gain mis en jeu :", reminder)
      .addField("Vous avez : " + reminderTime + " pour participer", "** **" )
      .addField('Cliquez sur la réaction 🎉 pour rentrer dans le GiveAway', "** **")
      .setTimestamp();

      message.channel.send(remindEmbed).then(msg => {
      msg.react("🎉").then( r => { 

        setTimeout(function(){
            msg.reactions.forEach(r=>r.remove(client.user));

          }, ms(reminderTime) - 1000);
            


      setTimeout(function(){
        msg.reactions.forEach(r=>r.remove(client.user));
        var winners = [];
       // const users = msg.reactions.get("🎉").users;
         const users = [...(msg.reactions.get("🎉").users)];
             //let winner = users[Math.floor(Math.random() * users.length)];
               //let winner = new Discord.GuildMember(users[Math.floor(Math.random() * users.length)]);
                 let [id,winner] = users[Math.floor(Math.random() * users.length)];
winner = message.guild.member(winner);
        let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Gain :", reminder)
         .addField(`Le vainqueur est : ${winner.user.username}`, "** **")

        .setTimestamp()

        message.channel.send(remindEmbed);
      }, ms(reminderTime));

}
    )})}

    exports.conf = {
        aliases: ['ga']
        };
        
        exports.help = {
         name: 'giveaway', description: 'Faites gagner quelque chose', usage: `giveaway <temps> <gain>`
         };