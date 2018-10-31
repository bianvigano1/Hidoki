const talkedRecently = new Set();

module.exports.run = async (client, message, args1) => {
    
  if (talkedRecently.has(message.author.id)) {
    message.channel.send("Cooldown ! 20 seconds - " + message.author);
} else {

    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let ava = user.displayAvatarURL

    message.channel.send({
        files: [{
          attachment: `https://www.arcadia-api.xyz/api/v1/grayscale?url=${ava}`,
          name: 'image.png | image.gif'
        }]
      })
    }

talkedRecently.add(message.author.id);
setTimeout(() => {
// Removes the user from the set after a minute
talkedRecently.delete(message.author.id);
}, 20000)
}
exports.conf = {
    aliases: []
    };
    
    exports.help = {
     name: 'grayscale', description: 'Manipule l\'image.', usage: `grayscale [user]`
     };