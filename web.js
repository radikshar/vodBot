process.env.NTBA_FIX_319 = 1;

const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const router = express.Router();
const http = require('http');
const debug = require('debug')('server:server');

var bot = require('./connectbot');
var axios = require('./axiosconnect');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(router);


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var server = http.createServer(app);


var port = normalizePort(process.env.PORT || '2500');
console.log(port);
app.set('port', port);


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


module.exports = router;


//подключение файлов для работы с ботом
require('./help');
require('./startuser');
require('./sent_driver_application');
require('./registerdriver');
require('./startwork');
require('./driveronorder');
require('./workend');
require('./cancelorder');
require('./driverdelete');
require('./sentdriverspay');
require('./sentdrivercanserorder');