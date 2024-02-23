// command to get profile picture
const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "avatar",
  description: "Get a user's avatar",
  run: async (client, message, args) => {
    try{

      let user;
      if (!args[0]) user = message.author
      if (args[0]) user = message.mentions.users.first() || await client.users.fetch(args[0]) 

      if (!user) {
        message.edit(`✞ __**Nebula**__ ✞\n> **Avatar de : <@${user.id}>\n> Pfp :** ` +
          client.user.displayAvatarURL({ dynamic: true, size: 4096 })
        )
        return
    }
       
        message.edit(`✞ __**Nebula**__ ✞\n> **Avatar de : <@${user.id}>\n> Pfp :** ` + 
          user.displayAvatarURL({ dynamic: true, size: 4096 })
        )
    }
    catch(e){
      message.edit(await language(client, `Aucun utilisateur de trouvé pour \`${args[0] || "rien"}\``, `No user founnd for \`${args[0] || "nothing"}\``))
    }
  },
};