const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "voice",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
✯ __**Nebula - Voice**__ ✯
\`${prefix}joinvc <channelid>\` ➜ **Rejoindre un salon vocal**
\`${prefix}find [ID]\` ➜ **Vous trouve un utilisateur dans les salons communs**
\`${prefix}voicesettings auto [channel_id]\` ➜ **Défini le nouveau salon vocal qui sera rejoint au démarrage**
\`${prefix}voicesettings webcam <on/off>\` ➜ **Active ou désactive le module webcamen salon vocale**
\`${prefix}voicesettings stream <on/off>\` ➜ **Active ou désactive le module stream en salon vocale**`
,`✯ __**Nebula - Voice**__ ✯
\`${prefix}joinvc <channelid>\` ➜ **Join a voice channel**
\`${prefix}find [ID]\` ➜ **Finds you a user in shared lobbies**
\`${prefix}voicesettings auto [channel_id]\` ➜ **Defines the new voice channel that will be joined on startup**
\`${prefix}voicesettings webcam <on/off>\` ➜ **Activates or deactivates the voice chat webcam module**
\`${prefix}voicesettings stream <on/off>\` ➜ **Activates or deactivates the voice channel stream module**`))
  }
}; 