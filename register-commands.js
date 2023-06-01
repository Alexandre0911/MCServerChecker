const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const { token } = require('./config.json');
const { clientId } = require('./config.json');
const { guildId } = require('./config.json');



const commands = [
    {
        name: 'ping',
        description: 'Replies With "Pong!"'
    },
    {
        name: 'minecraft',
        description: 'Checks Minecraft Server Status Given An IP And (Optionally) A Port.',
        options: [
            {
                name: 'server-ip',
                description: 'Server IP',
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: 'server-port',
                description: 'Server Port',
                type: ApplicationCommandOptionType.Number,
                required: false
            },
        ]
    },
];



const rest = new REST({ version: '10'}).setToken(token);



(async () => {
    try {
        console.log(`Registering (/) Commands...`);

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId), { body: commands }
        );

        console.log('(/) Commands Were Registered Successfully!');
    } catch (err) {
        console.log(`Error Ocurred: ${err}`);
    }
})();