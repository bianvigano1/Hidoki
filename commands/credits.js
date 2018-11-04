const config = require('../util/config.json')
const arg = require('../util/args.json')
const fs = require('fs')
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
  .setAuthor('Aide du Credits')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `credits`)
  .addField('Utilité :', "Voir les credits")
  .setFooter('Commande Credits')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Credits help')
   .setDescription(arg.en.no)
   .addField('Command :', `${dnd} - Unavailable`)
   .addField('How to use it :', `credits}`)
   .addField('His utility :', "Show the credits")
   .setFooter('Command Credits')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    if(clangue === "fr") {
        message.channel.send(`Le créateur du bot est **Guysmow#5384**\n\nMerci aux testeur qui ont aidé à l'avancement du bot : \n**- REd CrAft  ")#4512\n- Fomys#8107\n- Desiar76#8944\n- Hablue#9073**\n\nMerci encore à **Axralt#8715** pour avoir partiicipé à la traduction.`)
    }
}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'credits', description: 'Regarde les crédits', usage: `credits`
     };