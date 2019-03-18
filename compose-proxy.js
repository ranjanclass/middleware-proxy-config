const proxy = require('http-proxy-middleware');
const Composer = require('compose-middleware').compose;
const {proxyDefaultOptions} = require('./src/config/proxy-default-options');

const composeProxy = (obj) =>{

    const proxyObjects = [];

    Object.keys(obj).forEach((key)=>{
        //check if string or object
        if(typeof obj[key] === 'string'){
            proxyObjects.push(proxy(key,{target:obj[key],...proxyDefaultOptions}));
        }
        else if (typeof obj[key] === 'object'){
            proxyObjects.push(proxy(key,{...proxyDefaultOptions,...obj[key]}));
        }
    });

    return Composer(proxyObjects); 
}

module.exports.composeProxy = composeProxy;