/**
 * Created by vedorhto on 28/08/2015.
 */
var express         = require('express');
var conf            = require('./config/configEnv');
var frontendHost    = conf.get('frontend.host');
var frontendPort    = conf.get('frontend.port');
var backend         = conf.get('backend');
var favicon         = require('serve-favicon');

var url             = require('url');
var http            = require('http');
var moment          = require('moment');
var path            = require('path');
var rootPath        = path.normalize(__dirname);
var log4js          = require('log4js');
var logger          = log4js.getLogger('Web Server');

var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;
var W3CWebSocket    = require('websocket').w3cwebsocket;


// to allow https requests
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

//configure Express
var app = express();

//Setup variables

app.setupVariables = function(){
    //Set the environment variables we need
    app.ipaddress = frontendHost;
    app.port = frontendPort;
};
app.setupVariables();
logger.debug("host : "+app.ipaddress + ", port : "+ app.port);
//WebSocket
/*var client = new WebSocketClient();
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});
client.connect('ws://localhost:8080/', 'echo-protocol');*/

//redirect web_server to the client to launch index page
app.use('/', express.static(__dirname + '/client'));

/*app.all('*', function (req, res) {
    res.sendFile(__dirname+'/client/index.html') /!* <= Where my ng-view is located *!/
})*/

//Get the backend url
app.get("backendURL", function(req, res){
    logger.debug('get /backendURL/ :' + backend);
    res.send(backend);
});

//app.use(favicon(__dirname + "/client/img/favicon.ico"))

app.listen(app.port,app.ipaddress, function() {
    logger.info("[" + moment(new Date()).format("YYYY/MM/DD HH:mm:ss") + "] Node server Started on %s:%d...",app.ipaddress,app.port)
});

app.use(function(req, res, next){
    // manage specifically get requests on path '/' (for kermit haproxy)
    if ((req.method=="GET") && (req.path=="/"))
        res.status(200).sendFile(rootPath+"/pagenotfound.html");
    else
    // for any other wrong paths, return a 404 error
        res.status(404).sendFile(rootPath+"/pagenotfound.html");
});