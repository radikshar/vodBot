var bot =require('./connectbot');

bot.onText(/\/help/, async function (msg) {
    var userId = msg.from.id;
    await bot.sendMessage(userId,'Заявки будут приходить автоматически на ваш смартфон');
    await bot.sendMessage(userId,'Придет оповещение заявки. Вам только будет нажать кнопку Принять/Отклонить');
    await bot.sendMessage(userId,'Команды для работы с заявками');
   await bot.sendMessage(userId,'/work номер заказа -'+'подтверждаете, что вы выехали');
   await bot.sendMessage(userId,'/status номер заказа -'+'подтверждаете, что вы на исполнении заказа');
   await bot.sendMessage(userId,'/workend номер заказа -'+'подтверждаете, что вы выполнили заказ');
   await bot.sendMessage(userId,'/cancel номер заказа -'+'подтверждаете, что вы отменили заказ');
});
