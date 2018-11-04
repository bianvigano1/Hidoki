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
  .setAuthor('Aide du Setlanguage')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `setlanguage <en/fr>`)
  .addField('Utilité :', "Changer la langue du bot")
  .setFooter('Commande Setlanguage')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Stelanguage help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `setlanguage <en/fr>`)
   .addField('His utility :', "Change the bot language")
   .setFooter('Command Setlanguage')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
let chooselangue = args[0]

if(args[0] === "current" || args[0] === "now" || args[0] === undefined){
if(clangue === "fr"){
message.channel.send("La langue actuelle est : **" + clangue + "**\n**" + prefix + "setlanguage en** pour me mettre en anglais")
 }
  
  if(clangue === "en"){
    message.channel.send('The current language is : **' + clangue + "**\n**" + prefix + "setlanguage fr** to put me in French")}

  }

   else if(chooselangue === "fr"){
        if(clangue === "fr"){
            message.channel.send("Tu veux me mettre en français alors que je suis déjà en Français..")
             }else{
            
                message.channel.send("Je suis en français maintenant :smiley:")
    
                
                       langue[message.author.id] = {
                        langue: "fr"
                        };
                      fs.writeFile("./database/langue.json", JSON.stringify(langue), (err) => {
                                if(err) console.log(err)
                    
    }) } }
    else if(chooselangue === "en"){
        if(clangue === "en"){
            message.channel.send("I'm already in English.")
             }else{
            
                message.channel.send("I'm in english now :smiley:")
    
                
                       langue[message.author.id] = {
                        langue: "en"
                        };
                      fs.writeFile("./database/langue.json", JSON.stringify(langue), (err) => {
                                if(err) console.log(err)
                    
    }) } }else{

        if(clangue === "fr"){
            message.channel.send("Ce langage n'existe pas ou n'est pas supporté")
             }
              
              if(clangue === "en"){
                message.channel.send('This language does not exist or is not supported')}
            }}
exports.conf = {
    aliases: ['language', 'langage', 'setlangage']
    };
    
    exports.help = {
     name: 'setlanguage', description: 'Modifier la langue du bot', usage: `setlanguage`
     };