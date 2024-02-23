const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
module.exports = {
  name: "antigroup",
  description: "Prevent people from adding you to groups",
  run: async (client, message, args, db) => {
    try{

        if (!args[0] | args[0] !== "on" & args[0] !== "off")
        return message.edit(await language(client, `Veuillez écrire \`on\` ou \`off\` après la commande`, `Write \`on\` or \`off\` after the command`))

        if (args[0] === "on"){
            if (args[1]){
                db.noaddgrp = args.slice(1).join(' ')
                message.edit(await language(client, "L'anti groupes a été activé avec un texte donné", "The anti groups has been activated with text"))
            }
            else{
                db.noaddgrp = null
                savedb(client, db)
                message.edit(await language(client, "L'anti groupes a été activé", "The anti groups has been activated"))
            }
        }
        else{
            db.noaddgrp = false
            savedb(client, db)
            message.edit(await language(client, "L'anti groupes a été désactivé", "The anti groups has been desactivated"))
        }




    }
        catch(e){}
    }
}