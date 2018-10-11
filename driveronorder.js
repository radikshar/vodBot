var bot = require('./connectbot');
var axios = require('./axiosconnect');

//водитель на исполнение заявки
bot.onText(/\/status (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var id = match[1];

    axios
        .post('http://aida.market:8000/update/status/on', {
            id: id,
            status: 4
        })
        .then(response => {
            bot.sendMessage(userId, 'Вы потвердили, что вы на исполнении заявки!');
        })
        .catch(error => {
            bot.sendMessage(userId, 'Произошла ошибка');
        });
});