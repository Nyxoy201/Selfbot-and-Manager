const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
module.exports = {
  name: "backup",
  description: "Gestion des backups",
  run: async (client, message, args, prefix) => {
    try{

      async function check(){
        if (!message.guild)
        return message.edit(await language(client, `Veuillez executer cette commande dans un serveur`, `Use this command in a guild`))
      }

      if (args[0] === "create"){
        var guild = null
        if (args[1]) guild = client.guilds.cache.get(args[1])
        else guild = message.guild
        if (!guild) return message.edit(await language(client, `Aucun serveur de trouvé pour \`${args[1] || "rien"}\``, `No server found for \`${args[1] || "noting"}\``))
        backup.create(guild, {
          maxMessagesPerChannel: 0,
          jsonBeautify: true,
          doNotBackup: [ "emojis", "bans" ],
          saveImages: "base64"
        }).then(async (BackupData) => {
          message.edit(await language(client, `Backup créé, voici son id: \`${BackupData.id}\``, `Backup créated, that's the id: \`${BackupData.id}\``))
        })
      }

      else if (args[0] === "c"){
        if (args[1]) guild = client.guilds.cache.get(args[1])
        else guild = message.guild
        if (!guild) return message.edit(await language(client, `Aucun serveur de trouvé pour \`${args[1] || "rien"}\``, `No server found for \`${args[1] || "noting"}\``))
        backup.create(guild, {
          maxMessagesPerChannel: 0,
          jsonBeautify: true,
          doNotBackup: [ "emojis", "bans" ],
          saveImages: "base64"
        }).then(async (BackupData) => {
          message.edit(await language(client, `Backup créé, voici son id: \`${BackupData.id}\``, `Backup créated, that's the id: \`${BackupData.id}\``))
        })
      }

      else if (args[0] === "load"){
        await check()
        if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.edit(await language(client, `Vous n'avez pas les permissions nécessaires`, `You don't have the permissions for do that`))

        if (!args[1]) 
        return message.edit(await language(client, `Aucun id de backup trouvé pour \` \``, `No backup id found for \` \``))

        backup.fetch(args[1]).then(() => {
          try{
            backup.load(args[1], message.guild, {
              clearGuildBeforeRestore: true
            })          }
          catch(e){console.log(e)}
        })
        .catch(async () => message.edit(await language(client, `Aucune backup de trouvé pour \`${args[0] || " "}\``, `No backup found for \`${args[0] || " "}\``)))
      }

      else if (args[0] === "info"){
        if (!args[1]) 
        return message.edit(await language(client, `Aucun id de backup trouvé pour \` \``, `No backup id found for \` \``))

        backup.fetch(args[1]).then(async (backupinfos) => {
          const date = new Date(backupinfos.data.createdTimestamp);
          const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
          const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

          const guild = await client.guilds.fetch(backupinfos.data.guildID)

          message.edit(`${guild ? `Nom du serveur: ${guild.name}` : `ID du serveur: ${backupinfos.data.guildID}`}
ID de la backup: ${backupinfos.id}
Taille: ${backupinfos.size} kb
Créé le: ${formatedDate}
${backupinfos.data.iconURL ? `Icon du serveur: ${backupinfos.data.iconURL}` : ""}
${backupinfos.data.bannerURL ? `Bannière du serveur: ${backupinfos.data.bannerURL}` : ""}`).catch(() => false)
        })
        .catch(async () => message.edit(await language(client, `Aucune backup de trouvé pour \`${args[0] || " "}\``, `No backup found for \`${args[0] || " "}\``)))

      }
      else if (args[0] === "list" || args[0] === "l"){
        let count = 15;
      let p0 = 0;
      let p1 = count;

      if (args[1] && isNaN(args[1])) {
        backup.list().then(async (backups) => {

          let backupFetched = [];
          for (let i = 0; i < backups.length; i++) {
            const fetchingBackup = await backup.fetch(backups[i])
            backupFetched.push(fetchingBackup)
          }
          const backupInfos = (await Promise.all(backupFetched.sort(function(a, b) {
            return a.data.name.localeCompare(b.data.name)
          }).filter(b => b.data.name.toLowerCase().includes(args[1].toLowerCase())).slice(p0, p1).map((e, i) => `\`${e.data.name}\` ➜ **${e.id}**`))).join('\n')

          return message.edit(`${backupInfos.length > 0 ? backupInfos : "Aucune backup"}`)
        })
      } else if (!isNaN(args[1])) {
        switch (args[1]) {
          default:
            p0 = p0 + count * args[1]
            p1 = p1 + args[1] * count
            break
          case 1:
            p0 = 0
            p1 = p1 * args[1]
            break
        }

        backup.list().then(async (backups) => {

          let backupFetched = [];
          for (let i = 0; i < backups.length; i++) {
            const fetchingBackup = await backup.fetch(backups[i])
            backupFetched.push(fetchingBackup)
          }
          const backupInfos = (await Promise.all(backupFetched.sort(function(a, b) {
            return a.data.name.localeCompare(b.data.name)
          }).slice(p0, p1).map((e, i) => `\`${e.data.name}\` ➜ **${e.id}**`))).join('\n')

          message.edit(`${backupInfos.length > 0 ? backupInfos : "Aucune backup"}`)
        })
      } else {
        backup.list().then(async (backups) => {

          let backupFetched = [];
          for (let i = 0; i < backups.length; i++) {
            const fetchingBackup = await backup.fetch(backups[i])
            backupFetched.push(fetchingBackup)
          }

          const backupInfos = (await Promise.all(backupFetched.sort(function(a, b) {
            return a.data.name.localeCompare(b.data.name)
          }).slice(p0, p1).map((e, i) => `\`${e.data.name}\` ➜ **${e.id}**`))).join('\n')

          message.edit(`${backupInfos.length > 0 ? backupInfos : "Aucune backup"}`)
        })
      }
      }

      /*else if (args[0] === "delete"){
        backup.remove(args[1])
        .then(async () => message.edit(await language(client, `Backup supprimée`, "Backup deleted")))
        .catch(async () => message.edit(await language(client, `Backup non trouvée`, `Backup not found`)))
      }*/
    }
    catch(e){}
}
}