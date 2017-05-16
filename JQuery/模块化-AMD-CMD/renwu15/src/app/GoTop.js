define(function () {
    GoTop = function () {
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
        }
    }
    _GoTop = function () {
        $(window).on('scroll', GoTop);
    }
    return _GoTop;
})