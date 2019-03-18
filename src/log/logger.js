const { createLogger, format, transports,config } = require('winston');
const { combine, timestamp, label, printf } = format;

const coolFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    levels: config.npm.levels,
    format: combine(
        label({ label: 'Platform !' }),
        timestamp(),
        coolFormat
      ),
    defaultMeta: { service: 'user-service' },
    transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
    ]
});

const loggerRef = ()=>{
    return logger;
}


exports.loggerRef = loggerRef;
exports.logger = logger;