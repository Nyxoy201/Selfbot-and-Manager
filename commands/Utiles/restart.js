const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")
module.exports = {
  name: "restart",
  description: "Restart the client",
  run: async (client, message, args, db) => {
    try{
      message.edit(await language(client,`> Redémarrage en cours..`, `> Restart..`))
      message.edit(await language(client,`> Redémarrage Terminé`, `> Restart Ended`))
       }
    catch{}
  }
}