const { language } = require("../../fonctions");

module.exports = {
  name: "find",
  description: "Rechercher un utilisateur en vocal dans tous les serveurs",
  run: async (client, message, args) => {
    if (!args[0]) return message.edit(await language(client, "> Veuillez fournir un membre à rechercher", "> Please enter a member to search"));

    let userID = args[0].replace(/[^0-9]/g, '');

    let memberToFind = await client.users.fetch(userID);
    if (!memberToFind) return message.edit(await language(client, "> Membre introuvable", "> Member not found"));

    let foundVoiceChannels = [];

    for (const [guildID, guild] of client.guilds.cache) {
      let voiceChannel = guild.members.cache.get(memberToFind.id)?.voice.channel;
      if (voiceChannel) {
        foundVoiceChannels.push(await language(client, `> <@${memberToFind.id}> est actuellement connecté dans le vocal ${voiceChannel}`, `> <@${memberToFind.id}> is actually connected in the voice channel ${voiceChannel}`));
      }
    }

    if (foundVoiceChannels.length > 0) {
      message.edit(foundVoiceChannels.join("\n"));
    } else {
      message.edit(await language(client, "> Cet utilisateur n'est pas en vocal.", "> This user isn't in voice chat."));
    }
  }
};