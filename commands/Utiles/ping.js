module.exports = {
  name: "ping",
  description: "Get the ping of the client",
  run: async (client, message, args) => {
    try{
      message.edit(`API : \`${client.ws.ping}\` ms`)
    }
    catch(e){console.log(e)}
  }
}