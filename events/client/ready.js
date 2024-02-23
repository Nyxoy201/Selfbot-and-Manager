const Discord = require("discord.js-selfbot-v13");
const fs = require('fs')
const { CustomStatus } = require('discord.js-selfbot-v13')

module.exports = {
  name: "ready",
  once: true,

  run: async (client) => {
    try{
      
      console.log(`${client.user.tag} est bien en ligne`);

      while (!fs.existsSync(`./db/${client.user.id}.json`)) fs.writeFileSync(`./db/${client.user.id}.json`, fs.readFileSync("./db/exemple.json"))

      const db = require(`../../db/${client.user.id}.json`)

      if (db.spotifyonoff === true || db.spotifyonoff === "on"){
        const r_ = new CustomStatus()
        if (db.rpcemoji) r_.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r_.setState(db.rpctextstatus)
        const r = new Discord.SpotifyRPC(client)
        if (db.spotifylargeimage) r.setAssetsLargeImage(db.spotifylargeimage) // Image ID
        if (db.spotifysmallimage) r.setAssetsSmallImage(db.spotifysmallimage) // Image ID
        if (db.spotifystates) r.setState(db.spotifystates) // Author
        if (db.spotifydetails) r.setDetails(db.spotifydetails) // Song name
        r.setStartTimestamp(Date.now())
        r.setEndTimestamp(Date.now() + db.spotifyendtimestamp || Date.now() + 1000 * (2 * 60 + 56)) // Song length = 2m56s
      
        client.user.setActivity(r,r_);
      }

      if (db.rpcemoji || db.rpctextstatus){
        const r_ = new CustomStatus()
        if (db.rpcemoji) r_.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r_.setState(db.rpctextstatus)

        client.user.setActivity(r_)
      }

      if (db.rpconoff === true || db.rpconoff === "on"){
        const r_ = new CustomStatus()
        if (db.rpcemoji) r_.setEmoji(db.rpcemoji)
        if (db.rpctextstatus) r_.setState(db.rpctextstatus)
        
        const r = new Discord.RichPresence()
        if (db.rpctitle) r.setName(db.rpctitle)
        if (db.appid) r.setApplicationId(db.appid)
        if (db.rpcdetails) r.setDetails(db.rpcdetails)
        if (db.rpcstate) r.setState(db.rpcstate)
        if (db.rpctype) r.setType(db.rpctype)
        if (db.rpctype === "STREAMING") r.setURL(db.twitch)
        if (db.rpcminparty !== 0 && db.rpcmaxparty !== 0) r.setParty({max: db.rpcmaxparty, current: db.rpcminparty})
        if (db.rpctime) r.setStartTimestamp(db.rpctime)
        if (db.rpclargeimage) r.setAssetsLargeImage(db.rpclargeimage)
        if (db.rpclargeimagetext) r.setAssetsLargeText(db.rpclargeimagetext)
        if (db.rpcsmallimage) r.setAssetsSmallImage(db.rpcsmallimage)
        if (db.rpcsmallimagetext) r.setAssetsSmallText(db.rpcsmallimagetext)
        if (db.buttontext1 && db.buttonlink1) r.addButton(db.buttontext1, db.buttonlink1)
        if (db.buttontext2 && db.buttonlink2) r.addButton(db.buttontext2, db.buttonlink2)
        client.user.setActivity(r,r_)
      }
    }
    catch(e){console.log(e)}
  }
}