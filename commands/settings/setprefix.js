const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const fs = require('fs')
module.exports = {
  name: "setprefix",
  description: "Edit the prefix of the selfbot",
  run: async (client, message, args, db, prefix) => {
    try{
        console.log(db)


        if (!args[0]) 
        return message.edit(await language(client, "Vous devez me donner un prefix", "You must give me a prefix"))

        if (args.length > 5)
        return message.edit(await language(client, `Votre prefix ne peut pas dépasser les 5 caractères`, `Your prefix cannot be above 5 caracters`))

        if (typeof args[0] !== "string")
        return message.edit(await language(client, `Votre prefix doit être un texte`, `Your prefix must be a text`))

        message.edit(await language(client, `Ton prefix est maintenant \`${args[0]}\``, `Your prefix is now \`${args[0]}\``))
        db.prefix = `${args[0]}`
        savedb(client, db)
        }
        catch(e){}
    }
}
