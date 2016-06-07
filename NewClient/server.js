import express from 'express';
import http from 'http';

const app = express();

var compress = require('compression');
app.use(compress({
    threshold: 0, // or whatever you want the lower threshold to be
    filter: function(req, res) {
        var ct = res.get('content-type');
        return true;
    }
}));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/bower_components/favicon.ico'));

app.use('/public', express.static('public'));
app.use(express.static('bower_components'));
app.use(express.static('themes'));
app.use(express.static('theme'));
app.use(express.static('assets'));

app.set('view engine', 'ejs');

var router = express.Router();
require('./routes')(router);
app.use('/', router);

const server = http.createServer(app);
var port = 3000;
server.listen(port);
server.on('listening', () => {
    console.log('Client listening on port ' + port);
});
