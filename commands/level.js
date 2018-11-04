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
    var Jimp = require("jimp");
    var JimpFONT = require("jimpfont");
    var jimpFONT = new JimpFONT();
    
    let curxp = xp[user.id].xp;
    let curlvl = xp[user.id].level;
    let nxtLvlXp = xp[user.id].level * 100 * curlvl * 1.5;
    let difference = nxtLvlXp - curxp;
    
    new Jimp(80, 30, async (err, image) => {
     
        let Icurxp = await jimpFONT.CreateFont(curxp, 80, 30, "./assets/fonts/SIXTY.ttf", 30, "#FF0000"); // Text, width, height, path, size, HexaColor
     
            image.composite(Icurxp, 0, 0)
            image.getBuffer(Jimp.MIME_PNG,  async (err, bufferxp) => {
     
           if (err) console.log(err);
     
     
           new Jimp(80, 30, async (err, image) => {
     
            let Icurlvl = await jimpFONT.CreateFont(curlvl, 80, 30, "./assets/fonts/SIXTY.ttf", 30, "#FF0000"); // Text, width, height, path, size, HexaColor
         
                image.composite(Icurlvl, 0, 0)
                image.getBuffer(Jimp.MIME_PNG,  async (err, bufferlvl) => {
         
               if (err) console.log(err);
       

    
               new Jimp(80, 30, async (err, image) => {
     
                let InxtLvlXp = await jimpFONT.CreateFont(difference, 80, 30, "./assets/fonts/SIXTY.ttf", 30, "#FF0000"); // Text, width, height, path, size, HexaColor
             
                    image.composite(InxtLvlXp, 0, 0)
                    image.getBuffer(Jimp.MIME_PNG,  async (err, buffernxtlvl) => {
             
                   if (err) console.log(err);
  
                   new Jimp(140, 30, async (err, image) => {
     
                    let muser = await jimpFONT.CreateFont(user.username, 400, 30, "./assets/fonts/Mentega.ttf", 30, "#0000FF"); // Text, width, height, path, size, HexaColor
                 
                        image.composite(muser, 0, 0)
                        image.getBuffer(Jimp.MIME_PNG,  async (err, buffermuser) => {
                 
                       if (err) console.log(err);

          
      message.channel.send('Chargement en cours <a:8104LoadingEmote:507492480816775179>').then(message => {
        Jimp.read(user.avatarURL).then(function (imagetouse) {
            imagetouse.quality(60)
                    .resize(82, 82)
                    Jimp.read(bufferxp).then(function (bufferxpi) {
                        bufferxpi.quality(60)
                                 .resize(80, 30)
                                 Jimp.read(bufferlvl).then(function (bufferlvli) {
                                    bufferlvli.quality(60)
                                             .resize(80, 30)
                                             Jimp.read(buffernxtlvl).then(function (buffernxtlvli) {
                                                bufferlvli.quality(60)
                                                         .resize(80, 30)
                                                         Jimp.read(buffermuser).then(function (buffermuseri) {
                                                            buffermuseri.quality(60)
                                                                     .resize(252, 40)
                    Jimp.read('./database/image/hidoki.png').then(function (mydude) {
                    Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function (font) {
                        mydude.quality(100)
                        mydude.composite(bufferxpi, 215, 100)
                        mydude.composite(bufferlvli, 230, 60)
                        mydude.composite(buffernxtlvli, 303, 137)
                        mydude.composite(buffermuseri, 150, 10)
                        mydude.composite( imagetouse, 37, 67)
                        mydude.write(`level.jpg`)
                        mydude.getBuffer(Jimp.AUTO, (err, buf) => {
                            if (err) return err;
                          message.delete();
                            message.channel.send({files: [{attachment: buf, name: `level.jpg`}] })
                            })
                           
                        })
                    })
                }
            )
            })})
        });
    });
});
});
});
});});
});
    })})})}
}


exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'level', description: 'Voir le level d\'un utilisateur', usage: `level [utilisateur]`
     }  