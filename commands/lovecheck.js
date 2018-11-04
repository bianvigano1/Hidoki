const errors = require('../util/errors.json')
const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
const Discord = require('discord.js')
let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require("../database/langue.json");
module.exports.run = async (client, message, args1) => {


/*let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);
    if(args[0] === "help"){
        const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Lovecheck')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `lovecheck <membre1> <membre2>`)
  .addField('Utilité :', "Fait un test d'amour")
  .setFooter('Commande Lovecheck')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Lovecheck help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `lovecheck <user1> <user2>`)
   .addField('His utility :', "Lovecheck rate")
   .setFooter('Command Lovecheck')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
   let user1 = message.mentions.users.first();
 
      let user2 = message.mentions.users.last();

      let member1 = message.guild.member(user1);
      let member2 = message.guild.member(user2);
      let number = Math.floor(Math.random() * 99) + 1;

    if(clangue === "fr"){

if(message.mentions.users.size === 2){
     if(member2.id === "381116968327053313" && member1.id === "469054026001022986") return message.channel.send('Entre mon développeur et, l\'amour n\'a pas de frontière et est **infini**')
  message.channel.send(`Il y'a ${number}% d'amour :heart:, entre ${member1.user.username} et ${member2.user.username}`)
        
    }else{message.channel.send(errors.fr.mention.deux)}
}

    if(clangue === "en"){
  
if(message.mentions.users.size === 2){
    
    
  message.channel.send(`There is ${number}% of love :heart:, beetween ${member1} et ${member2}`)
        
    }else{message.channel.send(errors.en.mention.deux)}
}

*/

     
let user1 = message.mentions.users.first();
let number = Math.floor(Math.random() * 99) + 1;

      let user2 = message.mentions.users.last();
  
    var Jimp = require("jimp");
    var JimpFONT = require("jimpfont");
    var jimpFONT = new JimpFONT();
    
   
    
    new Jimp(80, 30, async (err, image) => {
     
        let inumber = await jimpFONT.CreateFont(`${number}%`, 80, 30, "./assets/fonts/SIXTY.ttf", 30, "#FF0000"); // Text, width, height, path, size, HexaColor
     
            image.composite(inumber, 0, 0)
            image.getBuffer(Jimp.MIME_PNG,  async (err, buffernumber) => {
     
           if (err) console.log(err);
    

    
    
      message.channel.send('Chargement en cours <a:8104LoadingEmote:507492480816775179>').then(message => {
        Jimp.read(user1.avatarURL).then(function (imagetouse1) {
            imagetouse1.quality(60)
                    .resize(82, 82)
                    Jimp.read(user2.avatarURL).then(function (imagetouse2) {
                        imagetouse2.quality(60)
                                .resize(82, 82)
                                             Jimp.read(buffernumber).then(function (buffernumberi) {
                                                buffernumberi.quality(60)
                                                         .resize(80, 30)
                    Jimp.read('./database/image/lovecheck.jpg').then(function (mydude) {
                    Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function (font) {
                        mydude.quality(100)
                        mydude.composite( imagetouse1, 37, 110)
                        mydude.composite(buffernumberi, 90, 140)
                        mydude.composite( imagetouse2, 137, 167)
                        mydude.write(`lovecheck.jpg`)
                        mydude.getBuffer(Jimp.AUTO, (err, buf) => {
                            if (err) return err;
                          message.delete();
                            message.channel.send({files: [{attachment: buf, name: `lovecheck.jpg`}] })
                            })
                           
                        })
                    })
                }
            )
            })})
        });
    });
});




}

exports.conf = {
    aliases: ['love']
    };
    
    exports.help = {
     name: 'lovecheck', description: 'Test d\'amour', usage: `lovecheck <user1> <user2>`
     };