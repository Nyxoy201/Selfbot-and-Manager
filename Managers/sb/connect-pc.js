const Discord = require("discord.js")

module.exports = {
    name: "connnect-pc",
    description: "pour récupérer son token sur pc.",
    permissions: "Aucune",

    async run(bot, interaction) {

        let embed = new Discord.EmbedBuilder()
        .setTitle("Etape pour récupéré votre token.")
        .setDescription('Suivez ces étapes pour récupérer votre token Discord.')
        .addFields(
          { name: '1️⃣ - Allez sur :', value: '[Discord](https://discord.com/)\nCliquez sur « Ouvrir Discord dans ton navigateur » pour ouvrir la version navigateur de Discord.\nSaisissez votre identifiant et mot de passe puis cliquez sur « Se connecter » pour vous connecter à votre Discord via votre navigateur web.' },
          { name: '2️⃣ - Ouvrir les outils de développement.', value: 'Pour ce faire, appuyez sur « Ctrl » + « Shift » + « i » sur votre clavier.' },
          { name: '3️⃣ - Récupérer le token', value: 'Se rendre dans l\'onglet console et coller la ligne suivante 😗\n```(webpackChunkdiscord_app.push([[\'\'],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()```' }
        )
        .setColor("White")

        interaction.reply({embeds: [embed], ephemeral: true})
    }
}