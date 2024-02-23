const {  language, savedb } = require("../../fonctions")
module.exports = {
  name: "setstatus",
  description: "Modifie la status",
  run: async (client, message, args, db) => {
    try{
        if (args[0] === "dnd"){
            client.user.setStatus('dnd');
            message.edit(await language(client, `Vous êtes mainttenant en mode \`ne pas déranger\``, `Your now in \`do not disturb\` mode`))
            db.status = "dnd"
            savedb()
            }
        else if (args[0] === "idle"){
            client.user.setStatus('idle');
            message.edit(await language(client, `Vous êtes mainttenant en mode \`Inactif\``, `Your now in \`idle\` mode`))
            db.status = "idle"
            savedb()
        }
        else if (args[0] === "invisible"){
            client.user.setStatus('invisible');
            message.edit(await language(client, `Vous êtes mainttenant en mode \`invisible\``, `Your now in \`invisible\` mode`))
            db.status = "invisible"
            savedb()
        }
        else if (args[0] === "online"){
            client.user.setStatus('online');
            message.edit(await language(client, `Vous êtes mainttenant en mode \`En ligne\``, `Your now in \`Online\` mode`))
            db.status = "online"
            savedb()
        }
    }
    catch(e){}
}
}