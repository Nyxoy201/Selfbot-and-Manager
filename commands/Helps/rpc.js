const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "rpc",
  description: "Menu RPC",
  run: async (client, message, args, db, prefix) => {
      message.edit(await language(client, `✯ __**Nebula - RPC**__ ✯
\`${prefix}clearstatus\` ➜ **Supprimer votre status**
\`${prefix}clocktime [on/off]\` ➜ **Activer/Desactiver le clocktime**
\`${prefix}configrpc [list]\` ➜ **Voir la liste des différents options du RPC**
\`${prefix}rpcsettings\` ➜ **Voir les options du RPC**
\`${prefix}setrpc [list]\` ➜ **Voir les différents RPC**
\`${prefix}setstatus [online/idle/dnd/invisible]\` ➜ **Modifier votre status**
\`${prefix}spotify [text]\` ➜ **Mettre l'activité spotify**
\`${prefix}configspotify list\` ➜ **Voir les options du RPC spotify**`,
    `✯ __**Nebula - RPC**__ ✯
\`${prefix}clearstatus\` ➜ **Delete your status**
\`${prefix}clocktime [on/off]\` ➜ **Enable/Disable clocktime**
\`${prefix}configrpc [list]\` ➜ **View the list of different RPC options**
\`${prefix}rpcsettings\` ➜ **View RPC options**
\`${prefix}setrpc [list]\` ➜ **View different RPCs**
\`${prefix}setstatus [online/idle/dnd/invisible]\` ➜ **Modify your status**
\`${prefix}spotify [text]\` ➜ **Set Spotify activity**
\`${prefix}configspotify list\` ➜ **View Spotify RPC options**`))
  }
}