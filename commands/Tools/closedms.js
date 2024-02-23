module.exports = {
    name: "closedms",
    description: "Close all your dms",
    run: async (client, message, args) => {
        message.edit("> **Nebula**")
        message.delete().catch(() => false)
        client.channels.cache.filter((channel) => channel.type === "DM" | channel.type === "GROUP_DM").map((channel) => channel.delete().catch(() => false))
    }
}