const { language } = require('../../fonctions')

module.exports = {
    name: "clearstatus",
    description: "Config the rpc spotify state",
    run: async (client, message, args, db, prefix) => {
      try{
        client.user.setActivity("", {
          type: "PLAYING"
      });
      message.edit(await language(client, "Le status a été supprimé", "The statue has been deleted"))
      }
      catch{}
    }
}