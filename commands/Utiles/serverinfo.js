const { language } = require("../../fonctions")
module.exports = {
  name: "serverinfo",
  description: "Display the info of a server",
  run: async (client, message, args, db) => {
    try{
      let guild = client.guilds.cache.get(args[0]) || await client.guilds.fetch(args[0])
      if (!guild) return message.edit(`Aucun serveur de trouvé pour \`${args[0] || "rien"}\``)

      message.edit(await language(client, `✞ __** Nebula - ServerInfo**__ ✞
**
> Nom: ${guild.name}
> ID: ${guild.id}
> Propriétaire: <@${guild.ownerId}>
> ID du propriétaire: ${guild.ownerId}
> Salons: ${guild.channels.cache.size}
> Rôles: ${guild.roles.cache.size} 
> Membres: ${guild.members.cache.size}
> Date de création: <t:${Math.round(guild.createdTimestamp / 1000)}> <t:${Math.round(guild.createdTimestamp / 1000)}:R> 
> Jours depuis la création: ${guild.createdAt.toDateString()}
> Bannière du serveur: ${guild.banner ? guild.bannerURL({size: 1024, format: "webp"}) : "Pas de bannière"}
> Photo du serveur: ${guild.icon ? guild.iconURL({dynamic: true}) : "Pas d'icone"}
> Bannière d'invitation: ${guild.splash ? guild.splashURL({format: "webp", size: 1024}): "Pas de bannière"}**`,
`✞ **Nebula - ServerInfo**__ ✞
**
> Name: ${guild.name}
> ID: ${guild.id}
> Founder: <@${guild.ownerId}>
> Founder ID: ${guild.ownerId}
> Channels: ${guild.channels.cache.size}
> Roles: ${guild.roles.cache.size} 
> Members: ${guild.members.cache.size}
> Creation date: <t:${Math.round(guild.createdTimestamp / 1000)}> <t:${Math.round(guild.createdTimestamp / 1000)}:R> 
> Date since the creation: ${guild.createdAt / 1000 / 60 / 60 / 24}
> Server banner: ${guild.banner ? guild.bannerURL({size: 1024, format: "webp"}) : "No banner"}
> Server icon: ${guild.icon ? guild.iconURL({dynamic: true}) : "No icon"}
> Splash Banner: ${guild.splash ? guild.splashURL({format: "webp", size: 1024}): "No Banner"}**`))
    }
    catch{}
  }
}