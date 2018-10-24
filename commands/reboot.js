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
  .setAuthor('Aide du Reboot')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}reboot`)
  .addField('Utilité :', "Permet de redémarer le bot")
  .setFooter('Commande Reboot')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Pfc help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}pfc`)
   .addField('His utility :', "Restart the bot.")
   .setFooter('Command Pfc')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }
if(message.author.id === config.owner) {
    console.log("Le bot s'est reset")
    client.channels.get("475312148898119680").send(`Bot éteint par ${message.author.tag} :x:, il est pas gentil :cry:`)
     message.channel.send("**Je reboot**")
    await  message.react('🇴')
    await       message.react('🇰')
                 .then(message => client.destroy())
                 .then(() => client.login(config.token))
      message.channel.send("**Je suis reboot.**")
  } else {
  message.channel.send("Qui tu crois qu'tu vas reboot. :joy:")
  }
  if(clangue === "en") return message.channel.send('Lol, you\'ll not gonna reboot me.')
}

  exports.conf = {
    aliases: ['reviens', 'redemarre', 'come']
    };
    
    exports.help = {
     name: 'reboot', description: 'Reboot le bot', usage: `reboot`
     };