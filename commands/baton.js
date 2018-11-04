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
  .setAuthor('Aide du Baton')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `baton`)
  .addField('Utilité :', "Joue contre l'intelligence artificielle")
  .setFooter('Commande Baton')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Baton help')
   .setDescription(arg.en.no)
   .addField('Command :', `${dnd} - Unavailable`)
   .addField('How to use it :', `baton`)
   .addField('His utility :', "Play versus the IA")
   .setFooter('Command Baton')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
  if(clangue === "en") return ;

let reply00 = ["un", "deux", "trois"]
 let reply0 = reply00[Math.floor(Math.random() * reply00.length)]
let reply01 = ["un", "deux", "trois"]
 let reply1 = reply01[Math.floor(Math.random() * reply01.length)]
let reply02 = ["un", "deux", "trois"]
 let reply2 = reply02[Math.floor(Math.random() * reply02.length)]
let reply03 = ["un", "deux", "trois"]
 let reply3 = reply03[Math.floor(Math.random() * reply03.length)]
let reply04 = ["un", "deux", "trois"]
 let reply4 = reply04[Math.floor(Math.random() * reply04.length)]
let reply05 = ["un", "deux", "trois"]
 let reply5 = reply05[Math.floor(Math.random() * reply05.length)]
let reply06 = ["un", "deux", "trois"]
 let reply6 = reply06[Math.floor(Math.random() * reply06.length)]
let reply07 = ["un", "deux", "trois"]
 let reply7 = reply07[Math.floor(Math.random() * reply07.length)]
let reply08 = ["un", "deux", "trois"]
 let reply8 = reply08[Math.floor(Math.random() * reply08.length)]
let reply = [reply1, reply0, reply2, reply3, reply4, reply5, reply6, reply7, reply8]
        let reponse1 = reply[Math.floor(Math.random() * reply.length)]

let nombre = 30
 const emoji2 = "\u0033\u20E3";

    const emoji1 = "\u0032\u20E3";
    const emoji = "\u0031\u20E3";
    message.channel.send('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | | |').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1).then(async r => {
          msg.react(emoji2)
            const un = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const deux = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
           const trois = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
            const unn = msg.createReactionCollector(un, {
                time: 1000000
            });
            const deuxx = msg.createReactionCollector(deux, {
                time: 1000000
            });
          const troiss = msg.createReactionCollector(trois, {
                time: 1000000
            });
          

              
          let a = await message.channel.send('Le bot n\'a pas encore joué')         
        
            unn.on('collect', async r => {
              let reply00 = ["un", "deux", "trois"]
 let reply0 = reply00[Math.floor(Math.random() * reply00.length)]
let reply01 = ["un", "deux", "trois"]
 let reply1 = reply01[Math.floor(Math.random() * reply01.length)]
let reply02 = ["un", "deux", "trois"]
 let reply2 = reply02[Math.floor(Math.random() * reply02.length)]
let reply03 = ["un", "deux", "trois"]
 let reply3 = reply03[Math.floor(Math.random() * reply03.length)]
let reply04 = ["un", "deux", "trois"]
 let reply4 = reply04[Math.floor(Math.random() * reply04.length)]
let reply05 = ["un", "deux", "trois"]
 let reply5 = reply05[Math.floor(Math.random() * reply05.length)]
let reply06 = ["un", "deux", "trois"]
 let reply6 = reply06[Math.floor(Math.random() * reply06.length)]
let reply07 = ["un", "deux", "trois"]
 let reply7 = reply07[Math.floor(Math.random() * reply07.length)]
let reply08 = ["un", "deux", "trois"]
 let reply8 = reply08[Math.floor(Math.random() * reply08.length)]
let reply = [reply1, reply0, reply2, reply3, reply4, reply5, reply6, reply7, reply8]
        let reponse1 = reply[Math.floor(Math.random() * reply.length)]
              a.edit('Le bot a retire ' + reponse1 + " batons")
              nombre--
             if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(message.author + ' a gagné') 
                return;
              
              }
              
              if(reponse1 === "un"){
              nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
               if(reponse1 === "deux"){
              nombre--
                                    nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
               if(reponse1 === "trois"){
              nombre--
                                     nombre--
                                     nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              
              return;}
              }
            })
          
            deuxx.on('collect', async r => {
              let reply00 = ["un", "deux", "trois"]
 let reply0 = reply00[Math.floor(Math.random() * reply00.length)]
let reply01 = ["un", "deux", "trois"]
 let reply1 = reply01[Math.floor(Math.random() * reply01.length)]
let reply02 = ["un", "deux", "trois"]
 let reply2 = reply02[Math.floor(Math.random() * reply02.length)]
let reply03 = ["un", "deux", "trois"]
 let reply3 = reply03[Math.floor(Math.random() * reply03.length)]
let reply04 = ["un", "deux", "trois"]
 let reply4 = reply04[Math.floor(Math.random() * reply04.length)]
let reply05 = ["un", "deux", "trois"]
 let reply5 = reply05[Math.floor(Math.random() * reply05.length)]
let reply06 = ["un", "deux", "trois"]
 let reply6 = reply06[Math.floor(Math.random() * reply06.length)]
let reply07 = ["un", "deux", "trois"]
 let reply7 = reply07[Math.floor(Math.random() * reply07.length)]
let reply08 = ["un", "deux", "trois"]
 let reply8 = reply08[Math.floor(Math.random() * reply08.length)]
let reply = [reply1, reply0, reply2, reply3, reply4, reply5, reply6, reply7, reply8]
        let reponse1 = reply[Math.floor(Math.random() * reply.length)]
                            a.edit('Le bot a retire ' + reponse1 + " batons")

                nombre--
                        nombre--
                if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
               if(nombre <= 0){
             msg.edit(message.author + ' a gagné')
               return;}
              
              if(reponse1 === "un"){
              nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
               if(reponse1 === "deux"){
              nombre--
                                    nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
               if(reply === "trois"){
              nombre--
                                     nombre--
                                     nombre--
              if(reponse1 === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
            })
          troiss.on('collect', async r => {
            let reply00 = ["un", "deux", "trois"]
 let reply0 = reply00[Math.floor(Math.random() * reply00.length)]
let reply01 = ["un", "deux", "trois"]
 let reply1 = reply01[Math.floor(Math.random() * reply01.length)]
let reply02 = ["un", "deux", "trois"]
 let reply2 = reply02[Math.floor(Math.random() * reply02.length)]
let reply03 = ["un", "deux", "trois"]
 let reply3 = reply03[Math.floor(Math.random() * reply03.length)]
let reply04 = ["un", "deux", "trois"]
 let reply4 = reply04[Math.floor(Math.random() * reply04.length)]
let reply05 = ["un", "deux", "trois"]
 let reply5 = reply05[Math.floor(Math.random() * reply05.length)]
let reply06 = ["un", "deux", "trois"]
 let reply6 = reply06[Math.floor(Math.random() * reply06.length)]
let reply07 = ["un", "deux", "trois"]
 let reply7 = reply07[Math.floor(Math.random() * reply07.length)]
let reply08 = ["un", "deux", "trois"]
 let reply8 = reply08[Math.floor(Math.random() * reply08.length)]
let reply = [reply1, reply0, reply2, reply3, reply4, reply5, reply6, reply7, reply8]
        let reponse1 = reply[Math.floor(Math.random() * reply.length)]
                          a.edit('Le bot a retire ' + reponse1 + " batons")

            nombre--
                        nombre--
                        nombre--
            if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')} 
            if(nombre <= 0){
             msg.edit(message.author + ' a gagné')
            return;}
            
            if(reponse1 === "un"){
              nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
                return;}
              }
               if(reponse1 === "deux"){
              nombre--
                                    nombre--
              if(nombre === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
               if(reponse1 === "trois"){
              nombre--
                                     nombre--
                                     nombre--
              if(reply === 29){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 28){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 27){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 26){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 25){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 24){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 23){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | | |')}
               if(nombre === 22){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 21){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 20){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | | |')}
              if(nombre === 19){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | | |')}
              if(nombre === 18){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | | | |')}
              if(nombre === 17){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer ! \n| | | | | | | | | | | | | | | | |')}
              if(nombre === 16){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | | |')}
              if(nombre === 15){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | | |')}
              if(nombre === 14){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | | |')}
              if(nombre === 13){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | | |')}
              if(nombre === 12){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | | |')}
              if(nombre === 11){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | | |')}
              if(nombre === 10){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | | |')}
              if(nombre === 9){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | | |')}
              if(nombre === 8){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | | |')}
              if(nombre === 7){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | | |')}
              if(nombre === 6){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | | |')}
              if(nombre === 5){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | | |')}
              if(nombre === 4){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | | |')}
              if(nombre === 3){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| | |')}
              if(nombre === 2){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n| |')}
              if(nombre === 1){
             msg.edit('Veuillez appuyez sur les réactions afin de jouer !\n|')}
              if(nombre <= 0){
             msg.edit(client.user + ' a gagné')
              return;}
              }
              

            })
        })
    })
    })

    
}
exports.conf = {
    aliases: ['stick', 'batons']
    };
    
    exports.help = {
     name: 'baton', description: 'Joue', usage: `baton`
     }