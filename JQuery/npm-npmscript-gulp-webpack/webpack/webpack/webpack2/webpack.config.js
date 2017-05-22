//webpack 第一个版本的写法 ,由于自己装的是第二个。这个写法。老是出现bug
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: './dist',
//         filename: 'app.bundle1.js'
//     }
// };
// 第二版本的写法
var path = require('path'); //还要这个。。。

const config = {
    entry: "./src/app.js", //入口文件
    output: {
        // path: '/dist',
        path: path.resolve('./dist'),
        // publicPath: '/dist',

        filename: "app.bundle1.js",
    },
};
module.exports = config;