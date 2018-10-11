var bot = require('./connectbot');
var axios = require('./axiosconnect');

//отмена заявки
bot.onText(/\/canсel (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var id = match[1];

    axios
        .post('http://aida.market:8000/update/app/sent_dec', {
            id: id,
        })
        .then(response => {
            bot.sendMessage(userId, 'Вы отменили заявку');
        })
        .catch(error => {
            bot.sendMessage(userId, 'Произошла ошибка');
        });
});