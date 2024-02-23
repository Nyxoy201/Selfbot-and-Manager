const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");

module.exports = {
    name: "configlog",
    description: "Configure le salon de journalisation.",
    options: [
        {
            type: "channel",
            name: "privé",
            description: "le salon de log privé",
            required: true
        }
    ],
    async run(bot, interaction) {
        const privé = interaction.options.getChannel("privé");

        if (acccess(bot, interaction, interaction.user.id)) {
            config.logprivé = [...config.logprivé, privé.id];

            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
            interaction.reply({ content: "Salon des logs configuré avec succès.", ephemeral: true });
        } else {
            interaction.reply({ content: "Permission refusée.", ephemeral: true });
        }
    },
};

function acccess(bot, interaction, userId) {
    const dev = config.owner || [];
    return dev.includes(userId);
}
