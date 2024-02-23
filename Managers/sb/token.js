const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "token",
    description: "Envoi ton token",
    permissions: "Aucune",

    async run(bot, interaction) {
        const userId = interaction.user.id;
      
        if (acccess(bot, interaction, userId)) {
          if (config.user[userId] && config.user[userId].token) {
            const channelId = interaction.channelId;
            const message = config.user[userId].token || 'Token introuvable';
      
            interaction.reply({content: `Token : ${message}`, ephemeral: true});
          } else {
            interaction.reply({content: 'Vous n\'êtes pas connecté au sb.', ephemeral: true});
          }
        } else {
        }
      }
    }
      
      function acccess(bot, interaction, userId) {
        const dev = config.owner || [];
        const allowedRoles = config.role || [];
      
        const user = bot.users.cache.get(userId);
        const member = user ? interaction.guild.members.cache.get(userId) : null;
      
        return dev.includes(userId) || member?.roles.cache.some(role => allowedRoles.includes(role.id));
      }