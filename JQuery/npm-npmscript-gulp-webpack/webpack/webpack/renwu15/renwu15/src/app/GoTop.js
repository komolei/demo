// var $=require("jquery")//引入jquery。

var GoTop = function () {
    var windowHeight = $(window).scrollTop();
    // console.log(windowHeight);
    if (windowHeight > 1000) {
        // console.log(1);
        var gotop = $('<div class="GoTop">GoTop</div>')
        $('.ct').append(gotop);
        gotop.on('click', function () {
            // $(window).offsetTop() = 0;
            // $(window).scrollTo(0, 0);
            $(window).scrollTop(0);
        })
    } else {
        $('.GoTop').remove();
        // $('.GoTop').hide();//不好，会在index.html中增加很多div class="GoTop"
    }
}
_GoTop = function () {
    $(window).on('scroll', GoTop);
}
module.exports = _GoTop;