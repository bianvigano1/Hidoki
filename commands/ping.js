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
  .setAuthor('Aide du Ping')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}ping`)
  .addField('Utilité :', "Voir la vitesse de connexion")
  .setFooter('Commande Ping')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Ping help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}ping`)
   .addField('His utility :', "See the latency")
   .setFooter('Command Ping')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }

    var start = Date.now(); message.channel.send( 'Pong ! ').then(message => { 
        var API = (client.ping).toFixed(2)
            
            var embed = new Discord.RichEmbed()
            .setTitle(`🏓 Pong!`)
            .setColor(0xff2f2f)
            .addField("📶 Latence du bot :", `${Date.now() - start}ms`, true)
            .addField("💻 Latence de l'API : ", `${API}ms`, true)
          message.edit(embed)
          console.log("Le bot a trouvé son ping")
        });
    }

    exports.conf = {
        aliases: ['quelleestlavitessedeconnexiondubot', 'connexion']
        };
        
        exports.help = {
         name: 'ping', description: 'Voir le ping du bot', usage: `ping`
         };