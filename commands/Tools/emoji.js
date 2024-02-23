const { Util } = require("discord.js-selfbot-v13")

module.exports = {
    name: 'emoji',
    
    async execute(client, db, prefix, message, args) {
  
        if (client === true) {

            if (!args.length) return message.channel.send({ content: "Veuillez spécifier l'émoji" })

            for (const rawEmoji of args) {
                const parsedEmoji = Util.parseEmoji(rawEmoji)

                if (parsedEmoji.id) {
                    const extension = parsedEmoji.animated ? ".gif" : ".png"
                    const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                    message.guild.emojis.create(url, parsedEmoji.name)
                        .then((emoji) => message.edit({ content: `Emoji Ajouté` }))
                }
            }
        }
    }
}