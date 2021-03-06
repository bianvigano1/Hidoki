const fs = require('fs')
let langue = require('../database/langue.json')
let cooldown = require('../database/cooldown.json')
module.exports.run = async (client, message, args1) => {
  let clangue = langue[message.author.id].langue
    let ccooldown = cooldown[message.author.id].time
  if (ccooldown === 1) {
    if(clangue === "fr") return  message.channel.send("Les commandes de manipulations d'images sont sous un cooldown de 20 secondes - " + message.author);
    if(clangue === "en") return  message.channel.send("All commands with images maniplations are under a 20's seconds cooldown - " + message.author);

} else {    
  
  let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL

  const arcadiaapi = require('arcadia-module');
 
  arcadiaapi.generation("blood", ava).then(url => {
  
  message.channel.send({
      files: [{
        attachment: url,
        name: 'blood.png'
      }]
    })
  })
      cooldown[message.author.id] = {
        time: 1
        };
    fs.writeFile("./database/cooldown.json", JSON.stringify(cooldown), (err) => {
                if(err) console.log(err)
    
   
   
   })
  }

setTimeout(() => {
// Removes the user from the set after a minute
cooldown[message.author.id] = {
    time: 0
    };
fs.writeFile("./database/cooldown.json", JSON.stringify(cooldown), (err) => {
            if(err) console.log(err)



})}, 20000)
}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'blood', description: 'Manipule une image.', usage: `blood [user]`
     };