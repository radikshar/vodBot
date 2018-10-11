var bot = require('./connectbot');
var axios = require('./axiosconnect');

//регистрация водителя
bot.onText(/\/register (.+) (.+) (.+) (.+) (.+) (.+) (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var surname = match[1];
    var name = match[2];
    var middlename = match[3];
    var phone = match[4];
    var carname = match[5];
    var carmodel = match[6];
    var number = match[7];

    var strname = surname+" "+name+" "+middlename;
    var strcar = carname+" "+carmodel;
    axios
        .post('http://aida.market:8000/new/driver', {
            id: userId,
            name: strname,
            phone: phone,
            car: strcar,
            car_number: number
        })
        .then(response => {
            bot.sendMessage(userId, 'Вы успешно зарегистрировались!');
            bot.sendMessage(userId, 'Для работы с ботом напишите /help');
        })
        .catch(error => {
            bot.sendMessage(userId, "Такой пользователь есть!");
        });
});