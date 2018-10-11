var bot = require('./connectbot');
var axios = require('./axiosconnect');

//закончить заявку
bot.onText(/\/workend (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var id = match[1];

    axios
        .post('http://aida.market:8000/update/status/finish', {
            id: id,
            status: 5
        })
        .then(response => {
            bot.sendMessage(userId, 'Вы потвердили окончания заказа!');
        })
        .catch(error => {
            bot.sendMessage(userId, 'Произошла ошибка');
        });
});