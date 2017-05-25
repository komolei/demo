$('div').on('click', function () {
    console.log("click");
})
// $('body').trogger()
$('body').on("click", function () {
    $('div').trogger('click', function () {
        console.log("GG");
    })
})

//jQuery的写法

var EventCenter = (function () {
    var event = {};

    function on(evt, handler) {
        event[evt] = event[evt] || [];
        event[evt].push({
            handler: handler,
        })
    }

    function fire(evt, args) {
        if (!event[evt]) {
            return;
        };
        for (var i = 0; i < event[evt].length; i++) {
            // event[evt].handler(args);错误
            event[evt][i].handler(args);
        }
    }
    return {
        on: on,
        fire: fire,
    }
})()