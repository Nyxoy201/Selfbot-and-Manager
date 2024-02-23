const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "settings",
  description: "Menu settings",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(await language(client, `
        ✯ __**Nebula - Config**__ ✯
\`${prefix}setprefix <prefix>\` ➜ **Défini un nouveau préfix**
\`${prefix}setusername <twitch>\` ➜ **Défini le pseudo twitch**
\`${prefix}togglesniper <on/off>\` ➜ **Activer / désactiver le sniper nitro**
\`${prefix}configrpc list\` ➜ **Commande pour personnaliser votre RPC**
\`${prefix}rpcsettings\` ➜ **Paramètres de votre RPC**
\`${prefix}settings\` ➜ **Paramètres actuels**
\`${prefix}setwb <lien du webhook>\` ➜ **Vous mets des logs**
\`${prefix}setlang <fr/en>\` ➜ **Changer la langue du bot**
\`${prefix}configspotify list\` ➜ **Configuration status spotify**`,
`
✯ __**Nebula - Config**__ ✯
\`${prefix}setprefix <prefix>\` ➜ **Defined a new prefix**
\`${prefix}setusername <twitch>\` ➜ **Defined the twitch username**
\`${prefix}togglesniper <on/off>\` ➜ **Activate / deactivate the sniper nitro**
\`${prefix}configrpc list\` ➜ **Command for customize your RPC**
\`${prefix}rpcsettings\` ➜ **Settings for your RPC**
\`${prefix}settings\` ➜ **This settings**
\`${prefix}setwb <webhook link>\` ➜ **Auto setup logs**
\`${prefix}setlang <fr/en>\` ➜ **Change the language of the bot**
\`${prefix}configspotify list\` ➜ **Configuration of the spotify status**`))

    }
    catch(e){}
  }
}