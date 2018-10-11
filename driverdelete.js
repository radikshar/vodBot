var bot = require('./connectbot');
var axios = require('./axiosconnect');

//удаление водителя из базы водителей
bot.onText(/\/deletedriver/, function (msg, match) {
    var userId = msg.from.id;

    axios
        .post('http://aida.market:8000/delete/driver', {
            telegram_id: userId,
        })
        .then(response => {
            bot.sendMessage(userId, 'Вы успешно удалили себя!');
        })
        .catch(error => {
            bot.sendMessage(userId, 'Произошла ошибка');
        });
});