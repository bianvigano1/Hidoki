//<------------------MODULE--------------------->

var request = require('request')

const Discord = require('discord.js')
//<------------------PACKAGE--------------------->

const errors = require('../util/errors.json')

const config = require('../util/config.json')

const arg = require('../util/args.json')

//<------------------DEBUT DU CODE--------------------->

exports.run = (client, message, args1) => {
    let number = Math.floor(Math.random() * 29) + 1;

  

       let args = message.content.split(" ").slice(1);
       if(args[0] === "help"){
        let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));
      let prefix = prefixes[message.guild.id].prefixes;
        const online = client.emojis.get("482485733886656512");
      const idle = client.emojis.get("482485733316362241");
      const dnd = client.emojis.get("482485733488197642");
      
      let frembed = new Discord.RichEmbed()
      .setAuthor('Aide du Angry')
      .setDescription(arg.fr.psobl)
      .addField('Commande :', `${online} - Disponible`)
      .addField('Utilisation :', `${prefix}angry [mention]`)
      .addField('Utilité :', "Pour s'énerver sur quelqu'un")
      .setFooter('Commande Angry')
      let enembed = new Discord.RichEmbed()
        .setAuthor('Angry help')
        .setDescription(arg.en.psobl)
        .addField('Command :', `${online} - Available`)
        .addField('How to use it :', `${prefix}8ball [mention]`)
        .addField('His utility :', "Répond à une question.")
        .setFooter('Command Angry')
        if(clangue === "fr") return message.channel.send(frembed)
        if(clangue === "en") return message.channel.send(enembed)
      }
       let user = message.mentions.users.first() ? message.mentions.users.first() : client.user

request(`https://api.giphy.com/v1/gifs/search?api_key=${config.giphyapikey}&q=angry&limit=30&offset=0&rating=G&lang=fr`, function (error, response, body) {
    if(!JSON.parse(body).data[number]) return message.channel.send(errors.fr.permissions.erreur)

let url = JSON.parse(body).data[number].url

message.channel.send(`${message.author} s'énerve sur ${user}\n`+url)
  })
}

exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'angry', description: 'S\'enerve', usage: `angry [user]`
     };