var path = require('path');
module.exports = {
    entry: "./src/app.js",
    output: {
        // path: "C:\Users\KOMO\Desktop\demo\JQuery\npm-npmscript-gulp-webpack\webpack3\webpack\dist",
        // path: path.resolve(_dirname, "./dist"),
        path:path.resolve('./dist'), //md,居然要这样写。。
        publicPath: '/dist',
        filename: "app.bundle.js",
    }
}
// const config = {
//     entry: "./src/app.js",
//     output: {
//         filename: 'bundle.js',
//         path: '/home/proj/public/assets'
//     }
// };

// module.exports = config;