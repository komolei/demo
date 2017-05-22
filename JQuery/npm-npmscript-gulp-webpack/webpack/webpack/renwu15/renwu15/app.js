// require(['jquery', 'carousel', 'GoTop', 'fullpage', 'waterfull'], function () {
//     new _Carousel.init($('.ct'));
//     _GoTop();
//     _LoadMore.init($(".LoadMore"));
//     new Waterfull($(".waterfullbtn"));
// })
// // require(['jquery', 'carousel', 'GoTop', 'fullpage', 'waterfull'])
// require.config({
//     baseUrl: './src/lib',
//     paths: {
//         'jquery': './jquery',
//         'carousel': '../app/Carousel',
//         'GoTop': '../app/GoTop',
//         'fullpage': '../app/fullpage',
//         'waterfull': '../app/waterfull'
//     }
// })
// require(['jquery', 'carousel', 'GoTop', 'fullpage', 'waterfull'], function () {
//     new _Carousel.init($('.ct'));
//     _GoTop();
//     _LoadMore.init($(".LoadMore"));
//     new Waterfull($(".waterfullbtn"));
// })
// var jquery = require("./src/lib/jquery.js")
var _Carousel = require("./src/app/Carousel.js")
var _GoTop = require("./src/app/GoTop.js")
var waterfull = require("./src/app/waterfull.js")
var fullpage = require("./src/app/fullpage.js")
new _Carousel.init($('.ct'));
_GoTop();
_LoadMore.init($(".LoadMore"));
new Waterfull($(".waterfullbtn"));