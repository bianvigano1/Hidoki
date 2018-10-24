const weather = require('weather-js');
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
  .setAuthor('Aide du Weather')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}weather <lieu>`)
  .addField('Utilité :', "Permet de voir la météo")
  .setFooter('Commande Weather')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Weather help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}weather <city>`)
   .addField('His utility :', "Show the weather")
   .setFooter('Command Weather')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  
  if(clangue === "fr"){
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('Tu dois insérer le nom d\'une ville')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`⛅ - Temps à ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField(':clock1230: - Zone Horaire :',`UTC${location.timezone}`, true)
          .addField(':o: - Type de dégré :',location.degreetype, true)
          .addField(':thermometer: - Température :',`${current.temperature} Degrées`, true)
          .addField(':thermometer: - Ressenti : ', `${current.feelslike} Degrées`, true)
          .addField(':dash: - Vent : ',current.winddisplay, true)
          .addField(':droplet: - Humidité : ', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

 
  if(clangue === "en"){
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) console.log(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('You have ton put a city')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`⛅ - Weather to ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField(':clock1230: - UTC Zone :',`UTC${location.timezone}`, true)
          .addField(':o: - Degrees type :',location.degreetype, true)
          .addField(':thermometer: - Temperature :',`${current.temperature} Degrees`, true)
          .addField(':thermometer: Feel like : ', `${current.feelslike} Degrees`, true)
          .addField(':dash: - Wind display : ',current.winddisplay, true)
          .addField(':droplet: - Humidity : ', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}


}


exports.conf = {
    aliases: ['meteo', 'météo', "temps"]
    };
    
    exports.help = {
     name: 'weather', description: 'Voir la météo d\'un lieu', usage: `weather <ville>`
     };