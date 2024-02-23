const Discord = require("discord.js-selfbot-v13");
const {  language, savedb } = require("../../fonctions")
const ms = require('ms')

 module.exports = {
  name: "configspotify",
  description: "Config the rpc spotify state",
  run: async (client, message, args, db, prefix) => {
    try{

      async function rpx(){
        const r = new Discord.SpotifyRPC(client)
	        if (db.spotifylargeimage) r.setAssetsLargeImage(db.spotifylargeimage) // Image ID
	        if (db.spotifysmallimage) r.setAssetsSmallImage(db.spotifysmallimage) // Image ID
	        if (db.spotifystates) r.setState(db.spotifystates) // Author
	        if (db.spotifydetails) r.setDetails(db.spotifydetails) // Song name
	        r.setStartTimestamp(Date.now())
	        r.setEndTimestamp(Date.now() + db.spotifyendtimestamp || Date.now() + 1000 * (2 * 60 + 56)) // Song length = 2m56s
        
          client.user.setActivity(r);
      }


      if (args[0] === "list"){
        message.edit(await language(client, `✯ __**Nebula - Config Spotify**__ ✯
\`${prefix}configspotify largeimage [image_id]\`➜ **Permet de changer la grande image.**
\`${prefix}configspotify smallimage [image_id]\`➜ **Permet de changer la petite image.**
\`${prefix}configspotify state [text]\`➜ **Permet de changer le nom du son.**
\`${prefix}configspotify timestamp [number]\`➜ **Permet de changer le temps d'écoute.**
\`${prefix}configspotify album [text]\`➜ **Permet de changer l'album.**
`,
`✯ __**Nebula - Config Spotify**__ ✯
\`${prefix}configspotify largeimage [image_id]\`➜ **Allow you to change the large image.**
\`${prefix}configspotify smallimage [image_id]\`➜ **Allow you to change the small image.**
\`${prefix}configspotify state [text]\`➜ **Allow you to change the name of the song.**
\`${prefix}configspotify timestamp [number]\`➜ **Allow you to change the time of listening.**
\`${prefix}configspotify album [text]\`➜ **Allow you to change the album.**
`))
      }

      else if (args[0] === "largeimage"){
        if (!args[1]){
            db.spotifylargeimage = ""
            savedb(client, db)
            return message.edit(await language(client, "La grand image a été supprimée", "The large image has been deleted"))
        }
        if (!args[1].startsWith("spotify:"))
        return message.edit(await language(client, "Votre image spotify doit ressembler à ça : `spotify:ab67616d00001e02768629f8bc5b39b68797d1bb`", "Your spotify image should look like this: `spotify:ab67616d00001e02768629f8bc5b39b68797d1bb`"))

        db.spotifylargeimage = args[1]
        savedb(client, db)
        rpx()
        return message.edit(await language(client, "Votre grande image a été mise à jour", "Your large image has been updated"))
      }

      else if (args[0] === "smallimage"){
        if (!args[1]){
          db.spotifysmallimage = ""
          savedb(client, db)
          return message.edit(await language(client, "La petite image a été supprimée", "The small image has been deleted"))
      }
      if (!args[1].startsWith("spotify:"))
      return message.edit(await language(client, "Votre image spotify doit ressembler à ça: `spotify:ab67616d00001e02768629f8bc5b39b68797d1bb`", "Your spotify image should look like this: `spotify:ab67616d00001e02768629f8bc5b39b68797d1bb`"))

      db.spotifysmallimage = args[1]
      savedb(client, db)
      rpx()
      return message.edit(await language(client, "Votre petite image a été mise à jour", "Your small image has been updated"))
      }
      else if (args[0] === "state"){
        if (!args[1]){
          db.spotifydetails = ""
          savedb(client, db)
          return message.edit(await language(client, "Les détails ont été supprimés", "The states has been deleted"))
      }

      db.spotifydetails = args.slice(1).join(' ')
      savedb(client, db)
      rpx()
      return message.edit(await language(client, "Les détails a été mise à jour", "Your states has been updated"))
      }
      else if (args[0] === "timestamp"){
        if (!args[1]){
          db.spotify = ""
          savedb(client, db)
          return message.edit(await language(client, "Le temps a été supprimés", "The timestamp has been deleted"))
        }

        if (isNaN(ms(args[1])))
        return message.edit(await language(client, "Veuillez m'indiquer un temps valide", "Please provide a valid timestamp"))

        db.spotifyendtimestamp = ms(args[1])
        savedb(client, db)
        rpx()
        return message.edit(await language(client, "Le temps a été modifié", "The timestamp has been edited"))
      }

      else if (args[0] === 'album'){
        if (!args[1]){
          db.spotifyalbum = ""
          savedb(client, db)
          return message.edit(await language(client, "L'album a été supprimés", "The album has been deleted"))
        }

        db.spotifyalbum = args.slice(1).join(' ')
        savedb(client, db)
        rpx()
        return message.edit(await language(client, "L'album a été mise à jour", "The album has been updated"))
      }

      else if (args[0] === 'details'){
        if (!args[1]){
          db.spotifydetails = ""
          savedb(client, db)
          return message.edit(await language(client, "Less détails ont été supprimés", "The details has been deleted"))
        }

        db.spotifydetails = args.slice(1).join(' ')
        savedb(client, db)
        rpx()
        return message.edit(await language(client, "Les details ont été mise à jour", "The details has been updated"))
      }

      else if (args[0] === "on"){
      if (db.spotifyonoff === "on") return message.edit(await language(client, "Le rpc est activé, je ne peux donc pas activer le status spotify", "The rpc is activated so I can't activate the spotify statut"))
        rpx()
        db.spotifyonoff = "on"
        savedb(client, db)
        message.edit(await language(client, "Le rpc a été activé", "The rpx has been activated"))
      }
      else if (args[0] === "off"){
        client.user.setPresence({})
        db.spotifyonoff = "off"
        savedb(client, db)
        message.edit(await language(client, "Le rpc a été désactivé", "The rpx has been disabled"))

      }
        }
        catch(e){
          console.log(e)
        }
    }
 }