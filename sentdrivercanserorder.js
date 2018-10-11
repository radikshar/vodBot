var axios = require('./axiosconnect');
var bot = require('./connectbot');
var router = require('./web');

//отмена заказа
router.post('/admin/client_dec', async function (req, res) {
    var app = {
        id: req.body.id,
        userId: req.body.telegram_id
    };

    await bot.sendMessage(app.userId, 'Заказ №' + app.id + ' был отменен заказщиком');
    res.send();
});