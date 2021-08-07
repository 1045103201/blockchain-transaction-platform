module.exports = {
    //devServer.proxy适用于本地开发使用，
    //生成环境请用第三方代理软件，如nginx。
    devServer: {
        host: "localhost", //本机主机名
        port: 8080, //本机端口号
        https: false, //协议
        //open: true, //启动服务器时自动打开浏览器访问
        proxy: {
            '/api': {
                //目标服务器,代理访问到http://localhost:8888
                target: "http://localhost:8004/",
                ws: true,
                changOrigin: true, //开启代理
                pathRewrite: {
                    '^/api': '' //***注意：请求的时候使用这个api就可以***
                }
            }
        }
    }
}