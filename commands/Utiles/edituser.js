const { language } = require('../../fonctions')

module.exports = {
    name: "edituser",
    description: "edit your profile",
    run: async (client, message, args, db, prefix) => {
        if (args[0] === "list"){
            message.edit(await language(client, `✞ __**Nebula - User List**__ ✞**
> \`${prefix}edituser aboutme [nouvelle bio]\`
> \`${prefix}edituser hypesquad [nouvelle hypesquad : (clear, balance, brillance, bravery)]\`**`,
            `✞ **Nebula - User List** ✞**
> \`${prefix}edituser aboutme [new bio]\`
> \`${prefix}edituser hypesquad [new house: (clear, balance, brillance, bravery)]\`**`))
        }

        if (args[0] === "aboutme"){
            if (!args[1]){
                client.user.setAboutMe(null)
                .then(async () => message.edit(await language(client, `Votre à propos a été supprimée`, `Your aboutme has been deleted`)))
                .catch(async () => message.edit(await language(client, `Votre à propos ne peut pas être supprimée`, `Your aboutme cannot be deleted`)))
                }
            else client.user.setAboutMe(args.slice(1).join(' '))
            .then(async () => message.edit(await language(client, `Votre à propos a été modifiée`, `Your aboutme has been edited`)))
            .catch(async () => message.edit(await language(client, `Votre à propos ne peut pas être modifier`, `Your aboutme cannot be modified`)))
        }

        else if (args[0] === "hypesquad"){
            if (args[1] === "clear"){
                client.user.setHypeSquad(0)
                .then(async() => message.edit(await language(client, `Votre hypesquad a été supprimée`, `Your hase has been deleted`)))
                .catch(async() => message.edit(await language(client, `Votre hypesquad ne peut pas être supprimée`, `Your house cannot be deleted`)))
            }
            else if (args[1] === "bravery"){
                client.user.setHypeSquad(1)
                .then(async() => message.edit(await language(client, `Votre hypesquad a été modifié`, `Your hase has been edited`)))
                .catch(async() => message.edit(await language(client, `Votre hypesquad ne peut pas être modifiée`, `Your house cannot be edited`)))
            }
            else if (args[1] === "brillance"){
                client.user.setHypeSquad(2)
                .then(async() => message.edit(await language(client, `Votre hypesquad a été modifié`, `Your hase has been edited`)))
                .catch(async() => message.edit(await language(client, `Votre hypesquad ne peut pas être modifiée`, `Your house cannot be edited`)))
            }
            else if (args[1] === "balance"){
                client.user.setHypeSquad(3)
                .then(async() => message.edit(await language(client, `Votre hypesquad a été modifié`, `Your hase has been edited`)))
                .catch(async() => message.edit(await language(client, `Votre hypesquad ne peut pas être modifiée`, `Your house cannot be edited`)))
            }   
        }
    }
}