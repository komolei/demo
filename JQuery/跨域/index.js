require.config({
    baseUrl: '.',
    paths: {
        'jquery': '../jquery-3.2.1',
        'jsonp': './jsonp',
        'xinlang': './xinlangjsonp',
    }
})
require(['jquery', 'jsonp', 'xinlang'], function () { //AMD
    Jsonp();
    // xinlang();
    // new xinlang();
    new _Xinlang.init();
})
//---------------------------------------------------------分割线-------------------------------

// require.config = ({
//require({
//上面写错的方法
//---------------------------------------------------------分割线-------------------------------

// require.config({
//     baseUrl: '.',
//     paths: {
//         'jquery': '../jquery-3.2.1',
//         'jsonp': './jsonp'
//     }
// })
// require(['jquery', 'jsonp'], function (a) {
//     // new _GoTop();
//     // new komo();
//     // komo();
//     //a.sayName();//错误的写法

// })

//---------------------------------------------------------分割线-------------------------------

// seajs.use(['./jsonp.js'], function (a) {
//     a.sayName();
// })
//---------------------------------------------------------分割线-------------------------------
//正确的
// define(function (require, exports, module) {
//     var lei = require('./jsonp.js') //请求jsonp.js这个模块。
//     // lei.sayName(); //结果：clc
//     // console.log(lei);
//     // lei.sayName();

// })
//---------------------------------------------------------分割线-------------------------------