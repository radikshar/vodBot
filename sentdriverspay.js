var axios = require('./axiosconnect');
var bot = require('./connectbot');
var router = require('./web');

//отправка сообщение о заработке
router.post('/admin/send_drivers', async function (req,res) {
    try {
        var app = req.body;
        console.log(app);
        for (var i = 0; i < app.length; i++) {
            await bot.sendMessage(app[i].telegram_id, 'Вы заработали '+app[i].amount+ ' тенге за день');
        }
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});