module.exports = async (client, message) => {
    const fs = require('fs')
    const Discord = require('discord.js')
    if(message.channel.type === "dm") {
        if(message.author.bot) return
        let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("DM au Bot")
        .addField(`Message envoyé par :`,`${message.author.id} | ${message.author.username}`)
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL)
        .addField(`Message : `, message.content + "** **")
        .setFooter(`DM Bot Messages | DM Logs`)
       
        client.channels.get("498120231856766976").send("<@381116968327053313> <@318866596502306816>")
        client.channels.get("498120231856766976").send(embed)
        client.users.get(message.author.id).send('FR : Votre message a été envoyé au staff du bot, il vous répondra sous peu.\nEN : Your message is sent to the staff of the bot, they will answer fastly')
      }

        if(message.channel.type === "dm") return
        let automod = require("../database/automod.json");
        if(!automod[message.guild.id]){
            
                automod[message.guild.id] = {
                    automod: "off"
                        };
                      fs.writeFile("./database/automod.json", JSON.stringify(automod), (err) => {
                                if(err) console.log(err)
                    
    } )
        }
    
      if(message.channel.type === "dm") return
    let cmod = automod[message.guild.id].automod
    if(message.mentions.users.size >= 3 || message.mentions.roles.size >= 3){
        if(cmod === 'off') return;
        let raison;
        if(message.mentions.users.size >= 3) raison = "membres"
        if(message.mentions.roles.size >= 3) raison = "rôles"
        let tomute = message.guild.member((message.author) || message.guild.members.get(message.author));
        let muterole = message.guild.roles.find(`name`, "Muted");
        //start of create role
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "Muted",
              color: "#0c0000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
        await(tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> a été mute pour 1 minutes pour avoir mentionné trop de ${raison}.`)
        setTimeout(function(){
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> a été unmuted !`);
        }, 60000);
      }
        
    
    
    
    
    if(message.channel.type === "dm") return
    const langue = require('../database/langue.json')
      if(!langue[message.author.id]) {
          
                     langue[message.author.id] = {
                      langue: "fr"
                      };
                    fs.writeFile("./database/langue.json", JSON.stringify(langue), (err) => {
                              if(err) console.log(err)
                  
    
    
              })
    
            
    }
    let cooldown = require('../database/cooldown.json')
    
    if(!cooldown[message.author.id]) {
    
        cooldown[message.author.id] = {
         time: 0
         };
     fs.writeFile("./database/cooldown.json", JSON.stringify(cooldown), (err) => {
                 if(err) console.log(err)
     
    
    
    })}
    if(message.channel.type === "dm") return
    let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));
    if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: `g!`
          };
        }
        const errors = require('../util/errors.json')
    
        let prefix = prefixes[message.guild.id].prefixes;
        
        
       if(message.content.startsWith(prefix)) {
           let embed = new Discord.RichEmbed()
           .setTitle(":no_entry_sign: Blacklisté")
           .setImage('https://cdn.discordapp.com/attachments/469594449702551568/498941022722588694/panel-1109861_960_720.png')
           .addField('Tu as été blacklisté pour la raison suivante : ', "Menteur et copieur\n**CHOIX DEFINITIF**")
           .setFooter('Rien ne sert de contacter qui que ce soit')
    
        if(message.author.id === "") return message.channel.send(embed); 
    }
    let clangue = langue[message.author.id].langue
      if(message.content === '<@469054026001022986>'){
        if(clangue === "fr"){
            message.reply('Le préfix sur ce serveur est : **' + prefix + "**, fait "+prefix+"help pour accéder aux commandes d'aides");
        }else if(clangue === 'en'){
            message.channel.send('The prefix on this guild is : **'+ prefix+'**, put '+prefix+"help, to see all the commands")
        }
        }
    
    
    
        
        const msg = message.content.toLowerCase() || message.content.toUpperCase();
        if (!msg.startsWith(prefix)) return undefined;
        if (message.author.bot) return undefined;
        let args = message.content.slice(prefix.length).trim().split(' ');
        let command = args.shift().toLowerCase();
    
        let cmd;
        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }
        if(!cmd) return
        if(message.channel.type === "dm") return message.channel.send('Vous ne pouvez pas utiliser de commande en MP.')
            cmd.run(client, message, args)
            console.log(message.author.username + " a effectué la commande : " + prefix + command)
            client.channels.get("498945472258506793").send(message.author.username + " a effectué la commande : " + prefix + command + " a "+message.createdAt)
    
            let donnees = require('../database/donnees.json')
    
            if(!donnees[message.author.id]){
                donnees[message.author.id] = {
                    start: 2
                }
                fs.writeFile("./database/donnees.json", JSON.stringify(donnees), (err)=>console.log(err));
    
            }
            
            let coins = require("../database/coins.json");
    
            if(message.content.startsWith(prefix)){
        
            if(!coins[message.author.id]){
          
                coins[message.author.id] = {
                coins: 0
                }};
                let coinAmt = Math.floor(Math.random() * 6) + 1;
                    let baseAmt = Math.floor(Math.random() * 6) + 1;
                    
                    if(coinAmt === baseAmt){
                    coins[message.author.id] = {
                    coins: coins[message.author.id].coins + coinAmt
                    };
                    const fs = require("fs");
                    fs.writeFile("./database/coins.json", JSON.stringify(coins), (err)=>console.log(err));
                    
                    }  
                
                
                }
             
                
            
}