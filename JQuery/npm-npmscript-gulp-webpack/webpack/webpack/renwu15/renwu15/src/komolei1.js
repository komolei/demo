/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _Carousel = (function () {
    //   (function (ct) {//这里的ct不需要的，因为下面是 _Carousel.init(ct),这里指定了ct=$('.carousel');
    var Carousel = function (carousel) {
        this.carousel = carousel;
        // var btnnext = this.btnnext = carousel.find('.btn-next');
        // var btnpre = this.btnpre = carousel.find('.btn-pre');
        // var ctimg = this.ctimgli = carousel.find('.ct-img li');
        // var ctimg = this.ctimg = carousel.find('.ct-img');
        // var index=this.index = 0;
        // var bullet=this.bullet = carousel.find('.bullet');
        // var len=this.len = carousel.find('.ct-img li').width();
        // var isLockUp=this.isLockUp = false;
        this.init();
        this.bind();
    }
    Carousel.prototype.init = function () {
        // this.carousel = $('.carousel');
        // this.btnnext = $('.btn-next');
        var btnnext = this.btnnext = this.carousel.find('.btn-next');
        var btnpre = this.btnpre = this.carousel.find('.btn-pre');
        var ctimgli = this.ctimgli = this.carousel.find('.ct-img li');
        var ctimg = this.ctimg = this.carousel.find('.ct-img');
        var index = this.index = 0;
        var bullet = this.bullet = this.carousel.find('.bullet');
        var len = this.len = this.carousel.find('.ct-img li').width();
        var isLockUp = this.isLockUp = false;

        ctimg.append(ctimgli.first().clone());
        // this.ctimg.prepend(this.ctimgli.last().clone());//这样就可以不使用this了
        ctimg.prepend(ctimgli.last().clone()); //这样就可以不使用this了
        ctimg.css('left', -len);
        ctimg.width(ctimg.children().length * len);
    }
    Carousel.prototype.bind = function () {
        var _this = this;
        this.btnnext.click(function () {
            event.preventDefault();
            if (_this.isLockUp) {
                return;
            }
            _this.isLockUp = true;
            _this.ctimg.animate({
                left: '-=' + _this.len,
            }, function () {
                _this.index++;
                // console.log(ctimgli.length);
                if (_this.index == _this.ctimgli.length) {
                    _this.index = 0;
                    _this.ctimg.css('left', -_this.len + 'px');
                }
                // setBullet();
                setBullet.call(_this);
                _this.isLockUp = false;
            })
        })
        this.btnpre.click(function () {
            if (_this.isLockUp) return;
            event.preventDefault();
            _this.ctimg.animate({
                left: '+=' + _this.len,
            }, function () {
                _this.index--;
                if (_this.index < 0) {
                    _this.ctimg.css('left', -(_this.ctimgli.length * _this.ctimgli.width()))
                    _this.index = _this.ctimgli.length - 1;
                }
                _this.isLockUp = false;
                // console.log("_this",_this);
                // setBullet();                
                setBullet.bind(_this)(); //这种方式不行。因为bind()会返回一个新的函数。要去function setBullet入手//错误的想法！！！
                //刚刚在看同学的作业的时候，发现了bind()是会返回一个新的函数，然后我们需要在调用它一次，就直接在后面加();
                //为什么apply,call()都不用再调用一次，因为这个方法本身就会直接进行调用的
                //感谢任务9班-宋军
                //在JS中，这三者都是用来改变函数的this对象的指向，第一个参数都是this要指向的对象。
                // call中传入的后续参数是一个个列举出来的，而apply传入的是一个数组；bind可以像call那样传参，还可以在调用的时候再进行传参。
                // call和apply都是对函数的直接调用，而bind返回的仍然是一个函数，因此后面还需要进行调用才可以。
                // setBullet.call(_this);
            })
        })
        //------------------------------------改用bind()--------------------------------------
        function setBullet() {
            // console.log("this:", this);
            this.bullet.children().removeClass('active')
                .eq(this.index)
                .addClass('active');
        }
        //------------------------------------改用bind()--------------------------------------

        // function setBullet() {
        //     console.log("this:", this);
        //     this.bullet.children().removeClass('active')
        //         .eq(this.index)
        //         .addClass('active');
        // }
        //------------------------------------------------------------------------------------
    }
    return {
        init: function (ct) {
            ct.each(function (index, node) { //node是普通的DOM元素

                new Carousel($(this)); //$(this)===》如果你不想要普通的DOM元素，而想获得的是jQuery对象的话，使用$(this)函数。Jquer的文档查来的。


            })
        }
    }

})()

module.exports = _Carousel;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _LoadMore = (function () {
    var LoadMore = function (btn) {
        this.btn = btn;
        this.click();
        // this.bind();
    }
    LoadMore.prototype.click = function () {
        var _this = this;
        // this.btn.onclick=_this.bind;
        // console.log(this);
        // this.btn.preventDefault();
        // $(this.btn).on('click', _this.bind);
        // this.btn.on('click', function () {
        //     // console.log(1);

        // });
        this.btn.on('click', _this.bind);
        // this.click();

        // this.btn.onclick=function(e){ //onclick并不起用
        // console.log(1);
        // }

    }
    LoadMore.prototype.bind = function () {
        // console.log(1);
        $.ajax({
            url: '/imgarray',
            method: 'GET',
            data: {
                length: 3,

            },
            async: true,
            dataType: 'json',
            // beforeSend:function(){

            // },
            //--------------没有实现等待图片缓加载的效果的demo----------------------------
            // complete: function (data) {
            //     console.log('success', data);
            //     // var url = JSON.parse(data.responseText);
            //     var url = data.responseJSON;
            //     var img = $('.addimg');
            //     console.log(img);
            //     // for (let i = 0; i < data.responseText.length; i++) {
            //     //     img.attr('src', data[i]);
            //     // }
            //     img.each(function (idx, element) {
            //         // img[idx] = url[idx];
            //         img.eq(idx).attr({
            //             src: url[idx],
            //         })
            //     })
            // }, //还是没有实现等待图片缓加载的效果 //还出现了bug，下面的加载图片一样。
            // success: function (data) {
            //     var data = data;
            //     // console.log( $('.LoadMore'));

            //     var url;
            //     var ul = $('<ul class="fullpage"></ul>')
            //     ul.insertBefore($('.LoadMore'));
            //     var arr = [];
            //     for (let i = 0; i < data.length; i++) {
            //         arr[i] = data[i];
            //         url = arr[i];
            //         var li = $('<li><a href="#"><div class="ct2-2"> <i class="iconfont icon-nbaicon" style="font-size: 90px;"></i> ' +
            //             '<img class="addimg" src="https://unsplash.it/250/160?random">' +
            //             '</div></a><p>paint</p></li>')
            //         // '<img id="addimg" src=' + url + '>' +
            //         //----------------------------------------教训，由于是同步插入的。所以在下面在进行查找的$(".addimg")的时候，这个部分早就进行过来。则不执行。
            //         // $(".addimg").css({
            //         //     border: "1px solid red",
            //         //     src: "https://img.alicdn.com/imgextra/i3/1021291283/TB2ns3WXN3X61Bjy0FdXXanuXXa_!!1021291283.jpg",
            //         // })
            //         // $('#adding').attr({
            //         //     alt: "Beijing Brush Seller",
            //         //     title: "photo by Kelly Clark",
            //         //     // alt: "xx",
            //         //     src: "",
            //         // });
            //         // $('.LoadMore').insertBefore(ul)
            //         ul.append(li);
            //     }
            // },
            //--------------没有实现等待图片缓加载的效果的demo----------------------------
            success: function (data) {
                var data = data;
                // console.log( $('.LoadMore'));

                var url;
                var ul = $('<ul class="fullpage"></ul>')
                ul.insertBefore($('.LoadMore'));
                var arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr[i] = data[i];
                    url = arr[i];
                    var li = $('<li><a href="#"><div class="ct2-2"> <i class="iconfont icon-nbaicon" style="font-size: 90px;"></i> ' +
                        '<img id="addimg" src=' + url + '>' +
                        '</div></a><p>paint</p></li>')
                    // '<img id="addimg" src=' + url + '>' + 
                    //  '<img class="addimg" src="https://unsplash.it/250/160?random">' +
                    //----------------------------------------教训，由于是同步插入的。所以在下面在进行查找的$(".addimg")的时候，这个部分早就进行过来。则不执行。
                    // $(".addimg").css({
                    //     border: "1px solid red",
                    //     src: "https://img.alicdn.com/imgextra/i3/1021291283/TB2ns3WXN3X61Bjy0FdXXanuXXa_!!1021291283.jpg",
                    // })
                    // $('#adding').attr({
                    //     alt: "Beijing Brush Seller",
                    //     title: "photo by Kelly Clark",
                    //     // alt: "xx",
                    //     src: "",
                    // });
                    // $('.LoadMore').insertBefore(ul)
                    ul.append(li);
                }
            },
            error: function (data) {
                console.log('gg');
            }
        })
    }
    return {
        init: function (ct) {
            console.log('ct:', ct);
            new LoadMore(ct);
        }
    };
})()
module.exports = _LoadMore;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var _Carousel = __webpack_require__(0)
var _GoTop = __webpack_require__(1)
var waterfull = __webpack_require__(3)
var fullpage = __webpack_require__(2)
new _Carousel.init($('.ct'));
_GoTop();
_LoadMore.init($(".LoadMore"));
new Waterfull($(".waterfullbtn"));

/***/ })
/******/ ]);