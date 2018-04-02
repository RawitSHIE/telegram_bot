const TelegramBot = require('node-telegram-bot-api');
const token = '572017543:AAFy1s2YoJf9a6kcUryIaoCKN9jUn9ftV_k';
const bot = new TelegramBot(token, {polling: true});


const usr = 454788039;
bot.sendMessage(usr, "ซ่อม");
// setInterval(() => {bot.sendMessage(usr, "ซ่อม");}, 5000);


bot.on('message', (msg) => {เร
    const check = "check";
    if (msg.text.toString().toLowerCase().includes(check)) {
        bot.sendMessage(msg.chat.id, "check");
    } 
    
    const bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    } 
    
    const robot = "robot";
    if (msg.text.toString().toLowerCase().includes(robot)) {
        bot.sendMessage(msg.chat.id, "http://www.google.com");
    }

    const swar = "line";
    if (msg.text.includes(swar)) {
        bot.kickChatMember(msg.chat.id,  msg.from.id);
    }
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome");
    });

bot.onText(/\/keyboard/, (msg) => {
    bot.sendMessage(msg.chat.id, "Select Option", {
        "reply_markup": {
            "keyboard": [["Alert", "Call 911"], ["Ignore"]]
            }
        });
    });

bot.onText(/\/sendpic/, (msg) => {
    bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg",{caption : "Here we go ! \nThis is just a caption "} );
});
