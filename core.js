  
const Discord = require("discord.js");
const client  = new Discord.Client();

const prefix   = "^";
const commands = require("./scripts/commandsReader")(prefix);

client.on("ready",()=>{
    console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message",(msg)=>{
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](client,msg);
    }
});

client.login("NzY3NDUwNDE5Nzg5NjkyOTI4.X4yF5g.1cssFgp5iPBTJw03fdxwKgQXdd0");
