let coins = require("../database/coins.json");

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
  .setAuthor('Aide du Coins')
  .setDescription(arg.fr.psobl)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `coins [utilisateur]`)
  .addField('Utilité :', "Voit le compte bancaire d'un utilisateur")
  .setFooter('Commande Coins')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Coins help')
   .setDescription(arg.en.psobl)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `coins [user]`)
   .addField('His utility :', "Show the amount coins of someone")
   .setFooter('Command Coins')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }  
  
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }   
   let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
   if(!coins[user.id]){
    coins[user.id] = {
      coins: 0
    };
  }   

  let uCoins = coins[user.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor("Monnaie de " + user.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed)};

  exports.conf = {
    aliases: ['money', 'bal', 'balance']
    };
    
    exports.help = {
     name: 'coins', description: 'Voir votre solde', usage: `coins`
     };
 