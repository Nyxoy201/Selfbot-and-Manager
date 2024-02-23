const { language } = require('../../fonctions')

module.exports = {
    name: "kickbots",
    description: "Kick all bots from the server",
    run: async (client, message, args, db, prefix) => {
        if (!message.guild) return message.edit(await language(client, `Cette commande est utilisable sur un serveur uniquement`, `This command is usable only in a guild`))
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.edit(await language(client, `Permissions insuffisantes pour utiliser cette commande`, `You don't have the permissions for using this command`))
        

        await message.guild.members.fetch()

        let kicked = 0
        let notkicked = 0

        message.guild.members.cache.map((member) => {
            member.user.bot ? member.kick("Kick bots").then(() => kicked++).catch(() => notkicked++) : ""
        })

        message.edit(await language(client, `${kicked} bots ont été **exupulser**\n${notkicked} bots n'ont pas pu être **expulser**`, `${kicked} bots have been **kicked**\n${notkicked} bots have not been **kicked**`))
    }
}