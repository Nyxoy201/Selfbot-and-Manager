const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions")

 module.exports = {
  name: "banall",
  description: "Ban all a server",
  run: async (client, message, args) => {
    
    if (!message.guild) return message.edit(await language(client, "Vous devez utiliser cette commande dans un serveur", "You must use this command in guild only"))
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.edit(await language(client, "Vous n'avez pas la permissions pour utiliser cette commande", "You don't have the permissions to use this commande"))
    
    message.delete().catch(() => false)
    
    await message.guild.members.fetch()
    message.guild.members.cache.forEach(member => {
        member.ban().catch(() => false)
    });
  },
};