const { language } = require('../../fonctions')
const {Permissions} = require('discord.js-selfbot-v13')

module.exports = {
    name: "clearperms",
    description: "Remove all dangerous perms from roles",
    run: async (client, message, args, db, prefix) => {
        if (!message.guild) return message.edit(await language(client, `Cette commande est utilisable sur un serveur uniquement`, `This command is usable only in a guild`))
        if (!message.member.permissions.has("MANAGE_ROLES")) return message.edit(await language(client, `Permissions insuffisantes pour utiliser cette commande`, `You don't have the permissions for using this command`))

        await message.guild.roles.fetch()
        message.guild.roles.cache.forEach(role => {
            const perms = role.permissions.remove([Permissions.FLAGS.ADMINISTRATOR, Permissions.FLAGS.MANAGE_CHANNELS, Permissions.FLAGS.MANAGE_ROLES, Permissions.FLAGS.MENTION_EVERYONE, Permissions.FLAGS.BAN_MEMBERS, Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.MODERATE_MEMBERS, Permissions.FLAGS.MANAGE_GUILD])
            role.setPermissions(perms, "Clear Perms")
        });

        message.edit(await language(client, "Toutes les permissions danngereuses ont été supprimées", "All dangerous permissions have been removed"))
    }
}