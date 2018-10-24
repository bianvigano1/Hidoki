var math = require('mathjs');
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
  .setAuthor('Aide du Math')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}math <equation>`)
  .addField('Utilité :', "Permet de résoudre une équation")
  .setFooter('Commande Math')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Math help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}math <equation>`)
   .addField('His utility :', "Solve an equation")
   .setFooter('Command Math')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    let input = args.join(" ");
  if(clangue === "fr"){
    if (!input) {
        message.reply('Que veux-tu que je résolve là ?');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`L'équation fournie est invalide, voici l'erreur : ** ${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('RANDOM')
        .addField("**Question :**", question, true)
        .addField("**Réponse :**", answer)

    message.channel.send({
        embed
    })
  console.log(`Equation résolue : ${question} = ${answer}`)
};
if(clangue === "en"){



if (!input) {
        message.reply('What is the equation to solve here .');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Invalid equation !** ${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('RANDOM')
        .addField("**Question :**", question, true)
        .addField("**Answer :**", answer)

    message.channel.send({
        embed
    })
  console.log(`Equation résolue : ${question} = ${answer}`)








}






}

exports.conf = {
    aliases: ['maths', 'equation']
    };
    
    exports.help = {
     name: 'math', description: 'Faites des calculs', usage: `math <equation>`
     };