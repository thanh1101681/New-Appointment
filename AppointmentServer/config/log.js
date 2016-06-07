var winston = require('winston');
var graylog2 = require('winston-graylog2');
var fs = require('fs');
if (!fs.existsSync('./logs')) {
    fs.mkdirSync('./logs');
}
require('events').EventEmitter;
var Mail = require('winston-mail').Mail;
var fs = require('fs');
if (!fs.existsSync('./logs')) {
    fs.mkdirSync('./logs');
}
var config = {
    levels: {
        silly: 0,
        verbose: 1,
        info: 2,
        data: 3,
        warn: 4,
        debug: 5,
        error: 6
    },
    colors: {
        silly: 'magenta',
        verbose: 'cyan',
        info: 'green',
        data: 'grey',
        warn: 'yellow',
        debug: 'blue',
        error: 'red'
    }
};
var customLogger = new winston.Logger({
    transports: [
        //log information server
        new winston.transports.Console({
            level: 'debug'
        }),
        //transports history server via day
        new winston.transports.DailyRotateFile({
            silent: false,
            colorize: true,
            timestamp: true,
            json: true,
            prettyPrint: true,
            showLevel: true,
            formatter: true,
            filename: './logs/log'
        }),
	// transport to graylog2
	new graylog2({
		name:'Graylog2',
		level:'debug',
		graylog:{
			servers:[{host:'192.168.1.2', port:12201}]			
		}
	})
    ],
    levels: config.levels,
    colors: config.colors
});

customLogger.add(Mail, {
    host: "smtp.gmail.com",
    port: 465,
    ssl: true,
    username: 'meditek.manage.system@gmail.com',
    password: 'meditek123456',
    subject: 'Debug Production Ailee Phan',
    from: 'Meditek Production <meditek.manage.system@gmail.com>',
    to: 'ThanhDev <thanh.dev.meditek@gmail.com>, Khuong PM <thekhuong@gmail.com>, MinhDevOps <minhnguyen@telehealthvietnam.com.vn>',
    level: 'error'
});
/*customLogger.on('logging', function(transport, level, msg, meta) {
    switch (transport.name) {
        case 'mail':
            var callback = function(err) {
                if (err) {
                    sails.log.error(err);
                }
            };
            var data = {
                phone: '+840939097759',
                content: 'Server error please check your mail to fix it!'
            }
            SendSMSService.Send(data, callback);
            break;
        default:
            break;
    }
});*/
var log = {};
if (process.env.NODE_ENV === 'production') {
    log['custom'] = customLogger;
} else {
    log['level'] = 'verbose';
}
module.exports.log = log;
