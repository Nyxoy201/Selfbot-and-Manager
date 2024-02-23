const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions")

 module.exports = {
  name: "delc",
  description: "delete all channels",
  run: async (client, message, args) => {
    if (!message.guild) return message.edit(await language(client, "Vous devez utiliser cette commande dans un serveur", "You must use this command in guild only"))
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.edit(await language(client, "Vous n'avez pas la permissions pour utiliser cette commande", "You don't have the permissions to use this commande"))

    message.delete().catch(() => false)

    message.guild.channels.cache.map(c => c.delete().catch(e=>{}))
  },
};