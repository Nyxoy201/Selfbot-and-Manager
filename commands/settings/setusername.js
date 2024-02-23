const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const fs = require('fs')
module.exports = {
  name: "setusername",
  description: "Edit the twitch username of the stream",
  run: async (client, message, args, db, prefix) => {
    try{

        if (!args[0])
        return message.edit(await language(client, "Veuillez me donner un pseudo twitch", "Please give me a twitch nickname"))

        db.twitch = `https://twitch.tv/${args[0]}`
        savedb(client, db)
        message.edit(await language(client, `Votre pseudo twitch a été changé (\`${args[0]}\`)`, `Your nickname twitch has been changed (\`${args[0]}\`)`))
        }
        catch(e){}
    }
}