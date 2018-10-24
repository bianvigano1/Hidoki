var request = require('request')
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
  .setAuthor('Aide du Pays')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}pays <pays>`)
  .addField('Utilité :', "Voir les informations d'un pays")
  .setFooter('Commande Pays')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Pays help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}pays <country>`)
   .addField('His utility :', "Sax the informations on a Country")
   .setFooter('Command Pays')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(!args) return message.channel.send('Vous devez insérez un pays.')
  let name = args.join(" ")
  request(`https://restcountries.eu/rest/v2/name/${name}`, function (error, response, body) {
      if(!error){

    if(JSON.parse(body).status === 404) return message.channel.send('Ce pays n\'existe pas ou n\'est pas en anglais')
    let embed = new Discord.RichEmbed()
    .setAuthor('Informations d\'un pays')
    .setDescription('Info du pays : ' + name)
    .addField('Capitale du pays : ',  JSON.parse(body)[0].capital ? JSON.parse(body)[0].capital : "Non défini" )
    .addField('Continent : ',  JSON.parse(body)[0].region ? JSON.parse(body)[0].region : "Non défini" )
    .addField('Région : ',  JSON.parse(body)[0].subregion ? JSON.parse(body)[0].subregion : "Non défini" )
    .addField('Population du pays : ',  JSON.parse(body)[0].population ? JSON.parse(body)[0].population : "Non défini" )
    .addField('Drapeau du pays : ',  JSON.parse(body)[0].flag ? JSON.parse(body)[0].flag : "Non défini" )
    .addField('Numéro de téléphone',  "+" + JSON.parse(body)[0].callingCodes ? JSON.parse(body)[0].callingCodes : "Non défini" )
    .addField('Nom de domaine : ', JSON.parse(body)[0].topLevelDomain ? JSON.parse(body)[0].topLevelDomain : "Non défini" )
    message.channel.send(embed)
   } });
}

exports.conf = {
    aliases: ['country']
    };
    
    exports.help = {
     name: 'pays', description: 'Informations sur un pays.', usage: `pays`
     };