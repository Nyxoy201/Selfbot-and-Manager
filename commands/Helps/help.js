// command to get profile picture
const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
✯ __**Nebula**__ ✯
*Soyez un original, pas une copie.*
\`${prefix}help\` ➜ **Menu d'aide (ce menu)**
\`${prefix}utility\` ➜ **Commandes d'utilitaire**
\`${prefix}tools\` ➜ **Commandes de tools**
\`${prefix}raid\` ➜ **Commandes de raid**
\`${prefix}mod\` ➜ **Commandes de modération**
\`${prefix}fun\` ➜ **Commandes de fun**
\`${prefix}voice\` ➜ **Commandes de voice**
\`${prefix}rpc\` ➜ **Commandes de RPC**
\`${prefix}settings\` ➜ **Commandes de paramètres**`
,`✯ __**Nebula**__ ✯
*Be an original, not a copy.*
\`${prefix}help\` ➜ **Help menu (this menu)**
\`${prefix}utility\` ➜ **Utility commands**
\`${prefix}tools\` ➜ **Tools commands**
\`${prefix}raid\` ➜ **Raid commands**
\`${prefix}mod\` ➜ **Moderation commands**
\`${prefix}fun\` ➜ **Fun commands**
\`${prefix}voice\` ➜ **Voice commands**
\`${prefix}rpc\` ➜ **RPC commands**
\`${prefix}settings\` ➜ **Parameter commands**`))
  }
}; 