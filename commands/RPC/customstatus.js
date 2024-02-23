const {
  language,
  savedb
} = require("../../fonctions")
const {
  RichPresence,
  CustomStatus
} = require('discord.js-selfbot-v13')


module.exports = {
  name: "customstatus",
  description: "Config your status",
  run: async (client, message, args, db, prefix) => {
    try {

      async function rpx() {
        const r = new CustomStatus()
        if (db.rpcemoji) r.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r.setState(db.rpctextstatus)
        client.user.setActivity(r)
      }


      if (!(args[0] === "help")) {
    return message.edit(language(client, `✯ __**Nebula - STATUS**__ ✯
    \`${prefix}customstatus emoji [emoji]\`➜ **Vous permet de mettre un emoji dans votre statut**
    \`${prefix}customstatus content [texte]\`➜ **Vous permet de mettre un texte dans votre statut**
    `,
    `✯ __**Nebula - STATUS**__ ✯
    \`${prefix}customstatus emoji [emoji]\`➜ **Allows you to put an emoji in your status**
    \`${prefix}customstatus content [texte]\`➜ **Allows you to put a text in your status**`));
}
      switch (args[0]) {
        case "emoji": {
          if (!args[1]) {
            db.rpcemoji = null
            savedb(client, db)
            message.edit(language(client, `L'Emoji du status a été supprimé\n> Tappez un \`${prefix}configrpc on pour re-activer votre RPC\``, "The status Emoji has been removed"))
            return rpx()
          } else {
            db.rpcemoji = args.slice(1).join(' ')
            savedb(client, db)
            message.edit(language(client, "L'Emoji du status a été modifié", "The Emoji of the status has been edited"))
            return rpx()
          }
          break
        }

        case "content": {
          if (!args[1]) {
            db.rpctextstatus = null
            savedb(client, db)
            message.edit(language(client, "Le Texte du status a été supprimé", "The text of state has been removed"))
            return rpx()
          } else {
            db.rpctextstatus = args.slice(1).join(' ')
            savedb(client, db)
            message.edit(language(client, "Le Texte du status a été modifié", "The text of state has been been edited"))
            return rpx()
          }
          break
        }
      }

    } catch (e) {
      console.log(e)
    }
  }
}