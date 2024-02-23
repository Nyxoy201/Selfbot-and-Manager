module.exports = {
    name: "love",
    description: "Send a love message",
    run: async (client, message, args, db) => {
      try{
          message.edit("🖤❤️🖤")
          message.edit("❤️🖤❤️")
          message.edit("🖤❤️🖤")
          message.edit("❤️🖤❤️")
          message.edit("🖤❤️🖤")
          message.edit(`I love you ❤️ ${message.mentions.users.first() ? message.mentions.users.first() : message.author}`)
          }
          catch{}
      }
  }