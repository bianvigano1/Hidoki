let coins = require("../database/coins.json");
const talkedRecently = new Set
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
  .setAuthor('Aide du Daily')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `daily`)
  .addField('Utilité :', "Recupérer son argent journalier")
  .setFooter('Commande Daily')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Daily help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `daily `)
   .addField('His utility :', "Earn your daily coins")
   .setFooter('Command Daily')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  if (talkedRecently.has(message.author.id)) {
           if(clangue === "fr"){ message.channel.send("Attendez 24 heures - " + message.author)}
    if(clangue === "en"){ message.channel.send("Wait 24 hours - " + message.author)}
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 8.64e+7);
        let money = Math.floor(Math.random() * 1500) + 1000;
if(message.author.id === "409091614414209054"||message.author.id === "381116968327053313"){
    let reelmoney = Math.floor(money * 1.5)
    message.channel.send('Vous récupérez vos '+money+' money quotidien , +50% avantage premium soit '+reelmoney)
      
    let coinAmt = reelmoney;
  let baseAmt = reelmoney;
  if(coinAmt === baseAmt){
  coins[message.author.id] = {
  coins: coins[message.author.id].coins + coinAmt
  };
  const fs = require("fs");
fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));}
    return;
}
    if(clangue === "fr"){
     message.channel.send('Vous récupérez vos '+money+' money quotidien')
      
      let coinAmt = money;
	let baseAmt = money;
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));}
      
  }
    
    if(clangue === "en"){
     message.channel.send('You earn your '+money+' daily coins')
      
      let coinAmt = money;
	let baseAmt = money;
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));}
      
  }
    
    
    
    }}
    
    exports.conf = {
        aliases: []
        };
        
        exports.help = {
         name: 'daily', description: 'Gagne ton argent quotidien', usage: `daily`
         };