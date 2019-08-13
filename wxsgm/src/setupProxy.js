const proxy = require('http-proxy-middleware');
module.exports = function(app){
    app.use('/juoooAPI',proxy({
        target:'https://api.juooo.com',
        changeOrigin:true,
        pathRewrite:{
            "^/juoooAPI":""
        }
    }))
    app.use('/juoooM',proxy({
        target:'https://m.juooo.com',
        changeOrigin:true,
        pathRewrite:{
            "^/juoooM":""
        }
    }))
}

