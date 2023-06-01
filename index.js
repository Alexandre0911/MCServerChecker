const { Client, IntentsBitField, Message } = require('discord.js')
const { token } = require('./config.json')



const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})



client.on('ready', (c) => {
    console.log(`${client.user.tag} Is Now Online!`)
})



client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!')
    }

    if (interaction.commandName === 'minecraft') {
        const serverIP = interaction.options.get('server-ip')
        const serverPort = interaction.options.get('server-port')
        if (serverPort === null) { 
            let serverStatus = "https://mcapi.us/server/image?ip=" + serverIP.value + "&theme=dark"
            interaction.reply(serverStatus)
        } else {
            let serverStatus = "https://mcapi.us/server/image?ip=" + serverIP.value + "&port=" + serverPort.value + "&theme=dark"
            interaction.reply(serverStatus)
        }
    }
})




client.on('messageCreate', (message) => {
    console.log(`${message.author.tag} wrote ${message.content}`)

    if (message.author.bot) {
        return
    }
})



client.login(token)