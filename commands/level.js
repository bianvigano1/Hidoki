let xp = require("../database/xp.json");
const talkedRecently = new Set();

const Discord = require('discord.js')
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
  .setAuthor('Aide du Level')
  .setDescription(arg.fr.psobl)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}level [membre]`)
  .addField('Utilité :', "Voir le level de quelqu'un")
  .setFooter('Commande Level')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Level help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `${prefix}level [membre]`)
   .addField('His utility :', "Show the level of someone")
   .setFooter('Command Level')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }     if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 30 secondes afin de réutiliser cette commande")
} else {

       // the user can type the command ... your command code goes here :)

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 30000);
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author

    if (!xp[user.id]) {
        xp[user.id] = {
            xp: 0,
            level: 1
        };
    }
    let curxp = xp[user.id].xp;
    let curlvl = xp[user.id].level;
    let nxtLvlXp = xp[user.id].level * 100 * curlvl * 1.5;
    let difference = nxtLvlXp - curxp;

    
    const Jimp = require(`jimp`)
  
    
    
  
    
               // the user can type the command ... your command code goes here :)
    
            // Adds the user to the set so that they can't talk for a minute
            
          var image = ["https://cdn.discordapp.com/attachments/498945472258506793/501091288653889536/Level_et_XP_1.png"]
            let imageuse = image[Math.floor(Math.random() * image.length)]
          
            let mUser = user
      let mssg = message.channel.send('Chargement en cours <a:loader:485823841428307969>').then(message => {
            var imagetobase = imageuse
            Jimp.read(mUser.avatarURL, function (err, imagetouse) {
                if (err) throw err;
                imagetouse.quality(60)
                          .resize(400, 400)
                          .write("imagetouse.jpg");
                Jimp.read(imagetobase, function (err, mydude) {
                    if (err) throw err;
                    Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function (font) {
                        mydude.quality(100)
                        mydude.print(font, 930, 450, `${curlvl}`)
                        mydude.print(font, 880, 670, `${curxp}`)
                        mydude.composite( imagetouse, 168, 340 )
                        mydude.write(`level.jpg`)
                        mydude.getBuffer(`image/jpeg`, (err, buf) => {
                            if (err) return err;
                          message.delete();
                            message.channel.send({files: [{attachment: buf, name: `level.jpg`}] })
                            })
                           
                        })
                    })
                }
            )})
       
}}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'level', description: 'Voir le level d\'un utilisateur', usage: `level [utilisateur]`
     }  