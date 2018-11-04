//<--------------PACKAGE/MODULE------------>
let Discord = require('discord.js')

let fs = require('fs')

let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require('../database/langue.json')

let donnees = require('../database/donnees.json')

//<------------DEBUT DU CODE----------------->

module.exports.run = async (client, message, args1) => {   

    let start = donnees[message.author.id].start
    //<-------DECLARATION DES VARIABLES--------->
    let prefix = prefixes[message.guild.id].prefixes;

    let args = message.content.split(" ").slice(1)

    let moka = client.emojis.get('498533640280473600')

        if(args[0] === "start" && start === 0){

            donnees[message.author.id] = {
                vie: 100,
                moka: 0,
                structure: message.guild.name,
                level: 0,
                start: 1
                
            }
            fs.writeFile("./database/donnees.json", JSON.stringify(donnees), (err)=>console.log(err));


        }else if(args[0] === "profil" && start === 1){
            let vie = donnees[message.author.id].vie
            let mokaa = donnees[message.author.id].moka
            let structure = donnees[message.author.id].structure
            let level = donnees[message.author.id].level
            message.channel.send(`Profil de **${message.author.username}** | :heart: Vie : **${vie}**/100\n${moka} Moka capturés : **${mokaa}** | Level : **${level}**\nStructure : **${structure}**`)

        }else if(args[0] === "catch" && start === "1"){
            let vie = donnees[message.author.id].vie
            let mokaa = donnees[message.author.id].moka
            let structure = donnees[message.author.id].structure
            let level = donnees[message.author.id].level
            

        }else if(start === 2){
            donnees[message.author.id] = {
                start: 0
            }
            fs.writeFile("./database/donnees.json", JSON.stringify(donnees), (err)=>console.log(err));
            message.channel.send('Veuillez faire ' + prefix + 'adv start pour démarrez votre aventure')
        }

}
//<------------FIN DU CODE------------------->
exports.conf = {
    aliases: ['adv', "adventure"]
    };
    
    exports.help = {
     name: 'aventure', description: 'Faire l\'aventure', usage: `aventure`
     };

     