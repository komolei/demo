require.config({
    // baseUrl: ".",
    // paths: {
    //     "index": "./index.js"
    // }

});
require(["../lib/jquery", "./index"], function () {
    new _Carousel.init($('.ct'));
    _GoTop();
    new _LoadMore.init($(".LoadMore"));
    // _LoadMore($(".LoadMore"));
    new Waterfull($(".waterfullbtn"));
})