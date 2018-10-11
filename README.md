# vodBot
Настройка телеграм бота

1.Зайти в файл connectbot.js
2.Найти телеграм токен(const TOKEN)
3.Прописать свой токен(TOKEN) бот, который дал BotFather
4.Проверить порт (Webhook) на котором будет работать ваш бот(Нахидиться в const options)
5.Зайти в файл web.js
6.Проверить порт express, который будет работать на вашем сервере(var port = normalizePort(process.env.PORT || '2500'))
7.Запускать бота с помощью файла web.js
