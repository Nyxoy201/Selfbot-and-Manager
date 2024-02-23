const fs = require("fs")

module.exports = async client => {

    fs.readdirSync("./EvenntManager").filter(f => f.endsWith("js")).forEach(async file => {

        let event = require(`../EvenntManager/${file}`)
        client.on(file.split(".js").join(""), event.bind(null, client))
        console.log(`Evènement ${file} chargé avec succès !`)
    })
}