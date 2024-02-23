const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const { RichPresence } = require('discord.js-selfbot-v13')


 module.exports = {
  name: "setrpc",
  description: "set your rpc",
  run: async (client, message, args, db, prefix) => {
    try{

      async function rpx(){
        const r = new RichPresence()
        if (db.rpctitle) r.setName(db.rpctitle)
        if (db.appid) r.setApplicationId(db.appid)
        if (db.rpcdetails) r.setDetails(db.rpcdetails)
        if (db.rpcstate) r.setState(db.rpcstate)
        if (db.rpctype) r.setType(db.rpctype)
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

      if (args[0] === "list"){
          message.edit(await language(client, `
✯ __**Nebula - RPC**__ ✯
\`${prefix}setrpc clear\`➜ **Supprime le RPC**
\`${prefix}setrpc 1337\`➜ **1337 RPC**
\`${prefix}setrpc nebula\`➜ **Nebula RPC**
\`${prefix}setrpc league\`➜ **League of Legends RPC**
\`${prefix}setrpc destiny\`➜ **Destiny2 RPC**
\`${prefix}setrpc twitch\`➜ **Twitch RPC**
\`${prefix}setrpc cod\`➜ **Warzone RPC**
\`${prefix}setrpc gtav\`➜ **GTA V RPC**
\`${prefix}setrpc valorant\`➜ **Valorant RPC**
\`${prefix}setrpc rocketleague\`➜ **Rocket League RPC**
\`${prefix}setrpc fallguys\`➜ **Fall Guys RPC**
\`${prefix}setrpc apex\`➜ **Apex Legends RPC**
\`${prefix}setrpc coldwar\`➜ **Call of Duty Cold War RPC**
\`${prefix}setrpc tiktok [text]\`➜ **TikTok RPC**
\`${prefix}setrpc youtube [text]\`➜ **YouTube RPC**
\`${prefix}setrpc fortnite\`➜ **Fortnite RPC**
\`${prefix}setrpc netflix [text]\`➜ **Netflix RPC**
\`${prefix}setrpc vsc\`➜ **Visual Studio Code RPC**
\`${prefix}setrpc fivem\`➜ **FiveM RPC**
\`${prefix}setrpc python\`➜ **Python RPC**
\`${prefix}setrpc gmod\`➜ **Garry's Mod RPC**
\`${prefix}setrpc ph [text]\`➜ **Pornhub RPC**
\`${prefix}setrpc disney+ [text]\`➜ **Disney + RPC**
\`${prefix}setrpc fifa23 [text]\`➜ **FIFA 23 RPC**
\`${prefix}setrpc ubereats [text]\`➜ **Uber Eats RPC**
\`${prefix}setrpc photoshop [text]\`➜ **Photoshop RPC**
\`${prefix}setrpc kali [text]\`➜ **Kali Linux RPC**`,
`✯ __**Nebula - RPC**__ ✯
\`${prefix}setrpc clear\`➜ **Delete RPC**
\`${prefix}setrpc 1337\`➜ **1337 RPC**
\`${prefix}setrpc nebula\`➜ **Nebula RPC**
\`${prefix}setrpc league\`➜ **League of Legends RPC**
\`${prefix}setrpc destiny\`➜ **Destiny2 RPC**
\`${prefix}setrpc twitch\`➜ **Twitch RPC**
\`${prefix}setrpc cod\`➜ **Warzone RPC**
\`${prefix}setrpc gtav\`➜ **GTA V RPC**
\`${prefix}setrpc valorant\`➜ **Valorant RPC**
\`${prefix}setrpc rocketleague\`➜ **Rocket League RPC**
\`${prefix}setrpc fallguys\`➜ **Fall Guys RPC**
\`${prefix}setrpc apex\`➜ **Apex Legends RPC**
\`${prefix}setrpc coldwar\`➜ **Call of Duty Cold War RPC**
\`${prefix}setrpc tiktok [text]\`➜ **TikTok RPC**
\`${prefix}setrpc youtube [text]\`➜ **YouTube RPC**
\`${prefix}setrpc fortnite\`➜ **Fortnite RPC**
\`${prefix}setrpc netflix [text]\`➜ **Netflix RPC**
\`${prefix}setrpc vsc [text]\`➜ **Visual Studio Code RPC**
\`${prefix}setrpc fivem\`➜ **FiveM RPC**
\`${prefix}setrpc python\`➜ **Python RPC**
\`${prefix}setrpc gmod\`➜ **Garry's Mod RPC**
\`${prefix}setrpc ph [text]\`➜ **Pornhub RPC**
\`${prefix}setrpc disney+ [text]\`➜ **Disney + RPC**
\`${prefix}setrpc fifa23 [text]\`➜ **FIFA 23 RPC**
\`${prefix}setrpc ubereats [text]\`➜ **Uber Eats RPC**
\`${prefix}setrpc photoshop [text]\`➜ **Photoshop RPC**
\`${prefix}setrpc kali [text]\`➜ **Kali Linux RPC**`))
          
      }

      else if (!args[0]){
        db.rpctitle = "",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcstate = "",
        db.rpclargeimage = "",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = "",
        db.rpctime = null,
        db.rpcminparty = 0,
        db.rpcmaxparty = 0

        savedb(client, db)
        message.edit(await language(client, "Le RPC a été supprimé", "The RPC has been deleted"))
        rpx()
      }

      else if (args[0] === "clear"){
        db.rpctitle = "",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcstate = "",
        db.rpclargeimage = "",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = "",
        db.rpctime = null,
        db.rpcminparty = 0,
        db.rpcmaxparty = 0

        savedb(client, db)
        message.edit(await language(client, "Le RPC a été supprimé", "The RPC has been deleted"))
        rpx()
      }

      else if (args[0] === "league"){
        db.rpctitle = "League of Legends",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Faille de l'invocateur (classé)",
        db.rpcminparty = 5,
        db.rpcmaxparty = 5,
        db.rpcstate = "Dans un salon, prêt à jouer !",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076159618826375198/416719019576393738.png",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu pues sur LOL maintenant", "The RPC has been edited and you stink on LOL now"))
        rpx()
      }

      else if (args[0] === "gtav"){
        db.rpctitle = "Grand Theft Auto V",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1091254578776916080/1096225023523565609/GTAV.png",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu joues à GTA V", "The RPC has been edited and you playing on GTA V"))
        rpx()
      }

      else if (args[0] === "apex"){
        db.rpctitle = "Apex Legends",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1091254578776916080/1096227774932467823/Apex_Skill.png",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu joues à Apex Legends", "The RPC has been edited and you playing on Apex Legends"))
        rpx()
      }

      else if (args[0] === "rocketleague"){
        db.rpctitle = "Rocket League",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1091254578776916080/1096225696361234482/RL_JEUX_DE_MERDE.png",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu joues à Rocket League", "The RPC has been edited and you playing on Rocket League"))
        rpx()
      }

      else if (args[0] === "fallguys"){
        db.rpctitle = "Fall Guys",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1091254578776916080/1096226946049904781/Fall_Zeub.png",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu joues à Fall Guys", "The RPC has been edited and you playing on Fall Guys"))
        rpx()
      }

      else if (args[0] === "valorant"){
        db.rpctitle = "VALORANT",
        db.rpctype = "PLAYING",
        db.rpcdetails = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcstate = "",
        db.rpclargeimage = "mp:attachments/1091254578776916080/1096224432307048509/valorant.png",
        db.rpcsmallimage = "",
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu joues à Valorant", "The RPC has been edited and you playing on Valorant"))
        rpx()
      }

      else if (args[0] === "destiny"){
        db.rpctitle = "Destiny 2",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Espace Social: La Tour",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076161864041496667/889688531625201755.png",
        db.rpcsmallimage = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le RPC a été modifié et tu joues a Destiny 2", "The RPC has been edited and you playing Destiny 2"))
        rpx()
      }

      else if (args[0] === "twitch"){
        db.rpctitle = "Twitch",
        db.rpctype = "WATCHING",
        db.rpcdetails = "Searching...",
        db.rpcstate = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076170072600608829/899467633504698369.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu cherche un stream Twitch.", "The state of the RPC has been edited and you search a Twitch stream."))
        rpx()
      }

      else if (args[0] === "cod"){   
        db.rpctitle = "Call of Duty® : Modern Warfare®",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Playing Warzone in Caldera",
        db.rpcstate = "",
        db.rpcminparty = 3,
        db.rpcmaxparty = 3,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076170536486445177/889690350606749736.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu joues a Modern Warfare.", "The state of the RPC has been edited and you playing Modern Warfare."))
        rpx()
      }

      else if (args[0] === "coldwar"){
        db.rpctitle = "Call of Duty: Black Ops Cold War",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Zombies | Playing Round Based",
        db.rpcstate = "Playing Die Maschine on Round 935",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076171516024197151/755900218624442479.png",
        db.rpcsmallimage = "",
        db.rpcminparty = 3,
        db.rpcmaxparty = 3,
        db.rpctime = Date.now(),
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu joues a COLDWAR.", "The state of the RPC has been edited and you playing COLDWAR."))
        rpx()
      }

      else if (args[0] === "tiktok"){
        db.rpctitle = "TIKTOK",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On Tiktok",
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076175486268473445/889705078167048203.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu regardes des Tiktok.", "The state of the RPC has been edited and you watching some Tiktok."))
        rpx()
      }
      

      else if (args[0] === "youtube"){
        db.rpctitle = "YOUTUBE",
        db.rpctype = "WATCHING",
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On YouTube",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076175993762500738/987043040940154880.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, `Le status du RPC a été modifié et tu regardes ${args[1]} sur YouTube.`, `The state of the RPC has been edited and you watching ${args[1]} on YouTube.`))
        rpx()
      }

      else if (args[0] === "fortnite"){
        db.rpctitle = "Fortnite",
        db.rpctype = "PLAYING",
        db.rpcdetails = "Battle Royale - Dans le salon",
        db.rpcminparty = 4,
        db.rpcmaxparty = 4,
        db.rpctime = Date.now(),
        db.rpcstate = "En Section",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076177262900170752/858017743551201330.png",
        db.rpcsmallimage = "mp:attachments/1070132157512695828/1076177948631117834/443127519386927104.png",
        db.rpcsmallimagetext = "Palier 100",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, `Le status du RPC a été modifié et tu joues a Fortnite.`, `The state of the RPC has been edited and you playing Fortnite.`))
        rpx() 
      }

      else if (args[0] === "netflix"){
        db.rpctitle = "Netflix",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "S1:E1 #1774",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076181480998441020/926541896573153281.png",
        db.rpcsmallimage = "mp:attachments/1070132157512695828/1076181682606051409/926541821293764658.png",
        db.rpcsmallimagetext = "Playing back",
        db.rpclargeimagetext = ""
        
        savedb(client, db)
        message.edit(await language(client, `Le status du RPC a été modifié et tu regardes ${args[1]} sur Netflix.`, `The state of the RPC has been edited and you watching ${args[1]} on Netflix.`))
        rpx()
      }

      else if (args[0] === "vsc"){
        db.rpctitle = "Code",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = `In ${client.user.username} - 0 problems found`,
        db.rpcstate = "Working on" + args.slice(1).join('nebula.js') || "NEBULA.js" + "17:74",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076182650445889636/810647037388259341.png",
        db.rpcsmallimage = "mp:attachments/1070132157512695828/1076186433800376390/810652286174494720.png",
        db.rpcsmallimagetext = "Visual Studio Code",
        db.rpclargeimagetext = "Editing a JS file"
        
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu joues a VSC.", "The state of the RPC has been edited and you playing VSC."))
        rpx()
      }

      else if (args[0] === "fivem"){
        db.rpctitle = "FiveM",
        db.rpctype = "PLAYING",
        db.rpcdetails = `Playing on ${client.user.username} RP `,
        db.rpcminparty = 1774,
        db.rpcmaxparty = 2048,
        db.rpcstate = "#1337",
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076185597141585960/fivem-34014-0.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu joues a FiveM.", "The state of the RPC has been edited and you playing FiveM."))
        rpx()
      }

      else if (args[0] === "python"){
        db.rpctitle = "Code",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = `In ${client.user.username} - 0 problems found`,
        db.rpcstate = "Working on" + args.slice(1).join('nebula.py') || "NEBULA.js" + "17:74",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076186289650540544/810649485461684234.png",
        db.rpcsmallimage = "mp :attachments/1070132157512695828/1076186433800376390/810652286174494720.png",
        db.rpcsmallimagetext = "Visual Studio Code",
        db.rpclargeimagetext = "Editing a PY file"
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu dev en PY.", "The state of the RPC has been edited and you dev on PY."))
        rpx()
      }

      else if (args[0] === "gmod"){
        db.rpctitle = "Garry's Mod",
        db.rpctype = "PLAYING",
        db.rpcdetails = `In ${client.user.username} - Best Server 👑`,
        db.rpcstate = "",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076186289650540544/810649485461684234.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu joues a Gmod.", "The state of the RPC has been edited and you playing Gmod."))
        rpx()
      }

      else if (args[0] === "ph"){
        db.rpctitle = "PornHub",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "1337 SUCK",
        db.rpcstate = "On Pornhub",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076288871475716166/unnamed.gif",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu es sur PornHub.", "The state of the RPC has been edited and you are on PornHub."))
        rpx()
      }

      else if (args[0] === "disney+"){
        db.rpctitle = "Disney+",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On Disney+",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076289652492882001/de5d2aj-baf1c3c6-2eb4-48c2-a6d6-3e0f904c1e24.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu es sur Disney+.", "The state of the RPC has been edited and you are on Disney+."))
        rpx()
      }

      else if (args[0] === "fifa23"){
        db.rpctitle = "FIFA 23",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "#EA",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076290299850129528/3tF1wvVnzIn9iqChgBNkGnLa.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu es sur FIFA23.", "The state of the RPC has been edited and you are on FIFA23."))
        rpx()
      }

      else if (args[0] === "ubereats"){
        db.rpctitle = "UBER EATS",
        db.rpctype = "WATCHING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = args.slice(1).join(' ') || "",
        db.rpcstate = "On Uber Eats",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076584469445759067/uber-eats-logo.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu es sur Uber Eats.", "The state of the RPC has been edited and you are on Uber Eats."))
        rpx()
      }

      else if (args[0] === "photoshop"){
        db.rpctitle = "Photoshop",
        db.rpctype = "PLAYING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = "Edtiting : " + args.slice(1).join(' ') || "SPEED.psd",
        db.rpcstate = "On Photoshop",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076291001519460432/Adobe_Photoshop_CC_icon.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu es sur Photoshop.", "The state of the RPC has been edited and you are on Photoshop."))
        rpx()
      }
      

      else if (args[0] === "kali"){
        db.rpctitle = "KALI LINUX",
        db.rpctype = "COMPETING",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctime = Date.now(),
        db.rpcdetails = "Terminal : " + args.slice(1).join(' ') || "SPEED",
        db.rpcstate = "On Kali Linux",
        db.rpclargeimage = "mp:attachments/1070132157512695828/1076291488922730537/Kali-dragon-icon.png",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu es sur LINUX.", "The state of the RPC has been edited and you are on LINUX."))
        rpx()  
      }

      else if (args[0] === "nebula"){
        db.rpctitle = "Nebula",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctype = "COMPETING",
        db.rpcdetails = "",
        db.rpcstate = "✯",
        db.rpclargeimage = "https://cdn.discordapp.com/attachments/1187439980574941215/1203765432746508348/792879e20d6328a96d4cbf7d5591031d.png?ex=65d248ec&is=65bfd3ec&hm=0327f35bd3c26a51f02bb7dda33f7212a84bd4eded3ae10bb6b5c876def2e22a&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.buttontext1 = "Nebula SB",
        db.buttonlink1 = "https://discord.gg/NXRgFzxJPE",
        db.rpclargeimagetext = ""

        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu participe a Nebula.", "The state of the RPC has been edited and you competing on Nebula."))
        rpx()
      }

      else if (args[0] === "1337"){
        db.rpctitle = "1337",
        db.rpcminparty = 0,
        db.rpcmaxparty = 0,
        db.rpctype = "COMPETING",
        db.rpcdetails = "",
        db.rpcstate = "⛧",
        db.rpclargeimage = "https://cdn.discordapp.com/attachments/1187439980574941215/1203773792674119790/3a4c864c710cd3421a9416739ed9dce8.png?ex=65d250b5&is=65bfdbb5&hm=fcde99a2ea1c64138ea79d1d0cd8e0f78824c50613a801a63de0c16079e92ba8&",
        db.rpcsmallimage = "",
        db.rpcsmallimagetext = "",
        db.rpclargeimagetext = ""
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié et tu participe a 1337.", "The state of the RPC has been edited and you competing on 1337."))
        rpx()
      }
      
    }catch{}
  }  
}