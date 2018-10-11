var axios = require('./axiosconnect');
var bot = require('./connectbot');
var router = require('./web');


var button = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Потвердить', callback_data: 'Потвердить'}, {text: 'Отменить', callback_data: 'Отменить'}],
        ]
    })
};


router.post('/admin/app', function (req, res) {
    var app = {
        userId: req.body.telegram_id,
        address: req.body.adress,
        area: req.body.area,
        id:req.body.id
    }
    bot.sendMessage(app.userId, "Aдрес:" + app.address + " Город/Загород:" + app.area+ " Номер заказа "+app.id);
    bot.sendMessage(app.userId, "Потвердите заявку", button);
    bot.on('callback_query', function (msg) {

        var data = msg.data;
        if (data === "Отменить") {
            res.status(409).send();
            bot.sendMessage(app.userId, "Вы отменили заявку");
        } else {
            res.send();
            bot.sendMessage(app.userId, "Вы приняли заявку");
        }
    });
});