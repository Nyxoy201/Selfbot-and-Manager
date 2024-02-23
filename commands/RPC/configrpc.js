const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const { RichPresence , CustomStatus } = require('discord.js-selfbot-v13')


 module.exports = {
  name: "configrpc",
  description: "Config your rpc",
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
        if (db.rpcemoji) r.setEmoji(db.rpcemoji || null)
        client.user.setActivity(r)
      }

      if (args[0] === "list"){
          message.edit(await language(client, `✯ __**Nebula - RPC**__ ✯
\`${prefix}configrpc exemple\` ➜ **Vous envois une image pour configurer votre RPC**
\`${prefix}configrpc name [text]\` ➜ **Permet de changer le nom de la rpc**
\`${prefix}configrpc details [text]\` ➜ **Permet de changer les détails de la RPC**
\`${prefix}configrpc state [text]\` ➜ **Permet de changer l'état de la RPC**
\`${prefix}configrpc type [PLAYING, WATCHING, STREAMING, LISTENING, COMPETING]\` ➜ **Permet de changer le type de RPC**
\`${prefix}configrpc largeimage [image link] [text]\` ➜ **Permet de changer la grande image de la RPC**
\`${prefix}configrpc smallimage [image link]\` [text] ➜ **Permet de changer la petite image de la RPC**
\`${prefix}configrpc appid [application_id]\` ➜ **Permet de changer l'id d'application de la RPC**
\`${prefix}configrpc emoji [emoji]\`➜ **Vous permets de mettre un emoji dans votre status**
\`${prefix}configrpc button [link] [text]\` ➜ **Permet d'ajouter un bouton sur la RPC**
\`${prefix}configrpc button2 [link] [text]\` ➜ **Permet d'ajouter un 2ème bouton sur la RPC**
\`${prefix}configrpc party <17/17>\`➜ **Vous permets de mettre un nombre de joueurs dans le RPC**
`,
          `✯ __**Nebula - RPC**__ ✯
\`${prefix}configrpc exemple\`➜ **Sends you an image to configure your RPC**
\`${prefix}configrpc name [text]\`➜ **Allows you to change the name of the RPC**
\`${prefix}configrpc details [text]\`➜ **Allows you to change the RPC details**
\`${prefix}configrpc state [text]\`➜ **Allows you to change the status of the RPC**
\`${prefix}configrpc type [PLAYING, WATCHING, STREAMING, LISTENING, COMPETING]\`➜ **Allows you to change the type of RPC**
\`${prefix}configrpc largeimage [image link] [text]\`➜ **Allows you to change the big picture of the RPC**
\`${prefix}configrpc smallimage [image link] [text]\`➜ **Allows you to change the small image of the CPR**
\`${prefix}configrpc appid [application_id]\`➜ **Allows you to change the RPC application id**
\`${prefix}configrpc emoji [emoji]\`➜ **Allows you to put an emoji in your status**
\`${prefix}configrpc button [link] [text]\`➜ **Allows you to add a button on the RPC**
\`${prefix}configrpc button2 [link] [text]\`➜ **Allows you to add a 2nd button on the RPC**
\`${prefix}configrpc party <17/17>\`➜ **Allows you to put a number of players in the RPC**`))
          
      }
      
      // image pour config son RPC genre name / details / state / largeimage
      else if (args[0] === "exemple") return message.edit(`https://i.imgur.com/gFjNj6O.png`)
      
      else if (args[0] === "party"){
        if (!args[1]){
          db.rpcminparty = 0
          db.rpcmaxparty = 0
          db.rpctime = null
          savedb(client, db)
          message.edit(await language(client, "La party du RPC a été supprimée", "The party of the RPC has been deleted"))
          rpx()
        }
        else{
          if (!args[1].includes("/")) return message.edit(await language(client, `Veuillez utiliser la commande de cette manière: \`${prefix}configrpc party 3/5\``, `Please use the command this way: \`${prefix}configrpc party 3/5\``))
          if (isNaN(parseInt(args[1].split("/")[0].split(" ")[2]))) return message.edit("Veuillez mettre un chiffre avant le /")
          if (isNaN(parseInt(args[1].split("/")[1]))) return message.edit("Veuillez mettre un chiffre après le /")
          db.rpcminparty = parseInt(args[1].split("/")[1])
          db.rpcmaxparty = parseInt(args[1].split("/")[2])
          savedb(client, db)
          message.edit(await language(client, "La party du RPC a été modifiée", "The party of the RPC has been edited"))
          rpx()
        }
      }

      else if (args[0] === "name"){
        if (!args[1]){
          db.rpctitle = ""
          savedb(client, db)
          message.edit(await language(client, "Le nom du RPC a été supprimé", "The name of the RPC has been deleted"))
          rpx()
        }
        else{
        db.rpctitle = args.slice(1).join(' ')
        savedb(client, db)
        message.edit(await language(client, "Le nom du RPC a été modifié", "The name of the RPC has been edited"))
        rpx()
        }
      }

      else if (args[0] === "emoji"){
        if (!args[1]){
          db.rpcemoji = ""
          savedb(client, db)
          message.edit(await language(client, "Le nom du RPC a été supprimé", "The name of the RPC has been deleted"))
          rpx()
        }
        else{
        db.rpctitle = args.slice(1).join(' ')
        savedb(client, db)
        message.edit(await language(client, "Le nom du RPC a été modifié", "The name of the RPC has been edited"))
        rpx()
        }
      }

      else if (args[0] === "details"){
        if (!args[1]){
          db.rpcdetails = ""
          savedb(client, db)
          message.edit(await language(client, "Les details du RPC ont été supprimés", "The details of the RPC has been deleted"))
          rpx()
        }
        else{
        db.rpcdetails = args.slice(1).join(' ')
        savedb(client, db)
        message.edit(await language(client, "Les details du RPC ont été modifiés", "The details of the RPC has been edited"))
        rpx()
        }
      }

      else if (args[0] === "state"){
        if (!args[1]){
          db.rpcstate = ""
          savedb(client, db)
          message.edit(await language(client, "Le status du RPC a été supprimé", "The state of the RPC has been deleted"))
          rpx()
        }
        else{
        db.rpcstate = args.slice(1).join(' ')
        savedb(client, db)
        message.edit(await language(client, "Le status du RPC a été modifié", "The state of the RPC has been edited"))
        rpx()
        }
      }

      else if (args[0] === "type"){
        if (!args[1] | args[1] !== "playing" && args[1] !== "watching" && args[1] !== "listening" && args[1] !== "competing" && args[1] !== "streaming")
        return message.edit(await language(client, "Veuillez choisir un type entre `playing`, `watching`, `listening`, `competing` et `streaming`", "Please choose a type between `playing`, `watching`, `listening`, `competing` et `streaming`"))

        db.rpctype = args[1].toUpperCase()
        savedb(client, db)
        message.edit(await language(client, "Le type de RPC a été modifié", "The type of the RPC has been edited"))
        rpx()
      }

      else if (args[0] === "largeimage"){
        if (!args[1]){
          db.rpclargeimage = ""
          db.rpclargeimagetext = ""
          savedb(client, db)
          message.edit(await language(client, "La grande image a été supprimé", "The large image has been deleted"))
          return rpx()
        }
        args[1] = args[1]
        .replace('https://cdn.discordapp.com/', 'mp:')
        .replace('http://cdn.discordapp.com/', 'mp:')
        .replace('https://media.discordapp.net/', 'mp:')
        .replace('http://media.discordapp.net/', 'mp:')
        if (!args[1].startsWith('mp:')) return message.edit(await language(client, "Veuillez me donner un lien discord comme ceci : ```diff\n- https://cdn.discordapp.com/attachments/820557032016969751/991172011483218010/unknown.png\n\n- https://media.discordapp.net/attachments/820557032016969751/991172011483218010/unknown.png\n\n+ mp:attachments/820557032016969751/991172011483218010/unknown.png```", "Please give me a discord link like that: ```diff\n- https://cdn.discordapp.com/attachments/820557032016969751/991172011483218010/unknown.png\n\n- https://media.discordapp.net/attachments/820557032016969751/991172011483218010/unknown.png\n\n+ mp:attachments/820557032016969751/991172011483218010/unknown.png```"))

        db.rpclargeimage = args[1]
        savedb(client, db)
        if (args[2]){
          db.rpclargeimagetext = args.slice(2).join(' ')
          savedb(client, db)
          message.edit(await language(client, "La grande image et son texte a ont modifiées", "The large image and the text has been edited"))
          rpx()
        }
        else{
          message.edit(await language(client, "La grande image du RPC a été modifé", "The large image of the RPC has been edited"))
          rpx()
        }
      }

      else if (args[0] === "smallimage"){
        if (!args[1]){
          db.rpcsmallimage = ""
          db.rpcsmallimagetext = ""
          savedb(client, db)
          message.edit(await language(client, "La petite image a été supprimé", "The small image has been deleted"))
          return rpx()
        }

        args[1] = args[1]
        .replace('https://cdn.discordapp.com/', 'mp:')
        .replace('http://cdn.discordapp.com/', 'mp:')
        .replace('https://media.discordapp.net/', 'mp:')
        .replace('http://media.discordapp.net/', 'mp:');
        if (!args[1].startsWith('mp:')) return message.edit(await language(client, "Veuillez me donner un lien discord comme ceci : ```diff\n- https://cdn.discordapp.com/attachments/820557032016969751/991172011483218010/unknown.png\n\n- https://media.discordapp.net/attachments/820557032016969751/991172011483218010/unknown.png\n\n+ mp:attachments/820557032016969751/991172011483218010/unknown.png```", "Please give me a discord link like that: ```diff\n- https://cdn.discordapp.com/attachments/820557032016969751/991172011483218010/unknown.png\n\n- https://media.discordapp.net/attachments/820557032016969751/991172011483218010/unknown.png\n\n+ mp:attachments/820557032016969751/991172011483218010/unknown.png```"))

        db.rpcsmallimage = args[1]
        savedb(client, db)
        if (args[2]){
          db.rpcsmallimagetext = args.slice(2).join(' ')
          savedb(client, db)
          message.edit(await language(client, "La petite image et son texte a ont modifiées", "The small image and the text has been edited"))
          rpx()
        }
        else{
          message.edit(await language(client, "La petite image du RPC a été modifé", "The small image of the RPC has been edited"))
          rpx()
        }
      }

      else if (args[0] === "appid"){
        if (!args[1]){
          db.appid = ""
          savedb(client, db)
          message.edit(await language(client, "L'app id a été supprimé", "The app id has been deleted"))
          return rpx()
        }
          if (isNaN(args[1]))
        return message.edit(await language(client, "Veuillez me donner une application valide", "Give me a valid application"))

        db.appid = args[1]
        savedb(client, db)
        message.edit(await language(client, "L'id de l'application a été modifiée", "The id of the application has been edited"))
        rpx()
      }

      else if (args[0] === "button"){
        if (!args[1]){
          db.buttonlink1 = ""
          db.buttontext1 = ""
          savedb(client, db)
          message.edit(await language(client, "Le bouton a été supprimé", "The button has been deleted"))
          return rpx()
        }
          if (!args[1].includes("http://") & !args[1].includes("https://"))
        return message.edit(await language(client, "Veuillez me donner un lien valide", "Give me a valid link"))

        if (!args[2])
        return message.edit(await language(client, "Veuillez me donner un texte valide", "Give me a valid text"))

          db.buttonlink1 = args[1]
          db.buttontext1 = args.slice(2).join(' ')
          savedb(client, db)
          message.edit(await language(client, "Le bouton a été mis à jour", "The button has been updated"))
          return rpx()
      }

      else if (args[0] === "button2"){
        if (!args[1]){
          db.buttonlink2 = ""
          db.buttontext2 = ""
          savedb(client, db)
          message.edit(await language(client, "Le bouton a été supprimé", "The button has been deleted"))
          return rpx()
        }
          
          if (!args[1].includes("http://") & !args[1].includes("https://"))
        return message.edit(await language(client, "Veuillez me donner un lien valide", "Give me a valid link"))

        if (!args[2])
        return message.edit(await language(client, "Veuillez me donner un texte valide", "Give me a valid text"))

        db.buttonlink2 = args[1]
        db.buttontext2 = args.slice(2).join(' ')
        savedb(client, db)
        message.edit(await language(client, "Le bouton a été mis à jour", "The button has been updated"))
        rpx()
      }
      else if (args[0] === "on"){
        if (db.spotifyonoff === "on") return message.edit(await language(client, "Le status spotify est activé, je ne peux donc pas activer le rpc", "The spotify status is activated so I can't activate the rpc"))

        rpx()
        db.rpconoff = true
        savedb(client, db)
        message.edit(await language(client, "Le rpc a été activé", "The rpx has been activated"))
      }
      else if (args[0] === "off"){
        client.user.setPresence({})
        db.rpconoff = false
        savedb(client, db)
        message.edit(await language(client, "Le rpc a été désactivé", "The rpx has been disabled"))

      }
    }
    catch(e){}
  }
}