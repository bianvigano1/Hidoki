
const Jimp = require(`jimp`)
const talkedRecently = new Set();
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
  .setAuthor('Aide du Loveship')
  .setDescription(arg.fr.requis)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `${prefix}loveship <membre1> <membre2>`)
  .addField('Utilité :', "Petit test d'amour assez sympatoche")
  .setFooter('Commande Loveship')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Loveship help')
   .setDescription(arg.en.requis)
   .addField('Command :', `${dnd} - Unvailable`)
   .addField('How to use it :', `${prefix}loveship <user1> <user2>`)
   .addField('His utility :', "Loveship rate to see if you are a lover")
   .setFooter('Command Loveship')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  } 
  if(clangue === "en") return message.channel.send('Sorry, this command is unvalaible in English.')
  if (talkedRecently.has(message.guild.id)) {
            message.channel.send("Attendez 30 secondes afin de réutiliser cette commande sur ce serveur")
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.guild.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.guild.id);
        }, 30000);
      var image = ["https://cdn.discordapp.com/attachments/469138606418821120/486207314005721099/matchipossible.png", "https://cdn.discordapp.com/attachments/469138606418821120/486208364850839563/matchgrandamour.png",
            "https://cdn.discordapp.com/attachments/469138606418821120/486211120680534016/mediter.png", "https://cdn.discordapp.com/attachments/469138606418821120/486211141119508482/matchpetitechance.png", "https://cdn.discordapp.com/attachments/469138606418821120/486212628365049857/eyes.png"]
        let imageuse = image[Math.floor(Math.random() * image.length)]
        let replies = [`Impossible`, `Petite chance`, `👀`, `Ca peut matcher !`, `Ca matche !`, `Beaucoup de chance que ça matche`, `Ensemble pour la vie !`, `Un grand matche !`, `MATCHE PARFAIT !`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Spécifiez deux utilisateurs la prochaine fois !`)
  let mssg = message.channel.send('Chargement en cours').then(message => {
        const mUserA = mUser.avatarURL
        var imagetobase = imageuse
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(866, 866)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(866, 866)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                    mydude.quality(60)
                    mydude.print(font, 1000, 1680, `${mUser.username}`)
                  mydude.print(font, 2400, 1680, `${mUser2.username}`)
                    mydude.composite( imagetouse, 784, 797 )
                    mydude.composite( imagetouse2, 2191, 797)
                    mydude.write(`match.jpg`)
                    mydude.getBuffer(`image/jpeg`, (err, buf) => {
                        if (err) return err;
                      message.delete();
                        message.channel.send({files: [{attachment: buf, name: `match.jpg`}] })
                        })
                       
                    })
                })
            })}
        )})
    }}

    
exports.conf = {
    aliases: ['match']
    };
    
    exports.help = {
     name: 'loveship', description: 'Voir le taux d\'amour', usage: `loveship <user1> <user2> `
     };