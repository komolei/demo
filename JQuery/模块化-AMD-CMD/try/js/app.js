require.config({
    baseUrl: 'js/lib',
    paths: { //md，之前不行是写错了：path，少了s。哎
        'app': '../app',
        // jquery: 'lib/jquery-3.2.1',
        'lib': '../lib',
        'jquery': '../lib/jquery-3.2.1'
    }
});
// requirejs(['app/GoTop', 'app/Carousel', 'app/lazyLoad'], function () {
requirejs(['jquery', 'app/GoTop', 'app/Carousel', 'app/lazyLoad'], function () {

    new _Carousel.init($('.carousel'));
    _Exposure.init($('.container img'), function ($img) {
        var url = $($img).attr('data-src');
        $($img).attr('src', url);
    });

});