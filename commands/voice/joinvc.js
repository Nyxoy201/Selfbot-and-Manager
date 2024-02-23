const { language } = require("../../fonctions");
const { joinVoiceChannel } = require('@discordjs/voice');
const fs = require('fs').promises;
require('discord-stream-client');

module.exports = {
    name: "joinvc",
    description: "Rejoindre un salon vocal",
    run: async (client, message, args, db, prefix) => {
        try {
            let channel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || await client.channels.fetch(args[0]);

            if (!channel || channel.type !== "GUILD_VOICE" && channel.type !== "DEFAULT") {
                return message.edit(await language(client, "Veuillez me donner un salon vocal", "Please give me a voice channel"));
            }

            // Chargement des données de l'utilisateur depuis le fichier
            const userId = message.author.id;
            const userFilePath = `./db/${userId}.json`;
            let userDb = {};

            try {
                const userDbString = await fs.readFile(userFilePath, 'utf-8');
                userDb = JSON.parse(userDbString);
            } catch (error) {
                // Gérer l'erreur si le fichier n'existe pas
                console.error("Erreur lors de la lecture du fichier utilisateur :", error);
            }

            // Enregistrement du canal vocal dans la base de données de l'utilisateur
            userDb.voiceconnect = channel.id;

            // Mise à jour du fichier utilisateur
            await fs.writeFile(userFilePath, JSON.stringify(userDb, null, 2));

            // Rejoindre le salon vocal
            await joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            });

            if (userDb.voicestream) {
                await client.createStream();
            }

            message.edit(await language(client, `**Je me suis connecté dans le salon :** <#${channel.id}>`, `**I join the channel :** <#${channel.id}>`));
        } catch (error) {
            console.log("Erreur lors de la connexion au salon vocal :", error);
            message.edit("Une erreur s'est produite lors de la connexion au salon vocal.");
        }
    }
};
