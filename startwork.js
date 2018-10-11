var bot = require('./connectbot');
var axios = require('./axiosconnect');

//начало выезда водителя
bot.onText(/\/work (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var id = match[1];

    axios
        .post('http://aida.market:8000/update/status/on', {
            id: id,
            status: 3
        })
        .then(response => {
            bot.sendMessage(userId, 'Вы потвердили выезд!');
        })
        .catch(error => {
            bot.sendMessage(userId, 'Произошла ошибка');
        });
});