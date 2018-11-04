const snekfetch = require("snekfetch");
const humanizeduration = require("humanize-duration");

const arg = require('../util/args.json')
const fs = require('fs')
const config = require('../util/config.json')
const Discord = require('discord.js')
let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));

let langue = require("../database/langue.json");
module.exports.run = async (client, message, args1) => {
    

let clangue = langue[message.author.id].langue
    let args = message.content.split(" ").slice(1);
    if(args[0] === "help"){
        const online = client.emojis.get("482485733886656512");
  const idle = client.emojis.get("482485733316362241");
  const dnd = client.emojis.get("482485733488197642");
  
  let frembed = new Discord.RichEmbed()
  .setAuthor('Aide du Npm')
  .setDescription(arg.fr.no)
  .addField('Commande :', `${online} - Disponible`)
  .addField('Utilisation :', `npm <package>`)
  .addField('Utilité :', "Recherche un package sur NPM")
  .setFooter('Commande Npm')
  let enembed = new Discord.RichEmbed()
   .setAuthor('Npm help')
   .setDescription(arg.en.no)
   .addField('Command :', `${online} - Available`)
   .addField('How to use it :', `npm <package>`)
   .addField('His utility :', "Search a package on NPM")
   .setFooter('Command Npm')
   if(clangue === "fr") return message.channel.send(frembed)
   if(clangue === "en") return message.channel.send(enembed)
  }    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args[0].toLowerCase()).then((body) => {
            message.channel.send({
                embed: {
						title: "Package NPM",
						color: 3066993,
						fields: [
							{
								name: "Nom",
								value: body.body.name,
								inline: true
                            },
                            {
								name: "Description",
								value: body.body.description,
								inline: true
                            },
							{
								name: "Auteur",
								value: body.body.author.name,
								inline: true
							},
							{
								name: "Dernière version",
								value: body.body["dist-tags"].latest,
								inline: true
							},
							{
								name: "GitHub",
								value: ((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No Repository"),
								inline: true
							},
							{
								name: "Dernière update",
								value: humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), {
									round: true,
									largest: 2
								}),
								inline: true
                            }
						]
					}
            })
        }).catch((error) => {
            if (error.status === 404) return message.channel.send({
                embed: {
                    title: "ERROR!",
                    color: 0xE50000,
                    description: "Une erreur est survenue"
                }
            })
            console.error("Failed to grab NPM Package.", error.message);
            message.reply("Le Package NPM : **" + args[0] + "** n'a pas été trouvé") 
        })
    } else {
        message.channel.send({
				embed: {
					title: "Erreur !",
					color: 0xE50000,
					description: "Vous devez insérer le nom d'un package"
				}
			});
    }
}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'npm', description: 'Package', usage: `npm`
     };