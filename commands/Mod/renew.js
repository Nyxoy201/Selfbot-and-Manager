const { language } = require('../../fonctions')

module.exports = {
    name: "renew",
    description: "Recreate a channel",
    run: async (client, message, args, db, prefix) => {
        if (!message.guild) return message.edit(await language(client, `Cette commande est utilisable sur un serveur uniquement`, `This command is usable only in a guild`))
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.edit(await language(client, `Permissions insuffisantes pour utiliser cette commande`, `You don't have the permissions for using this command`))

        await message.guild.channels.fetch()
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel

        try {
            let ee = await channel.clone({
                name: channel.name,
                permissions: channel.permissionsOverwrites,
                type: channel.type,
                topic: channel.withTopic,
                nsfw: channel.nsfw,
                birate: channel.bitrate,
                userLimit: channel.userLimit,
                rateLimitPerUser: channel.rateLimitPerUser,
                permissions: channel.withPermissions,
                position: channel.rawPosition,
                reason:  `Salon recréé par ${message.author.tag} (${message.author.id})`
            })
            channel.delete().catch(async () => ee.delete() && message.edit(await language(client, "Je ne peux pas supprimer ce salon, sûrement à cause de la communauté activé", "I cannot delete this channel maybe because the community is enabled")))
        } catch (error) {}
    }
}