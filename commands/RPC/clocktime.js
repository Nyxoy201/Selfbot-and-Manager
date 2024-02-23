const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const { RichPresence } = require('discord.js-selfbot-v13')


 module.exports = {
  name: "clocktime",
  description: "Config your time",
  run: async (client, message, args, db, prefix) => {
    try{

      async function rpx(){
        const r = new RichPresence()
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

        client.user.setActivity(r)
      }

      if (args[0] === "on"){
          message.edit(await language(client, `✯ __**Nebula - ClockTime**__ ✯
**Module Clock Time \`activée\` dans votre RPC**`,
`✯ __**Nebula - ClockTime**__ ✯
**Module Clock Time \`enabled\` in your RPC**`))
    db.rpctime = Date.now()
    savedb()
    rpx()
      }
      else if (args[0] === "off"){
        message.edit(await language(client, `✯ __**Nebula - ClockTime**__ ✯
**Module Clock Time \`désactivé\` dans votre RPC**`,
`✯ __**Nebula - ClockTime**__ ✯
**Module Clock Time \`disabled\` in your RPC**`))
    db.rpctime = null
    savedb()
    rpx()
      }
    }
    catch(e){}
  }
}