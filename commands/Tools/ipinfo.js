const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions");
module.exports = {
  name: "ipinfo",
  description: "Get info about an IP address",
  run: async (client, message, args, db) => {
    try{

    
      const ip = args[0];
      if (!ip) return message.edit(await language(client, "Veuillez me donner une adresse IP", "Please provide an IP address"))

      const fetch = require("node-fetch");
      const res = await fetch(`http://ip-api.com/json/${ip}`);
      const json = await res.json();

      if (json.status !== "success")
        return message.edit(await language(client, "Adresse IP invalide", "Invalid IP address"))

      message.edit("**IP INFOS**```json\n\n" + JSON.stringify(json, null, 2) + "```")
      
    }
    catch(e){}
  },
};
