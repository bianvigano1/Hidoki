const fs = require('fs')
const donnees = require('../database/donnees.json')

let langue = require('../database/langue.json')
module.exports.run = async (client, message, args1) => { 
if(!donnees[message.author.id]){
    donnees[message.author.id] = {
        start: 0
        };
      fs.writeFile("./database/donnees.json", JSON.stringify(donnees), (err) => {
                if(err) console.log(err)
    
})}
let cdonnees = donnees[message.author.id].start
if(cdonnees === 0){
    let moka = client.emojis.get('498533640280473600')
    const emoji1 = "✅";
    const emoji = "❌";
    message.channel.send('Voulez-vous démarrer votre aventure, votre but sera de rammaser le plus de Moka '+moka+'. Un Moka est une petite créature, qui permet de faire tout ce que vous voulez.').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const non = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const ok = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
          
            const nonok = msg.createReactionCollector(non, {
                time: 1000000
            });
            const ouiok = msg.createReactionCollector(ok, {
                time: 1000000
            });
          
           ouiok.on('collect', r => {
              msg.delete();

            message.channel.send('Félicitations, vous commencez l\'aventure')
            donnees[message.author.id] = {
                start: 1,
                moka: 0,
                vie: 100,
                level: 0,
                structure: message.guild.name,
                };
              fs.writeFile("./database/donnees.json", JSON.stringify(donnees), (err) => {
                        if(err) console.log(err)
            
        })      
       
})


})


})
}

 }

 exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'start', description: 'Commencez l\'aventure', usage: `start`
     };