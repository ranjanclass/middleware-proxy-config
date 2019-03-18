# middleware-proxy-config
Middleware proxy configuration, consumable by middleware like app.use() for HTTP,HTTPS protocol

When we plan to fire any query from front-end & backend is running in some different host or port, then
we used to get CORS. We can disable the browser security to take it forward, but that is always the poor solution.
Here comes the middleware-proxy-config, which will give us the object which can be consumed by middleware like app.use()


Example:-

We want to proxy "/api" to "https://example.org". So, prepare an object or read it from any external file or environment specific one,
just prepare the object and pass it to middlewareProxyConfig.

1)

const {middlewareProxyConfig} = require('middleware-proxy-config');

const myobj = {
        "/api":"https://example.org",
        "/foo":"https://myworld.org"
};
    
    
app.use(middlewareProxyConfig(myobj));

2) If you would like get advanced feature like logging or some different configuration, then pass it like below.


const {middlewareProxyConfig} = require('middleware-proxy-config');

const myobj = {
        "/api":"https://example.org",
        "/foo":{target:"https://myworld.org",logEnabled:true, changeOrigin : false}
};
    
    
app.use(middlewareProxyConfig(myobj));

It supports all the options supported by http-proxy-middleware and extra options.

