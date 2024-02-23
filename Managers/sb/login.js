const Discord = require("discord.js");
const config = require("../../config.json");
const path = require('path');
const fs = require("fs");
const { Client, Collection } = require("discord.js-selfbot-v13");

module.exports = {
    name: "login",
    description: "Connecte toi",
    permissions: "Aucune",

    async run(bot, interaction) {
        
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal")
        .setTitle("Connexion")
    
        const login = new Discord.TextInputBuilder()
                .setCustomId('token')
                .setLabel("token")
                .setStyle(Discord.TextInputStyle.Short);
    
        const roww = new Discord.ActionRowBuilder().addComponents(login);
    
        modal.addComponents(roww);
    
        await interaction.showModal(modal);
    }
}