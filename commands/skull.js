const fs = require('fs')
module.exports.run = async (client, message, args1) => {
  
    let args = message.content.split(" ").slice(1);


    let name = args.join(" ")
if(!name) return message.channel.send('Tu dois mettre un nom')
    message.channel.send({
        files: [{
          attachment: `https://minotar.net/avatar/${name}/100.png`,
          name: 'skin.png'
        }]
      })
     
    }



exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'skull', description: 'Manipule l\'image.', usage: `skull <pseudo>`
     };