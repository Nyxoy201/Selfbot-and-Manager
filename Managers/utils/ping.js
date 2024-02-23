const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "Affiche la latence du bot",
    permissions: "Aucune",

    async run(bot, interaction) {
        
        interaction.reply({content: `Ping: \`${bot.ws.ping}\``, ephemeral: true})
    }
}