//<------------------MODULE--------------------->
const fs = require('fs')

var figlet = require('figlet');

const Discord = require('discord.js')
//<------------------PACKAGE--------------------->

let langue = require('../database/langue.json')

const arg = require('../util/args.json')

const errors = require('../util/errors.json')
//<------------------DEBUT DU CODE--------------------->

exports.run = (client, message, args1) => {
  let clangue = langue[message.author.id].langue
  
     
  let args = message.content.split(" ").slice(1);
  if(args[0] === "help"){
   let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));
 let prefix = prefixes[message.guild.id].prefixes;
   const online = client.emojis.get("482485733886656512");
 const idle = client.emojis.get("482485733316362241");
 const dnd = client.emojis.get("482485733488197642");
 
 let frembed = new Discord.RichEmbed()
 .setAuthor('Aide du Ascii')
 .setDescription(arg.fr.requis)
 .addField('Commande :', `${online} - Disponible`)
 .addField('Utilisation :', `${prefix}ascii <texte>`)
 .addField('Utilité :', "Rend votre texte joli.")
 .setFooter('Commande Ascii')
 let enembed = new Discord.RichEmbed()
   .setAuthor('Ascii help')
   .setDescription(arg.en.psobl)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}ascii <text>`)
   .addField('His utility :', "Your text will be beautiful")
   .setFooter('Command Ascii')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
 }
if(clangue === "fr"){
  var maxLen = 20 
  
  if(args.join(' ').length > maxLen) return message.channel.send('Seulement 20 caractères maximums') 
  
  if(!args[0]) return message.channel.send('Merci de préciser un texte');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
         message.channel.send(errors.fr.permissions.erreur);
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}
  if(clangue === "en"){
  var maxLen = 20 
  
  if(args.join(' ').length > maxLen) return message.channel.send('Only 20 chars max') 
  
  if(!args[0]) return message.channel.send('Specify a text, please.');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
        message.channel.send(errors.en.permissions.erreur);
        console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });
  
  }
  
  
}

exports.conf = {
    aliases: ['asciiart', 'figlet']
    };
    
    exports.help = {
     name: 'ascii', description: 'Transforme votre texte', usage: `ascii`
     };