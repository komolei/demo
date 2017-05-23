// var $=require("jquery")//引入jquery。

var Waterfull = function (ct) {
    this.ct = ct;
    this.addEvent();
    // this.waterfull();
}
Waterfull.prototype.addEvent = function () {
    var _this = this;
    // $(window).resize(function () {
    //     _this.add();
    // })

    // $(this.ct).click(function () {
    //     _this.add();
    // console.log(1);
    // })
    // this.ct.on('click',function(){
    //     this.add();
    // console.log("this.ct:",this.ct);
    // })
    this.ct.on('click', _this.add);

}
// Waterfull.prototype.waterfull = function () {
//     // console.log("waterfull");
//     var $img = $('.waterfullct img');
//     var $item = $('.item');
//     var arrimg = []; //存放元素的高度
//     var colsum = parseInt($('.waterfull .ct').outerWidth() / $item.outerWidth())
//     for (var i = 0; i < colsum; i++) {
//         arrimg[i] = 0;
//     }
//     $item.each(function () {
//         var img = $(this).children().find('img');
//         img.css({
//             height: $(this).height()
//         });
//         var min = Math.min.apply(null, arrimg);

//         var minIndex = arrimg.indexOf(min);
//         // console.log('min:', min, 'minIdex:', minIndex);
//         $(this).css({
//             // top: $(min).outerHeight(true),//一开始想打的使这种写法，直接报错。
//             // top: $(min).top,//效果错误，是因为每一次的$(min).top的值都是以前的。突然想到一个方式，那我在下面的数组存储的时候，存储为top不就好了。试试看！//gg，//并不行。同时写法错误，就算在item的css的position：relative;也是无效的。
//             // 应该为top:$(min).css('top'),
//             // top: $(min).css('top'),
//             top: arrimg[minIndex], //这些要用在定位的元素上的。妈蛋，现在才想起来。
//             // margin: -arrimg[minIndex],
//             left: minIndex * $item.outerWidth(true),
//         })
//         arrimg[minIndex] += $(this).outerHeight(true); //给添加好的元素记录高度，为下次的比较而准备。
//         // arrimg[minIndex] += $(this).css('top');
//         // console.log(minIndex)
//     })
// }
Waterfull.prototype.add = function () {
    // console.log('add');
    // var _this = this;
    $("#first").remove();
    $.ajax({
        url: '/imgarray',
        method: 'GET',
        data: {
            length: 4,
        },
        // datatype: JSON,
        datatype: 'json',
        success: function (data) {
            var data = data;
            var url;
            var ct = [];
            for (let i = 1; i < data.length + 1; i++) {
                ct[i] = $('<div class="item h' + i + '">' +
                    '<a href=""><img src=' + data[i - 1] + ' alt="gg"></a>' +
                    '</div>')
                // ct[i].appendTo($('#waterfullct'));
                ct[i].insertBefore($('.waterfullbtn'));

            }
            // var ct = $(
            //     '<div class="item h1">' +
            //     '<a href=""><img src=' + data[0] + ' alt=""></a>' +
            //     '</div>' +
            //     '<div class="item h2">' +
            //     '<a href=""><img src="http://img.hb.aicdn.com/01d55221e510c59fc94fc6510544bc58e60540893571c-Jez7Vw_fw658" alt=""></a> ' +
            //     '</div>' +
            //     '<div class="item h3">' +
            //     ' <a href=""><img src="http://img.hb.aicdn.com/14fad686e029a2c292885c628d6026a35f92a8dd2e096-1BMkt6_fw658" alt=""></a> ' +
            //     '</div>' +
            //     ' <div class="item h4">' +
            //     ' <a href=""><img src="http://img.hb.aicdn.com/b11142aafade2fd1e31e3ef78ef6a37fbee3c70328bd1-5GYeRN_fw658" alt=""></a> '
            // )
            // var 
            // ct.insertBefore($('.waterfullbtn'));
            $("#waterfullct").css('display', 'block');
            // ct.appendTo($('#waterfullct'));
            waterfull();
            // this.waterfull();
            // console.log(this);
            // _this.ct.waterfull();
        },
        error: function () {
            console.log('出错了')
        }
    })


}

function waterfull() {
    // console.log("waterfull");
    var $img = $('#waterfullct> img');
    var $item = $('.item');
    var arrimg = []; //存放元素的高度
    var colsum = parseInt($('#waterfullct').outerWidth() / $item.outerWidth())
    for (var i = 0; i < colsum; i++) {
        arrimg[i] = 0;
    }
    $item.each(function () {
        var img = $(this).children().find('img');
        img.css({
            height: $(this).height()
        });
        var min = Math.min.apply(null, arrimg);
        var minIndex = arrimg.indexOf(min);
        // console.log('min:', min, 'minIdex:', minIndex);
        $(this).css({
            // top: $(min).outerHeight(true),//一开始想打的使这种写法，直接报错。
            // top: $(min).top,//效果错误，是因为每一次的$(min).top的值都是以前的。突然想到一个方式，那我在下面的数组存储的时候，存储为top不就好了。试试看！//gg，//并不行。同时写法错误，就算在item的css的position：relative;也是无效的。
            // 应该为top:$(min).css('top'),
            // top: $(min).css('top'),
            top: arrimg[minIndex], //这些要用在定位的元素上的。妈蛋，现在才想起来。
            // margin: -arrimg[minIndex],
            left: minIndex * $item.outerWidth(true),
        })
        arrimg[minIndex] += $(this).outerHeight(true); //给添加好的元素记录高度，为下次的比较而准备。
        // arrimg[minIndex] += $(this).css('top');
        // console.log(minIndex)
        //   $(".waterfullbtn").css('top','$(this).outerHeight');
        $(".waterfullbtn").css({
            top: arrimg[minIndex],
            // marginTop: -20 + 'px'
        });
        $('.ct2-1').height(arrimg[minIndex] + 220);

    })
}

module.exports = Waterfull;