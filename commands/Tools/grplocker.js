const {  language } = require("../../fonctions")
const request = require('request');

module.exports = {
    name: "grplocker",
    description: "Vérouille le groupe",
    run: async (client, message, args, db, prefix) => {
        const groupid = args[0];
        let lockInterval = null;

        if (!groupid) return message.edit(await language(`Veuillez mettre l'id du groupe a vérouiller`,`Please put the id of the group to lock`));
        if (lockInterval) clearInterval(lockInterval);
        lockInterval = setInterval(async () => {
          request(`https://discord.com/api/v9/channels/${groupid}/recipients/${client.user.id}`, {
            "headers": {
              "accept": "*/*",
              "authorization": `${client.token}`,
            },
            "method": "PUT",
          }, (err, response, body) => false)
        }, 350)
        message.edit(`> **NEBULA GROUP LOCK**`);
        if(groupid === 'delete') {
            if (lockInterval) clearInterval(lockInterval);
            lockInterval = null;
            message.edit(`> **NEBULA GROUP UNLOCK**`);
        };
    }
}