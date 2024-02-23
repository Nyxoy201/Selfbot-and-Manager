const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")
module.exports = {
  name: "say",
  description: "Saying something under someone else's identity (webhook)",
  run: async (client, message, args, db) => {
    try{

        if (!message.guild)
        return message.edit(await language(client, "Veuillez utiliser cette commande dans un serveur", "Please use this command in a guild"))

        if (!message.member.permissions.has("MANAGE_WEBHOOKS"))
        return message.edit(await language(client, "Vous n'avez pas les permissions nécéssaires pour utiliser cette commande", "You don't have the permissions for using this command"))

        if (!args[0])
        return message.edit(await language(client, "Veuillez mentionner un utilisateur", "Please mention a user"))

        if (!args[1])
        return message.edit(await language(client, "Veuillez me donner un texte à envoyer", "Please give me a text to send"))

        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0])

        message.delete().catch(() => false)

        const webhook = await message.channel.createWebhook(user.username, {
            avatar: user.displayAvatarURL({dynamic: true})
        }).catch(() => false)

        webhook.send(args.slice(1).join(' ')).catch(() => false)

        }
        catch(e){
            message.edit(await language(client, `Aucun utilisateur de trouvé pour \`${args[0]}\``, `No user found for \`${args[0]}\``))
        }
    }
}