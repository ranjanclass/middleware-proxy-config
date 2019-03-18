# middleware-proxy-config

Middleware proxy configuration, consumable by middleware like app.use() for HTTP,HTTPS protocol

When we plan to fire any query from front-end & backend is running in some different host or port, then
we used to get CORS. We can disable the browser security to take it forward, but that is always the poor solution.
Here comes the middleware-proxy-config, which will give us the object which can be consumed by middleware like app.use()


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Node 10


### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm i middleware-proxy-config
```

And repeat

```
const {middlewareProxyConfig} = require('middleware-proxy-config');
const app = express();

const myobj = {
     "/api":"https://example.org",
     "/foo":"https://myworld.org"
};
    
    
app.use(middlewareProxyConfig(myobj));

```

It supports all the options supported by http-proxy-middleware and extra options.

```
const {middlewareProxyConfig} = require('middleware-proxy-config');

const myobj = {
        "/api":"https://example.org",
        "/foo":{target:"https://myworld.org",logEnabled:true, changeOrigin : false}
};
    
    
app.use(middlewareProxyConfig(myobj));
```



## Authors

* **Ranjan Sarkar** - *Initial work* -


## License

No License

## Acknowledgments

* Thanks for your support.
* Will update the middleware with more features like loggings and authentications
