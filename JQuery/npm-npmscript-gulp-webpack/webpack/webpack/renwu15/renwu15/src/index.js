// ({
//     baseUrl: './lib/',
//     paths: {
//         'jquery': './lib/jquery',
//         'carousel': './app/Carousel'
//     }
// });
require.config({
    baseUrl: './src/lib',
    paths: {
        'jquery': './jquery',
        'carousel': '../app/Carousel',
        'GoTop': '../app/GoTop',
        'fullpage': '../app/fullpage',
        'waterfull': '../app/waterfull'
    }
})
require(['jquery', 'carousel', 'GoTop', 'fullpage', 'waterfull'], function () {
    new _Carousel.init($('.ct'));
    _GoTop();
    _LoadMore.init($(".LoadMore"));
    new Waterfull($(".waterfullbtn"));
})