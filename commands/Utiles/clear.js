module.exports = {
    name: "clear",
    description: "Clear un nombre de messages",
    run: async (client, message, args) => {
        try{
			await message.edit("> **Nebula**")
            await message.delete().catch(()=> false)

            const nombre = parseInt(args[0]) || 9999999
            let i = 0
            message.channel.messages.fetch({ force : true }).then(messages => messages.forEach(singleMessage => {
            if (singleMessage.author.id === client.user.id) {

                client.on('rateLimit', async timeout => {
                    function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}
                    await sleep(timeout * 10)
                })

                if (i === nombre) return
                singleMessage.delete().catch(err => { });
                i++
                }
            }))
        }
        catch(e){console.log(e)}
    }
}