const Discord = require('discord.js');
const config = require('./util/config.json')
const fs = require('fs')

const client = new Discord.Client();
client.login(config.token)

let langue = require('./database/langue.json')
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
	if (err)
		console.error(err);
	let jsfiles = files.filter(f => f.split('.')
		.pop() === 'js');
	if (jsfiles.length <= 0) {
		console.log('Pas de commandes à charger');
		
		return;

	}
	console.log(files)
	console.log(`[Commands]\tJ'ai chargé ${files.length} commandes`);
	jsfiles.forEach(f => {
		let props = require(`./commands/${ f }`);
		props.fileName = f;
		client.commands.set(props.help.name, props);
		props.conf.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		});
	});
});
client.on('ready', () => {
	fs.readdir('./commands/', (err, files) => {
		if (err)
			console.error(err);
		let jsfiles = files.filter(f => f.split('.')
			.pop() === 'js');
		if (jsfiles.length <= 0) {
			console.log('No commands to load!');
			return;
		}
		client.channels.get("475312148898119680").send(`[Commandes] J'ai chargé **${files.length}** commandes`);
	})
console.log('Je suis connecté : ' + client.user.username)
var status = ["@Hidoki", `${client.guilds.size} guilds`, `${client.users.size} members`]
let random = status[Math.floor(Math.random() * status.length)]

	client.user.setPresence({
		game: {
				name: random,
				type: "STREAMING",
				url: "https://twitch.tv/hidoki"
		}
	});
setInterval(function() {

	let random = status[Math.floor(Math.random() * status.length)]

	client.user.setPresence({
		game: {
				name: random,
				type: "STREAMING",
				url: "https://twitch.tv/hidoki"
		}
	});
  }, 10000);

client.channels.get("475312148898119680").send(`Je suis connecté sur **${client.guilds.size}** serveurs pour **${client.users.size}** membres :white_check_mark:`)


})

client.on("guildCreate", guild => {
	let embed = new Discord.RichEmbed()
	.setAuthor(client.user.username, client.user.avatarURL)
	.setColor("RANDOM")
	.setTitle(`🤖 NOUVEAU SERVEUR! 🤖`)
	.setDescription(`**On m'a ajouté sur le serveur :** ${guild.name}\n**Son id est :** ${guild.id}\n**Il a** : ${guild.memberCount} membres !\nSon propiétaire est : ${guild.owner}`)
	client.guilds.get("469060312830574594").channels.get("475324562452774924").send(embed)
	guild.owner.send("Merci beaucoup de m'avoir invité sur votre serveur, vous verrez, je ne vous décevrais pas, car je saurais assouvir à vos besoins :grin:.\n\n Je suis un bot qui a besoin de ces permissions pour fonctionner correctement : ```-MANAGE_ROLES\n-KICK_MEMBERS\n-BAN_MEMBERS\n-MANAGE_NICKNAME\nToutes les permissions de textes ainsi que vocales```\nEnfin afin que je fonctionne correctement, vous devez me configurer, faites `!logchannel` et suivez les instructions afin d'avoir un salon logs, mon créateur possède un logs entier de toutes les commandes, si jamais vous spammez des commandes, attendez-vous à être banni du bot et à être interdit d'utilisation\n\nSi vous avez toutes suggestion, contactez : Guysmow#5384 ou alors rejoignez ce serveur : https://discord.gg/F2KahGk")
  });
  
  
  client.on("guildDelete", guild => {
	let embed = new Discord.RichEmbed()
	.setAuthor(client.user.username, client.user.avatarURL)
	.setColor("RANDOM")
	.setTitle(`🤖 ADIEU SERVEUR 🤖`)
	.setDescription(`**On m'a retiré du serveur :** ${guild.name}\n**Son id est :** ${guild.id}\n**Il a** : ${guild.memberCount} membres !\nSon propiétaire est : ${guild.owner}`)
	client.guilds.get("469060312830574594").channels.get("475324562452774924").send(embed)
  });

  



client.on('message', async message => {

if(message.channel.type === "dm") {
	if(message.author.bot) return
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle("DM au Bot")
    .addField(`Message envoyé par :`,`<@${message.author.id}>`)
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Message : `, message.content + "** **")
    .setFooter(`DM Bot Messages | DM Logs`)
   
    client.channels.get("498120231856766976").send("<@381116968327053313> ")
    client.channels.get("498120231856766976").send(embed)
    client.users.get(message.author.id).send('Votre message a été envoyé au staff du bot, il vous répondra sous peu.')
  }

	if(message.channel.type === "dm") return
	let automod = require("./database/automod.json");
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

  if(!langue[message.author.id]) {
	  
				 langue[message.author.id] = {
				  langue: "fr"
				  };
				fs.writeFile("./database/langue.json", JSON.stringify(langue), (err) => {
						  if(err) console.log(err)
			  


		  })

	  

}
if(message.channel.type === "dm") return
    let prefixes = JSON.parse(fs.readFileSync("./database/prefix.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: `g!`
      };
	}
	const errors = require('./util/errors.json')
	let prefix = prefixes[message.guild.id].prefixes;
	
	
   if(message.content.startsWith(prefix)) {
	   let embed = new Discord.RichEmbed()
	   .setTitle(":no_entry_sign: Blacklisté")
	   .setImage('https://cdn.discordapp.com/attachments/469594449702551568/498941022722588694/panel-1109861_960_720.png')
	   .addField('Tu as été blacklisté pour la raison suivante : ', "Menteur et copieur\n**CHOIX DEFINITIF**")
	   .setFooter('Rien ne sert de contacter qui que ce soit')

	if(message.author.id === "239715222091202570") return message.channel.send(embed); 
}
let clangue = langue[message.author.id].langue
  if(message.content === '<@469054026001022986>'){
	if(clangue === "fr"){
		message.reply('Le préfix sur ce serveur est : **' + prefix + "**, fait "+prefix+"help pour accéder aux commandes d'aides");
	}else if(clangue === 'en'){
		message.channel.send('The prefix on this guild is : **'+ prefix+'**, put '+prefix+"help, to see all the commands")
	}
	}
	if(message.content === "Oui"){
		let reply = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		let reponse2 = reply[Math.floor(Math.random() * reply.length)]
if(reponse2 == 0){
message.channel.send('Stiti')}
	}
	if(message.content === "Quoi ?"){
		let reply = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		let reponse2 = reply[Math.floor(Math.random() * reply.length)]
if(reponse2 == 0){
message.channel.send('Feur')}
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

		
		let coins = require("./database/coins.json");

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
					let coin_embed = new Discord.RichEmbed()
					.setColor("RANDOM")
					.setTitle("Gain d'argent")
					.setDescription(`Félicitation **${message.author.username}**!\nTu viens de gagner **${coinAmt}** money 💸 ! `)
					.setFooter(prefix+"coins pour voir le montant !")
					message.channel.send(coin_embed).then(message => {message.delete(2000)});
				}  
			
			
			}
		})
		client.on('message', message => {
if(message.author.bot) return;
			let xp = require("./database/xp.json");   
		 let xpAdd = Math.floor(Math.random() * 30) + 1;
	 client.channels.get("500699992751734785").send(`${xpAdd} xp pour `+message.author.username);
	 
	 if (!xp[message.author.id]) {
			 xp[message.author.id] = {
					 xp: 0,
					 level: 1
			 };
	 }
	 
	 
	 let curxp = xp[message.author.id].xp;
	 let curlvl = xp[message.author.id].level;
	 let nxtLvl = xp[message.author.id].level * 100 * curlvl * 1.5;
	 xp[message.author.id].xp = curxp + xpAdd;
	 fs.writeFile("./database/xp.json", JSON.stringify(xp), (err) => {
		if(err) console.log(err)

})
	 if (nxtLvl <= xp[message.author.id].xp) {
			 xp[message.author.id].level = curlvl + 1;
			 let lvlup = new Discord.RichEmbed()
					 .setTitle("Level Up!")
					 .addField("Félicitations", `${message.author}`)
					 .setColor("RANDOM")
					 .addField("Nouveau level :", curlvl + 1);
	 
			 message.channel.send(lvlup).then(msg => {
					 msg.delete(5000)
			 });
			 fs.writeFile("./database/xp.json", JSON.stringify(xp), (err) => {
				if(err) console.log(err)

})
			}
	
			


})

client.on("error", error => {
	console.log(error)
});


    
