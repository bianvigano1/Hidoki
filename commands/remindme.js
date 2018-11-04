const ms = require("ms");
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
  .setAuthor('Aide du Remindme')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `remindme <temps> <chose à rappeler>`)
  .addField('Utilité :', "Vous rappelle une chose")
  .setFooter('Commande Remindme')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Remindme help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `remindme <time> <reminder>`)
   .addField('His utility :', "To remind you to do something")
   .setFooter('Command Remindme')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(clangue === "fr"){
      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send("**Merci de mettre un temps. Usage :"+ prefix + "remind 15min Code**");

      let reminder = args.slice(1).join(" ");

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .addField("Remind pour :", `\`\`\`${reminder}\`\`\``)
      .addField("Temps", `\`\`\`${reminderTime}\`\`\``)
      .setTimestamp();

      message.channel.send(remindEmbed);


      setTimeout(function(){
        let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

        message.author.send(remindEmbed);
      }, ms(reminderTime));


    }
  if(clangue === "en"){
      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send("**Please specify a time. Usage :"+ prefix + "remind 15min Code**");

      let reminder = args.slice(1).join(" ");

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .addField("Remind to :", `\`\`\`${reminder}\`\`\``)
      .addField("Time", `\`\`\`${reminderTime}\`\`\``)
      .setTimestamp();

      message.channel.send(remindEmbed);


      setTimeout(function(){
        let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

        message.author.send(remindEmbed);
      }, ms(reminderTime));


    }

}

exports.conf = {
    aliases: ['reminder', 'remind']
    };
    
    exports.help = {
     name: 'remindme', description: 'Vous rappelez de faire une action', usage: `remindme <temps> <chose à rappeler>`
     };
 