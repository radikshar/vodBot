process.env.NTBA_FIX_319 = 1;

var TOKEN = process.env.TELEGRAM_TOKEN || '632657525:AAELBWjlI6qv8qzrOU96RMCGIdZJONJsPqQ';
var TelegramBot = require('node-telegram-bot-api');

const options = {
    webHook: {
        port: 3000,
    }
};

var url = 'https://asterisk.svo.kz/ws/';
var bot = new TelegramBot(TOKEN, options);


module.exports = bot;