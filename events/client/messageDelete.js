module.exports = {
    name: "messageDelete",
    once: false,

    run: async (message, client) => {
        if (!message.author) return
        if (message.author.id === client.user.id) return

        client.snipe.set(message.channel.id, {
            content: message.content ? message.content : "Aucun message",
            author: message.author,
            image: message.attachments.size > 0 ? message.attachments.first().url : "Aucune image",
            date: Date.now()
        })
    }
}