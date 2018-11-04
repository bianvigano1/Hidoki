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
		console.log('No commands to load!');
		
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
})

const load = async () => {
	const fs = require('fs')
const { promisify } = require('util')
const readdir = promisify(fs.readdir)

const evtFiles = await readdir("./events/");

evtFiles.forEach(file => {
	if (file.split(".").slice(-1)[0] !== "js") return;
	const evtName = file.split(".")[0];
	const event = require(`./events/${file}`);
	client.on(evtName, event.bind(null, client));
	delete require.cache[require.resolve(`./events/${file}`)]
})

}






		client.on('message', message => {
			if(message.author.bot) return;

			if(message.channel.type === "text") {
				client.channels.get('500699992751734785').send(message.guild.id +" : " +message.channel.id+" : " + message.author.id + " : `" + message.content+"`")
		}
	
		
			let xp = require("./database/xp.json");   
		 let xpAdd = Math.floor(Math.random() * 30) + 1;	 
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
			 fs.writeFile("./database/xp.json", JSON.stringify(xp), (err) => {
				if(err) console.log(err)

})
			}
	
			


})

client.on("error", error => {
	console.log(error)
});


    

load();