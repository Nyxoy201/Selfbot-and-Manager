const { language } = require("../../fonctions")
module.exports = {
  name: "userinfo",
  description: "Display the info of a user",
  run: async (client, message, args, db) => {
    try{
      let user = message.mentions.users.first() || client.users.cache.get(args[0])
      if (!user) try{
          user = await client.users.fetch(args[0])
      }
      catch(e){
          user = message.author
      }

      
      message.edit(await language(client, `✞ __**Nebula - Userinfo**__ ✞
> Tag: ${user.username} 
> User ID: ${user.id} 
> Date de création: <t:${Math.round(user.createdTimestamp / 1000)}> <t:${Math.round(user.createdTimestamp / 1000)}:R> 
> Jours depuis la création: ${user.createdAt / 1000 / 60 / 60 / 60 / 30}
> Photo de profil: ${user.avatar ? user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) : "Pas de photo de profile"}
> Bannière: ${user.banner ? user.bannerURL({ format: 'png', dynamic: true, size: 4096 }) : "Pas de bannière"}`,
      `✞ __**Nebula - Userinfo**__ ✞
> Tag: ${user.username} 
> User ID: ${user.id} 
> Creation date: <t:${Math.round(user.createdTimestamp / 1000)}> <t:${Math.round(user.createdTimestamp / 1000)}:R>
> Days since the creation: ${user.createdAt / 1000 / 60 / 60 / 60 / 30}
> Pfp: ${user.avatar ? user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) : "No pfp"}
> Banner: ${user.banner ? user.bannerURL({ format: 'png', dynamic: true, size: 4096 }) : "No banner"}`))
    }
    catch{}
  }
}