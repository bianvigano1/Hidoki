//<------------------MODULE--------------------->
const Discord = require('discord.js')
const fs = require('fs')
//<------------------PACKAGE--------------------->
let langue = require("../database/langue.json");

let automod = require("../database/automod.json");

let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let arg = require('../util/args.json')
//<------------------DEBUT DU CODE--------------------->
module.exports.run = (client, message, args1) => {


   
    if(!automod[message.guild.id]){
        automod[message.guild.id] = {
            automod: "off"
                };
            
    }
    let prefix = prefixes[message.guild.id].prefixes;

let cmod = automod[message.guild.id].automod
 let clangue = langue[message.author.id].langue
 let args = message.content.split(" ").slice(1);
 if(args[0] === "help"){
         const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Automod')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}automod <on/off>`)
  .addField('Utilité :', "Vous protège vous et votre serveur")
  .setFooter('Commande Automod')
  let enembed = new Discord.RichEmbed()
    .setAuthor('Automod help')
    .setDescription(arg.en.requis)
    .addField('Command :', `${online} - Available`)
    .addField('How to use it :', `${prefix}automod <on/off>`)
    .addField('His utility :', "Protect your guild")
    .setFooter('Command Automod')
    if(clangue === "fr") return message.channel.send(frembed)
    if(clangue === "en") return message.channel.send(enembed)
  }
let choix = args[0]

if(args[0] === "current" || args[0] === "now" || args[0] === undefined){
if(clangue === "fr"){
message.channel.send("L'automod est : " + cmod)
 }
  
  if(clangue === "en"){
    message.channel.send("Automod is : " + cmod)}

  }

   else if(choix === "on"){
    if(cmod === "on"){
        if(clangue === 'fr') return message.channel.send('L\'automod est déjà activé')
        if(clangue === 'en') return message.channel.send('Automod is already enabled')
    }
            
    if(clangue === 'fr') { message.channel.send('Automod activé :white_check_mark:')}
    if(clangue === 'en') { message.channel.send('Automod is now enabled :white_check_mark:')}

                
                       automod[message.guild.id] = {
                        automod: "on"
                        };
                      fs.writeFile("./database/automod.json", JSON.stringify(automod), (err) => {
                                if(err) console.log(err)
                    
     }) }
    else if(choix === "off"){
       
            
        if(cmod === "off"){
            if(clangue === 'fr') return message.channel.send('L\'automod est déjà désaactivé')
            if(clangue === 'en') return message.channel.send('Automod is already disabled')
        }
                
        if(clangue === 'fr') { message.channel.send('Automod desactivé :white_check_mark:')}
        if(clangue === 'en') { message.channel.send('Automod is now disabled :white_check_mark:')}
            
                
                automod[message.guild.id] = {
                    automod: "off"
                        };
                      fs.writeFile("./database/automod.json", JSON.stringify(automod), (err) => {
                                if(err) console.log(err)
                    
    } )}else{

        if(clangue === "fr"){
            message.channel.send("Ce n'est pas un argument valable")
             }
              
              if(clangue === "en"){
                message.channel.send('Put on/off')}
            }}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'automod', description: 'Mettre l\'auto-mod', usage: `automod`
     };