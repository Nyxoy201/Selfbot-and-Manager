const { language } = require('../../fonctions')

module.exports = {
    name: "setavatar",
    description: "Change your avatar",
    run: async (client, message, args, db, prefix) => {
        if (!args[0]) return message.edit(`Aucun lien de trouvé pour \`rien\``)
        const user = message.mentions.users.first()

        if (user && user.avatar){
            client.user.setAvatar(user.displayAvatarURL({dynamic: true}))
            .then(async () => message.edit(await language(client, "Votre avatar a été modifié", "Your avatar has been edited")))
            .catch(async () => message.edit(await language(client, "Votre avatar ne peut pas être modifié", "Your avatar cannot be edited")))
        }

        else if (args[0].includes("https://")){
            client.user.setAvatar(args[0])
            .then(async () => message.edit(await language(client, "Votre avatar a été modifié", "Your avatar has been edited")))
            .catch(async () => message.edit(await language(client, "Votre avatar ne peut pas être modifié", "Your avatar cannot be edited")))
        }

        else if (message.attachments){
            client.user.setAvatar(message.attachments.first().url)
            .then(async () => message.edit(await language(client, "Votre avatar a été modifié", "Your avatar has been edited")))
            .catch(async () => message.edit(await language(client, "Votre avatar ne peut pas être modifié", "Your avatar cannot be edited")))
        }

        else return message.edit(await language(client, "Votre avatar ne peut pas être modifié", "Your avatar cannot be edited"))
    }
}