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
  .setAuthor('Aide du Todo')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}todo <add/remove/see> [texte/tout]`)
  .addField('Utilité :', "Une liste de à faire")
  .setFooter('Commande Todo')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Todo help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}todo <ad/remove/see> [text/all]`)
   .addField('His utility :', "A todo list")
   .setFooter('Command Todo')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    let warns = JSON.parse(fs.readFileSync("./database/todo.json", "utf8"));
      

    
    const mentioned = message.author

//<----------------------------------------------------------------------------------------------------------------------------------------------------------->     
     if(!args[0]) return message.channel.send('Vous devez indiquer un argument ; `add` `remove` `see`')
if(args[0] === "add"){

    if(args.slice(1).includes("@everyone")) return message.channel.send("Notifier everyone tu feras, ban tu seras")
    if(args.slice(1).includes("@here")) return message.channel.send("Notifier here tu feras, ban tu seras")
    if(args.slice(1).includes("`")) return message.channel.send("Tu veux casser qui ?")
     
     if(!args[1]) return message.channel.send('Tu dois indiquer un texte')
              if (args.slice(1).length != 0) {
     
                const date = new Date().toUTCString();
     
                if (warns[message.guild.id] === undefined)
     
                  warns[message.guild.id] = {};
     
                if (warns[message.guild.id][mentioned.id] === undefined)
     
                  warns[message.guild.id][mentioned.id] = {};
     
                const todo = Object.keys(warns[message.guild.id][mentioned.id]).length;
     
                if (warns[message.guild.id][mentioned.id][todo] === undefined){
     
                  warns[message.guild.id][mentioned.id]["1"] = {"Chose_à_faire": args.slice(1).join(' '), time: date, user: message.author.id};
     
                } else {
     
                  warns[message.guild.id][mentioned.id][todo+1] = {"Chose_à_faire": args.slice(1).join(' '),
     
                    time: date,
     
                    user: message.author.id};
     
                }
     
                fs.writeFile("./database/todo.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
    message.delete();
     
                message.channel.send(':white_check_mark: | Ajouté à la liste');
     
     
            
          
     
        }
     
      
    


}else if(args[0] === "see"){


 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a rien dans sa liste :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a rien dans sa liste :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** choses à faire dans sa liste :white_check_mark:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].Chose_à_faire+
 
            "**\" ajouté le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        
      }else if(args[0] === "delete"){

        const args = message.content.split(' ').slice(1);
     
        const arg2 = Number(args[1]);
     
      
     
              if (!isNaN(arg2)) {
     
                if (warns[message.guild.id][mentioned.id] === undefined) {
     
                  message.channel.send(mentioned.tag+" n'a rien dans sa liste");
     
                  return;
     
                } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
     
                  message.channel.send("Cette ligne n'existe pas");
     
                  return;
     
                }
     
                delete warns[message.guild.id][mentioned.id][arg2];
     
                var i = 1;
     
                Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
     
                  var val=warns[message.guild.id][mentioned.id][key];
     
                  delete warns[message.guild.id][mentioned.id][key];
     
                  key = i;
     
                  warns[message.guild.id][mentioned.id][key]=val;
     
                  i++;
     
                });
     
                fs.writeFile("./database/todo.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     
                if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
     
                  delete warns[message.guild.id][mentioned.id];
     
                }

                message.channel.send(`Votre ligne n°${args[1]} a bien été supprimé`)
     
                return;
     
              } if (args[1] === "tout") {
     
                delete warns[message.guild.id][mentioned.id];
     
                fs.writeFile("./database/todo.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
     message.channel.send('Toute votre liste a été reset')
            
                
     
                return;
     
              } else {
     
                message.channel.send("Erreur mauvais usage: "+prefix+"todo <delete> <nombre>");
     
              }
              }else{
                  message.channel.send('Cet argument n\'est pas reconnu')
              }
}





  exports.conf = {
    aliases: ['afaire']
    };
    
    exports.help = {
     name: 'todo', description: 'Faire votre liste', usage: `todo <argument> <texte>`
     };