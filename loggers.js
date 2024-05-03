const winston = require('winston');
const fs = require('fs')
const path = require('path')
const { stack } = require('sequelize/lib/utils');
const { combine, timestamp, json, prettyPrint, errors, printf, metadata } = winston.format;
const DailyRotateFile = require('winston-daily-rotate-file');
const { format } = require('date-fns');

/* create logs directory if it doesn't exits */
const logDirectory = path.resolve(__dirname, 'logs')
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory)
}

/* This is the custom log message format */
const customFormat = combine(
    printf(({ level, message }) => {
        const systemTime = new Date().toLocaleString();
        const timestamp = format(systemTime, "yyyy-MM-dd, hh:mm:ss a");
        return `${timestamp} - [${level.toUpperCase().padEnd(7)}] : ${message}`;
    })
);

const defaultFormat = combine(
    timestamp(),
    json(),
    prettyPrint()
);

// Define rotation configuration
const rotationConfig = {
    dirname: logDirectory,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '10m', // Rotate if file size exceeds 10 MB
    maxFiles: '7d' // Retain logs for 7 days
};

winston.loggers.add('user', {
    level: 'info',
    format: defaultFormat,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(logDirectory, 'user', 'user.log'),
            level: 'info'
        })
    ],
})

winston.loggers.add('player', {
    level: 'info',
    format: customFormat,
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(logDirectory, 'player', 'player.log')
        })
    ]
})

winston.loggers.add('error', {
    level: 'error',
    format: defaultFormat,
    transports: [
        // new winston.transports.Console(),
        new DailyRotateFile(Object.assign({}, rotationConfig, {
            filename: path.join(logDirectory, 'error-%DATE%.log')
        }))
    ]
});

module.exports = winston.loggers