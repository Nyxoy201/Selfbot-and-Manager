const fs = require('fs')

module.exports = {
  name: "messageCreate",
  once: false,
  run: async (message, client) => {
    if (message.author.id !== client.user.id) return

    if (!fs.existsSync(`./db/${client.user.id}.json`)) return fs.writeFileSync(`./db/${client.user.id}.json`, fs.readFileSync("./db/exemple"))
    const db = require(`../../db/${client.user.id}.json`)

    let prefix = db.prefix
    if (!prefix) prefix = "&"
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      const commandFile = client.commands.get(command)
      commandFile ? commandFile.run(client, message, args, db, prefix) : ""
      commandFile ? db.time !== 0 ? setTimeout(() => message ? message.delete().catch(() => false) : "", db.time) : "" : ""
    } catch {}
  }
}