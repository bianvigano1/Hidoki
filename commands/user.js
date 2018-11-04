var request = require('request')
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
  .setAuthor('Aide du User')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `user`)
  .addField('Utilité :', "Voir de fausses informations")
  .setFooter('Commande User')
  let enembed = new Discord.RichEmbed()
   .setAuthor('User help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `user`)
   .addField('His utility :', "Show fake informations")
   .setFooter('Command User')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 

  


  request(`https://randomuser.me/api/`, function (error, response, body) {
      if(!error){

    let embed = new Discord.RichEmbed()
    .setAuthor('RANDOM USER')
    .setDescription('Utilisateur aléatoire')
    .addField('Genre: ',  JSON.parse(body).results[0].gender, true)
    .addField('Prénom: ',  JSON.parse(body).results[0].name.first, true)
    .addField('Nom de famille: ',  JSON.parse(body).results[0].name.last, true)
    .addField('Date de Naissance: ',  JSON.parse(body).results[0].dob.date, true)
    .addField('Age : ',  JSON.parse(body).results[0].dob.age, true)
    .addField('Région : ',  JSON.parse(body).results[0].location.timezone.description, true)
    .addField('Zone Horaire : ',  JSON.parse(body).results[0].location.timezone.offset, true)
    .addField('Ville : ',  JSON.parse(body).results[0].location.city, true)
    .addField('Adresse : ',  JSON.parse(body).results[0].location.street, true)
    .addField('Code Postal : ',  JSON.parse(body).results[0].location.postcode, true)
    .addField('Email : ',  JSON.parse(body).results[0].email, true)
    .addField('Pseudo : ',  JSON.parse(body).results[0].login.username, true)
    .addField('Mot de Passe : ',  JSON.parse(body).results[0].login.password, true)
    .setThumbnail(JSON.parse(body).results[0].picture.large)
   
    message.channel.send(embed)
   } });
}

exports.conf = {
    aliases: ['ru']
    };
    
    exports.help = {
     name: 'user', description: 'Informations sur un pays.', usage: `pays`
     };