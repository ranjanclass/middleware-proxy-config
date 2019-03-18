const {composeProxy} = require('./compose-proxy');

const middlewareProxyConfig = (obj)=>{
	return composeProxy(obj); 
};

module.exports.middlewareProxyConfig = middlewareProxyConfig;
