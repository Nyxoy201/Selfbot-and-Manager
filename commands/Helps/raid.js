const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "raid",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
✯ __**Nebula - Raid**__ ✯
\`${prefix}banall\` ➜ **ban  all un serveur**
\`${prefix}delc\` ➜ **Delete tout les salons du serveur**
\`${prefix}spam [nombre] [message]\` ➜ **Spam un message**`,
	`✯ __**Nebula - Raid**__ ✯
\`${prefix}banall\` ➜ **ban all a server**
\`${prefix}delc\` ➜ **Delete all channels from server**
\`${prefix}spam [number] [message]\` ➜ **Spam message**`))
  }
}; 