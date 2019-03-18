const util = require('util');
const {loggerRef,logger} = require('../log/logger');

const proxyDefaultOptions = {
    secure: false,
    changeOrigin: true, 
    logLevel: 'debug',
    logProvider:loggerRef,
    onProxyReq: (proxyReq, req, res) => {
                    logger.log({
                        level: 'info',
                        message: util.inspect(proxyReq.socket._host)  + proxyReq.path
                    });
    },
    onError: (err,req,res)=>{
        res.end(
            `Facing below issue ${err}`
        )
    }

};


module.exports.proxyDefaultOptions = proxyDefaultOptions;