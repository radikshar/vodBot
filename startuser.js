var bot = require('./connectbot');

bot.onText(/\/start/,async function (msg) {
    var userId = msg.from.id;
    await bot.sendMessage(userId,'Здравствуйте, для пользование ботом сначала зарегистрируйтесь');
    await bot.sendMessage(userId,'Используете /register Ф И О сот.телефон Марка автомобиля Модель Гос.Номер');
});
