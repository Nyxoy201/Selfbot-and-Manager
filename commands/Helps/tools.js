const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "tools",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
✯ __**Nebula - Tools**__ ✯
\`${prefix}closedms\` ➜ **Fermez tous vos dms**
\`${prefix}emoji\` ➜ **Crée un emoji**
\`${prefix}find\` ➜ **Rechercher un utilisateur en vocal dans tous les serveurs**
\`${prefix}grplocker\` ➜ **Vérouille le groupe**
\`${prefix}ipinfo\` ➜ **Obtenir des informations sur une adresse IP**
\`${prefix}raimbowrole\` ➜ **Créez un rôle arc-en-ciel**`
,`✯ __**Nebula - Tools**__ ✯
\`${prefix}closedms\` ➜ **Close all your dms**
\`${prefix}emoji\` ➜ **Create an emoji**
\`${prefix}find\` ➜ **Search for a user by voice in all servers**
\`${prefix}grplocker\` ➜ **Lock the group**
\`${prefix}ipinfo\` ➜ **Get information about an IP address**
\`${prefix}raimbowrole\` ➜ **Make a rainbow role**`))
  }
}; 