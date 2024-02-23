const Discord = require("discord.js-selfbot-v13");
const {language} = require('../../fonctions')
module.exports = {
  name: "snipe",
  description: "Snipe the last message",
  run: async (client, message, args) => {
    
    const msg = client.snipe.get(message.channel.id)
    if(!msg) return message.edit("Aucun message enregistré.")

    message.edit(await language(client, 
      `✯ __**Nebula - Snipe**__ ✯
    > Auteur: ${msg.author}
    > Message: ${msg.content}
    > Image: ${msg.image}
    > Date: <t:${parseInt(msg.date / 1000, 10)}:R>`,
      `✯ __**Nebula - Snipe**__ ✯
    > Author: ${msg.author}
    > Content: ${msg.content}
    > Image: ${msg.image}
    > Date: <t:${parseInt(msg.date / 1000, 10)}:R>`))    
  }
}