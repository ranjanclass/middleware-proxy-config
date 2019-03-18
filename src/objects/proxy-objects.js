const proxy = require('http-proxy-middleware');
const proxyDefaultOptions = require('../config/proxy-default-options')
const Composer = require('compose-middleware').compose;

const proxyOpts = (obj)=>{
	const proxyObjects = [];
	Object.keys(obj).forEach((key)=>{
		if(typeof obj[key] === 'string'){
			proxyObjects.push(proxy(key,{target:obj[key],...proxyDefaultOptions}));
		}
		else if (typeof obj[key] === 'object'){
			proxyObjects.push(proxy(key,{...proxyDefaultOptions,...obj[key]}));
		}	
	});
	return proxyObjects;
	
}


module.exports.proxyOptions = proxyOpts;



