const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:',
    'a': ':regional_indicator_a:', 
    'b': ':regional_indicator_b:', 
    'c': ':regional_indicator_c:', 
    'd': ':regional_indicator_d:', 
    'e': ':regional_indicator_e:', 
    'f': ':regional_indicator_f:', 
    'g': ':regional_indicator_g:', 
    'h': ':regional_indicator_h:', 
    'i': ':regional_indicator_i:', 
    'j': ':regional_indicator_j:', 
    'k': ':regional_indicator_k:', 
    'l': ':regional_indicator_l:', 
    'm': ':regional_indicator_m:', 
    'n': ':regional_indicator_n:', 
    'o': ':regional_indicator_o:', 
    'p': ':regional_indicator_p:', 
    'q': ':regional_indicator_q:', 
    'r': ':regional_indicator_r:', 
    's': ':regional_indicator_s:', 
    't': ':regional_indicator_t:', 
    'u': ':regional_indicator_u:', 
    'v': ':regional_indicator_v:', 
    'w': ':regional_indicator_w:', 
    'x': ':regional_indicator_x:', 
    'y': ':regional_indicator_y:', 
    'z': ':regional_indicator_z:', 

  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
  });
  
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
    .setAuthor('Aide du Emojify')
    .setDescription(arg.fr.requis)
    .addField('Commande :', `${online} - Disponible`)
    .addField('Utilisation :', `${prefix}emojify <texte>`)
    .addField('Utilité :', "Rend ton texte en Emoji")
    .setFooter('Commande Emojify')
    let enembed = new Discord.RichEmbed()
     .setAuthor('Emojify help')
     .setDescription(arg.en.requis)
     .addField('Command :', `${online} - Available`)
     .addField('How to use it :', `${prefix}emojify <text>`)
     .addField('His utility :', "Emojify your text")
     .setFooter('Command Emojify')
     if(clangue === "fr") return message.channel.send(frembed)
     if(clangue === "en") return message.channel.send(enembed)
    } 
    if(clangue === "fr"){
    let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('Vous devez préciser du texte à émojify');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => mapping[c] || c)
          .join('')
  );
  }
  
  if(clangue === "en"){
    let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You have to put some text to emojify');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => mapping[c] || c)
          .join('')
  );
  }
  
  }
  exports.conf = {
    aliases: ['emoji']
    };
    
    exports.help = {
     name: 'emojify', description: 'Rend beau un texte', usage: `emojify <texte>`
     }  