const { language } = require('../../fonctions')
module.exports = {
    name: "leaveserver",
    description: "Leave a guild",
    run: async (client, message, args, db, prefix) => {
      try{
        let guild
        if (!args[0]) guild = message.guild
        else guild = await client.guilds.fetch(args[0]).catch(async () => message.edit(await language(client, "Je ne peux pas quitter ce serveur", "I cannot leave this server")))
        if (!guild) return message.edit(await language(client, `Aucun serveur de trouvé pour \`${args[0] || "rien"}\``, `No guild found for \`${args[0] || "rien"}\``))
        await message.delete()
        guild.leave().catch(async () => message.edit(await language(client, "Je ne peux pas quitter ce serveur", "I cannot leave this server")))
    }
      catch{}
    }
}