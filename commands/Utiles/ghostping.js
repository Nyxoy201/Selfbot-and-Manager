const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "ghostping",
  description: "Ghost ping a user",
  run: async (client, message, args) => {

    message.delete().catch(() => false)

    const user = message.mentions.users.first();
    if (!user)
      return message.channel.send(await language(client, "Veuillez me donner un utilisateur à ghostping", "Please specify a user to ghost ping."))
    message.delete().catch(() => false)
  },
};
