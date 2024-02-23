const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const fs = require('fs')
module.exports = {
  name: "togglesniper",
  description: "Activate / Desactivate the sniper nitro",
  run: async (client, message, args, db, prefix) => {
    try{
        if (!args[0] | args[0] !== "on" & args[0] !== "off")
        return message.edit(await language(client, `Veuillez écrire \`on\` ou \`off\` après la commande`, `Write \`on\` or \`off\` after the command`))

        if (args[0] === "on"){
            db.nitrosniper = true
            savedb(client, db)
            message.edit(await language(client, "Le nitro sniper a été activé", "The nitro snipe has been activated"))
        }
        else{
            db.nitrosniper = false
            savedb(client, db)
            message.edit(await language(client, "Le nitro sniper a été désactivé", "The nitro snipe has been desactivated"))
        }
        }
        catch(e){}
    }
}