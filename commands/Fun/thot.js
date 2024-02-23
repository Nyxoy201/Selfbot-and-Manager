const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")
module.exports = {
  name: "thot",
  description: "Note the percentage of other people's filth",
  run: async (client, message, args, db) => {
    try{
        const Zgeg = message.mentions.users.first() ? message.mentions.users.first() : message.author
        var rating = Math.floor(Math.random() * 100) + 1
        message.edit(await language(client, `Le pourcentage de saloperie de ${Zgeg} : \`${rating}%\``, `The percentage of dirt from ${Zgeg} : \`${rating}%\``))
        }
        catch(e){}
    }
}