
let coins = require("../database/coins.json");
const talkedRecently = new Set();

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
  .setAuthor('Aide du Work')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `trump`)
  .addField('Utilité :', "Gagne de l'argent")
  .setFooter('Commande Work')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Work help')
   .setDescription(arg.en.no)
   .addField('Command :', `${dnd} - Unvailable`)
   .addField('How to use it :', `work`)
   .addField('His utility :', "Work")
   .setFooter('Command Work')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }   if (talkedRecently.has(message.author.id)) {
            message.channel.send("Attendez 1 heures avant de repartir travailler - " + message.author);
    } else {
        let number = Math.floor(Math.random() * 100) + 50;

        const phrase = [
            { q: "Vous avez décider de passer un job d'été, vous vous penchez vers conducteur de tram de la RATP, vous gagnez "+number+" coins", a: [number]},
          { q: "Vous faites des vacations et gagnez "+number+" coins ", a: [number]},
          {q: "Vous aidez une personne âgée à monter ses courses et vous gagnez 5 money de pourboire.", a: [5]},
          {q: "Vous faites du pet-sitting et gagnez "+number+" coins", a: [number]},
          {q: "Vous faites des heures supplémentaires pour gagner "+number+" coins", a: [number]},
        ]   
        const item = phrase[Math.floor(Math.random() * phrase.length)];
            await message.channel.send(item.q)
            coins[message.author.id] = {
                coins: coins[message.author.id].coins + number
                };
                fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));

            talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 3.6e+6);
    
  
  
  
    }  }
    exports.conf = {
        aliases: []
        };
        
        exports.help = {
         name: 'work', description: 'Travaillez', usage: `work`
         };