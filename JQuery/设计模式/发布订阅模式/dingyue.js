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

