const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const fs = require('fs')
module.exports = {
  name: "setlang",
  description: "Edit the language of the selfbot",
  run: async (client, message, args, db, prefix) => {
    try{
        if (!args[0] | args[0] !== "en" & args[0] !== "fr")
        return message.edit(await language(client, `Veuillez écrire \`en\` ou \`fr\` après la commande`, `Write \`en\` or \`fr\` after the command`))
        
        if (args[0] === "en"){
            db.langue = "en"
            savedb(client, db)
            message.edit(await language(client, "Le language du bot a été mis sur `english`", "The language of the bot has been set to `english`"))
        }
        else{
            db.langue = "fr"
            savedb(client, db)
            message.edit(await language(client, "Le language du bot a été mis sur `français`", "The language of the bot has been set to `français`"))
        }

        }
        catch(e){}
    }
}