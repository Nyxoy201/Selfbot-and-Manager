const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions")

module.exports = {
    name: "banner",
    description: "Get a user's banner",
    run: async (client, message, args) => {
        let user;
        if (args.length > 0) {
            const mention = args[0];
            const userID = mention.replace(/[^0-9]/g, '');

            user = client.users.cache.get(userID);

            if (!user) {
                return message.edit(await language(client, `✞ __**Nebula**__ ✞\n> Utilisateur introuvable. Veuillez spécifier un utilisateur valide.`, `✞ **__Nebula__** ✞\n> User not found. Please specfy a valid user.`));
            }

        } else {
            user = message.author;
        }

        await user.fetch();

        if (!user.banner) {
            return message.edit(await language(client, `✞ **__Nebula__** ✞\n> L'utilisateur ${user} ne possède pas de bannière.`, `✞ **__Nebula__** ✞\n> User ${user} has no banner.`));
        }

        const bannerURL = user.bannerURL({ dynamic: true, format: 'png', size: 1024 });

        message.edit(await language(client, `✞ **__Nebula__** ✞\n> **Bannière de ${user} :** ${bannerURL}`, `✞ **__Nebula__** ✞\n> **Banner of ${user} :** ${bannerURL}`));
    }
}