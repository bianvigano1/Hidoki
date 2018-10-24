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
  .setAuthor('Aide du Destroy')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}destroy`)
  .addField('Utilité :', "Eteint le bot")
  .setFooter('Commande Destroy')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Destroy help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}destroy}`)
   .addField('His utility :', "Destroy the bot")
   .setFooter('Command Destroy')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
    if(message.author.id === config.owner) {
        console.log("Le bot s'est reset")
        client.channels.get("475312148898119680").send(`Bot éteint par ${message.author.tag} :x:, il est pas gentil :cry:`)
         message.channel.send("**Je m'éteins**")
        await message.react('🇴')
        await          message.react('🇰')
                     .then(message => client.destroy())}else{
                        let tomute = message.guild.member((message.author) || message.guild.members.get(message.author));
                        let muterole = message.guild.roles.find(`name`, "Muted");
                        //start of create role
                        if(!muterole){
                          try{
                            muterole = await message.guild.createRole({
                              name: "Muted",
                              color: "#0c0000",
                              permissions:[]
                            })
                            message.guild.channels.forEach(async (channel, id) => {
                              await channel.overwritePermissions(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                              });
                            });
                          }catch(e){
                            console.log(e.stack);
                          }
                     }
                     await(tomute.addRole(muterole.id));
message.channel.send(`<@${tomute.id}> a été mute pour 1 minutes pour avoir voulu éteindre le bot.`)
	setTimeout(function(){
	  tomute.removeRole(muterole.id);
	  message.channel.send(`<@${tomute.id}> a été unmuted !`);
	}, 60000);
  
}
}
exports.conf = {
    aliases: ['eteindre', 'shutdown', 'botoff']
    };
    
    exports.help = {
     name: 'destroy', description: 'Eteint le bot', usage: `destroy`
     };