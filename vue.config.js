module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",//解决build后找不到静态资源问题（代替之前的额baseUrl）
    outputDir:'dist',//build后生成的文件名
    filenameHashing:true,//默认情况下，生成的静态资源文件名包含了hash以便更好地控制缓存，设置false则不要生成hash值
    lintOnSave:false,//是否使用规范检测eslint
    productionSourceMap: false,//不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。(true就是加密压缩，不好定位哪一行)
    devServer:{
        // open:true,//启动项目后自动开启浏览器
        host:'localhost',//对应的主机
        // prot:8081,//端口号
        https:false,//是否开启协议名，如果开启会发出警告
        // 配置跨域
        proxy:{
            '/api':{ //配置跨域的名字
                target:'https://manager.51ylk.com/',
                changeOrigin:true,//是否跨域
                ws:false,//是否启用websockets
            }
        }
    }
}