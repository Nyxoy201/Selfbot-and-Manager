const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const fs = require('fs')
module.exports = {
  name: "setwb",
  description: "Edit the twitch username of the stream",
  run: async (client, message, args, db, prefix) => {
        try{
            if (!args[0]){
                db.webhooklogs = null
                savedb(client, db)
                return message.edit(await language(client, "Le webhook des logs a été supprimé", "The logs webhook has been deleted"))
            }
            else{
                if (!args[0].startsWith("https://")) return message.edit(await language(client, "Veuillez me donner un URL de webhook valide", "Give me a valid webhook URL"))
                db.webhooklogs = args[0]
                savedb(client, db)
                message.edit(await language(client, "Le webhook des logs a été mis à jour", "The logs webhook has beenn updated"))
            }
        }
        catch{}
    }
}