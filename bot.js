const Discord = require('discord.js');      //Importar discord.js
const { Client, GatewayIntentBits } = require('discord.js');     //Que se necesite discord.js para eso

const client = new Discord.Client({   //Intentos y cliente nuevo
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {      //Al iniciarse el cliente
    console.log(`¡Hola! Soy ${client.user.tag}, y ya estoy aquí`);     //Avisar
});

client.on('messageCreate', message => {    //Al recibir un mensaje
    if (message.author.bot) {   //Si el autor es un bot
        return;   //No hacer nada
    }
    if ((message.content) == 'ping') {    //Si el mensaje es "ping"
        message.reply ('Pong')    //Decir "Pong"
    }
});

client.login('MTA4MjczMDkzMDgzOTQ5MDU4MQ.G2ru_G.s58t8aNMa2gOCajYCpzp1ZnMGglIibhG1XQK90');    //Iniciar sesión con ese token