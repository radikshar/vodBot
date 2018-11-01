process.env.NTBA_FIX_319 = 1;

const TOKEN = process.env.TELEGRAM_TOKEN || '632657525:AAELBWjlI6qv8qzrOU96RMCGIdZJONJsPqQ';
const TelegramBot = require('node-telegram-bot-api');
const options = {
    webHook: {
        port: 3000,
    }
};
// This URL must route to the port set above (i.e. 443)
const url = 'https://asterisk.svo.kz/ws/';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
bot.setWebHook(`${url}/bot${TOKEN}`, {
    certificate: options.webHook.cert,
});


// Just to ping!
bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive!');
});