const fs = require('fs')

module.exports = {
    name: "ready",
    once: false,
    run: async (message, client) => {
        if (!fs.existsSync(`./db/${client.user.id}.json`)) fs.writeFileSync(`./db/${client.user.id}.json`, fs.readFileSync("./db/exemple.json"))
        
        const init = require('../../db/exemple.json')
        const db = require(`../../db/${client.user.id}.json`)

        if (Object.keys(init) > Object.keys(db)){
            Object.keys(init).forEach((key) => !Object.keys(db).includes(key)? db[key] = init[key] || "" : "")
            fs.writeFile(`./db/${client.user.id}.json`, JSON.stringify(db, null, 2), err => err ? console.log(err) : "")
        }
    }
}