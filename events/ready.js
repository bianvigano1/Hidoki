module.exports = async (client) => {
    const fs = require('fs')
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
    
    
    
}