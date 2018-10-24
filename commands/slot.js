let coins = require("../database/coins.json");
const talkedRecently = new Set();
const Discord = require("discord.js");
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
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
  .setAuthor('Aide du Slot')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}slot`)
  .addField('Utilité :', "Lance la machine à sous")
  .setFooter('Commande Slot')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Slot help')
   .setDescription(arg.en.no)
   .addField('Command :', `${dnd} - Unavailable`)
   .addField('How to use it :', `${prefix}slot`)
   .addField('His utility :', "Play a slot")
   .setFooter('Command Slot')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  if(clangue === "en")return message.channel.send('This command is unavalaible in English for the moment')
  if (talkedRecently.has(message.author.id)) {
            message.channel.send("Attendez 5 secondes afin de réutiliser cette commande. - " + message.author);
    } else {
		var unun = [
			":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
			  
				];
				 let reponse = (unun[Math.floor(Math.random() * unun.length)])
				 
					var undeux = [
						  ":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
				 ];
				 let reponse2 = (undeux[Math.floor(Math.random() * undeux.length)])
						var untrois = [
					 
						  ":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
				 ];
				 let reponse3 = (untrois[Math.floor(Math.random() * untrois.length)])
				 let ligne1 = `${reponse}|${reponse2}|${reponse3}`
				 
				 var deuxun = [
			":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
			  
				];
				 let reponse4 = (deuxun[Math.floor(Math.random() * deuxun.length)])
				 
					var deuxdeux = [
						  ":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
				 ];
				 let reponse5 = (deuxdeux[Math.floor(Math.random() * deuxdeux.length)])
						var deuxtrois = [
					 
						  ":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
				 ];
				 let reponse6 = (deuxtrois[Math.floor(Math.random() * deuxtrois.length)])
				 let ligne2 = `${reponse4}|${reponse5}|${reponse6}`
				   var troisun = [
			":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
			  
				];
				 let reponse7 = (troisun[Math.floor(Math.random() * troisun.length)])
				 
					var troisdeux = [
						  ":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
				 ];
				 let reponse8 = (troisdeux[Math.floor(Math.random() * troisdeux.length)])
						var troistrois = [
					 
						  ":seven:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":dollar:", ":cherries:", ":x:", ":bell:", ":8ball:", ":x:", ":bell:", ":8ball:",
				 ];
				 let reponse9 = (troistrois[Math.floor(Math.random() * troistrois.length)])
				 let ligne3 = `${reponse7}|${reponse8}|${reponse9}`
				 
		
				 const embed = new Discord.RichEmbed()
				 .setColor("#FE0101")
				 .setTitle(`**[ :slot_machine: @${message.author.tag} a lancé la machine à sous! :slot_machine: ]**`)
				 .addField("**-------------------**", "** **")
				 .addField(`${ligne1} \n \n${ligne2}**<--** \n \n${ligne3}`, `** **`)
				 .addField("**-------------------**", "** **")
				 .setDescription("** **")
				 .setFooter("Slot")
				 await message.channel.send(embed);
	  
				 let uCoins = coins[message.author.id].coins;
				 if(uCoins < 30) return message.channel.send("Vous n'avez pas assez d'argent. Il vous en faut 30 !");
				   message.reply('15 money vous ont été débités pour lancer la machine à sous')
								  let coinAmt = -15;
					 let baseAmt = -15;
					 
					 if(coinAmt === baseAmt){
					 coins[message.author.id] = {
					 coins: coins[message.author.id].coins + coinAmt
					 };
					 const fs = require("fs");
				 fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));

		const verifl2 = [
            { q: ":seven:|:seven:|:seven:", a: [10000]},
          { q: ":dollar::dollar::dollar:", a: [number]},
          {q: ":cherries:|:cherries:|:cherries:", a: [5]},
          {q: "Vous faites du pet-sitting et gagnez "+number+" coins", a: [number]},
          {q: "Vous faites des heures supplémentaires pour gagner "+number+"coins", a: [number]},
        ]   
        const item = verifl2[Math.floor(Math.random() * verifl2.length)];


  if(ligne2 === ":seven:|:seven:|:dollar:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
  if(ligne2 === ":seven:|:dollar:|:seven:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
  if(ligne2 === ":cherries:|:dollar:|:cherries:"){
message.reply("Tu as gagné 40 money")
                    let coinAmt = 40;
	let baseAmt = 40;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
  if(ligne2 === ":cherries:|:seven:|:seven:"){
message.reply("Tu as gagné 60 money")
                    let coinAmt = 60;
	let baseAmt = 60;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":dollar:|:seven:|:seven:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":dollar:|:cherries:|:dollar:"){
message.reply("Tu as gagné 40 money")
                    let coinAmt = 60;
	let baseAmt = 60;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":seven:|:cherries:|:cherries:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":dollar:|:dollar:|:seven:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":seven:|:cherries:|:seven:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":cherries:|:dollar:|:dollar:"){
message.reply("Tu as gagné 45 money")
                    let coinAmt = 45;
	let baseAmt = 45;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":cherries:|:bell:|:bell:"){
message.reply("Tu as gagné 35 money")
                    let coinAmt = 35;
	let baseAmt = 35;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
if(ligne2 === ":cherries:|:cherries:|:dollar:"){
message.reply("Tu as gagné 45 money")
                    let coinAmt = 45;
	let baseAmt = 45;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":cherries:|:cherries:|:seven:"){
message.reply("Tu as gagné 55 money")
                    let coinAmt = 55;
	let baseAmt = 55;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
  if(ligne2 === ":seven:|:dollar:|:dollar:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":x:|:x:|:x:"){
message.reply("Tu as perdu 15 money")
                    let coinAmt = -15;
	let baseAmt = -15;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
  if(ligne2 === ":dollar:|:bell:|:bell:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 30;
	let baseAmt = 30;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":bell:|:bell:|:bell:"){
message.reply("Tu as gagné 250 money")
                    let coinAmt = 250;
	let baseAmt = 250;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":bell:|:seven:|:seven:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":bell:|:cherries:|:cherries:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":cherries:|:bell:|:cherries:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
}}

if(ligne2 === ":cherries:|:cherries:|:bell:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":seven:|:bell:|:bell:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 30;
	let baseAmt = 30;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":bell:|:bell:|:cherries:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 30;
	let baseAmt = 30;
		
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  
  if(ligne2 === ":dollar:|:dollar:|:cherries:"){
message.reply("Tu as gagné 40 money")
                    let coinAmt = 40;
	let baseAmt = 40;
		
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":bell:|:bell:|:dollar:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
		
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":bell:|:bell:|:seven:"){
message.reply("Tu as gagné 50 money")
                    let coinAmt = 50;
	let baseAmt = 50;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
  if(ligne2 === ":8ball:|:bell:|:8ball:"){
message.reply("Tu as gagné 25 money")
                    let coinAmt = 25;
	let baseAmt = 25;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":bell:|:8ball:|:8ball:"){
message.reply("Tu as gagné 25 money")
                    let coinAmt = 25;
	let baseAmt = 25;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:8ball:|:bell:"){
message.reply("Tu as gagné 25 money")
                    let coinAmt = 25;
	let baseAmt = 25;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:bell:|:bell:"){
message.reply("Tu as gagné 45 money")
                    let coinAmt = 45;
	let baseAmt = 45;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":bell:|:8ball:|:bell:"){
message.reply("Tu as gagné 45 money")
                    let coinAmt = 45;
	let baseAmt = 45;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":bell:|:bell:|:8ball:"){
message.reply("Tu as gagné 45 money")
                    let coinAmt = 45;
	let baseAmt = 45;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":8ball:|:8ball:|:8ball:"){
message.reply("Tu as gagné 150 money")
                    let coinAmt = 150;
	let baseAmt = 150;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":cherries:|:8ball:|:8ball:"){
message.reply("Tu as gagné 15 money")
                    let coinAmt = 15;
	let baseAmt = 15;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:cherries:|:8ball:"){
message.reply("Tu as gagné 15 money")
                    let coinAmt = 15;
	let baseAmt = 15;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:8ball:|:cherries:"){
message.reply("Tu as gagné 15 money")
                    let coinAmt = 15;
	let baseAmt = 15;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":cherries:|:8ball:|:cherries:"){
message.reply("Tu as gagné 25 money")
                    let coinAmt = 25;
	let baseAmt = 25;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}if(ligne2 === ":cherries:|:cherries:|:8ball:"){
message.reply("Tu as gagné 25 money")
                    let coinAmt = 25;
	let baseAmt = 25;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:cherries:|:cherries:"){
message.reply("Tu as gagné 25 money")
                    let coinAmt = 25;
	let baseAmt = 25;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:8ball:|:seven:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 30;
	let baseAmt = 30;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":8ball:|:seven:|:8ball:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 30;
	let baseAmt = 30;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}

if(ligne2 === ":seven:|:8ball:|:8ball:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 30;
	let baseAmt = 30;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":seven:|:seven:|:8ball:"){
message.reply("Tu as gagné 40 money")
                    let coinAmt = 40;
	let baseAmt = 40;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne2 === ":seven:|:8ball:|:seven:"){
message.reply("Tu as gagné 40 money")
                    let coinAmt = 40;
	let baseAmt = 40;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}if(ligne2 === ":seven:|:seven:|:8ball:"){
message.reply("Tu as gagné 40 money")
                    let coinAmt = 40;
	let baseAmt = 40;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
    if(ligne2 === ":8ball:|:dollar:|:dollar:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 40;
	let baseAmt = 40;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
     if(ligne2 === ":cherries:|:seven:|:cherries:"){
message.reply("Tu as gagné 30 money")
                    let coinAmt = 40;
	let baseAmt = 40;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
         }}
if(ligne1 === ":seven:|:seven:|:seven:" && ligne2 === ":seven:|:seven:|:seven:" && ligne3 === ":seven:|:seven:|:seven:"){
message.reply("Tu as gagné 100000 money, l'énorme JACKPOT, MP le créateur de bot pour lui montrer")
   client.users.get("381116968327053313").send(`${message.author} a gagné l'énorme JACKPOT, MP le créateur de bot pour lui montrer` )
                    let coinAmt = 1000000;
	let baseAmt = 1000000;
	
	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	const fs = require("fs");
fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
    
    
   }}

}

  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
	// Removes the user from the set after a minute
	talkedRecently.delete(message.author.id);
  }, 5000);
}

exports.conf = {
    aliases: ['machine']
    };
    
    exports.help = {
     name: 'slot', description: 'Lance la machine', usage: `slot <user>`
     }