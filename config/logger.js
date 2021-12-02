const winston = require('winston');
const tsFormat = () => (new Date()).toLocaleTimeString();
const fs = require('fs');
const logDir = 'log';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new (require('winston-daily-rotate-file'))({
            filename: `${logDir}/combined.log`,
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true
        }),
        new (require('winston-daily-rotate-file'))({
            filename: `${logDir}/error.log`,
            timestamp: tsFormat,
            level: 'error',
            datePattern: 'yyyy-MM-dd',
            prepend: true
        })
    ]
});

if (process.env.NODE_ENV === 'development') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
        timestamp: tsFormat,
        colorize: true,
    }));
}

log = function (message, level) {
    level = level || 'info';
    logger.log(level, message);
};

exports.log = log;