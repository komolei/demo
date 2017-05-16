// var a = document.getElementsByClassName('c')[0];
// console.log(a);
// a.addEventListener("mouseover", handler, false);
// a.addEventListener("mouseout", handler1, false);

// function handler(e) {
//     if (e.target && e.target.tagName.toLowerCase() === 'li') {
//         e.target.classList.add('active');
//     }
// }

// function handler1(e) {
//     if (e.target && e.target.tagName.toLowerCase() === 'li') {
//         e.target.classList.remove('active');
//     }
// }
// var img = document.getElementsByClassName('cc')[0];
// var button = document.getElementsByClassName('ccc')[0];
// console.log(img);
// console.log(button);
// button.addEventListener('click', lunbo, false);

// function lunbo(e) {
//     if (e.target && e.target.tagName.toLowerCase() === 'li') {
//         e.target.style.background = 'black';

//     }

// }
// //---------------------------------------------------分割------------------------------
_Carousel = (function () {
    var Carousel = function (carousel) {
        this.carousel = carousel;
        this.init();
        this.bind();
    }
    Carousel.prototype.init = function () {
        console.log(this);
        var btnnext = this.btnnext = this.carousel.find('.btn-next');
        // console.log(btnnext);  
        var btnpre = this.btnpre = this.carousel.find('.btn-pre');
        var ctimgli = this.ctimgli = this.carousel.find('.ct-img li');
        var ctimg = this.ctimg = this.carousel.find('.ct-img');
        var index = this.index = 0;
        var bullet = this.bullet = this.carousel.find('.bullet');
        var len = this.len = this.carousel.find('.ct-img li').height();
        var isLockUp = this.isLockUp = false;
        ctimg.css('top', -len);
        ctimg.append(ctimgli.first().clone());
        ctimg.prepend(ctimgli.last().clone()); //这样就可以不使用this了
    }
    Carousel.prototype.bind = function () {
        var _this = this;
        this.btnnext.click(function () {
            event.preventDefault();
            console.log('gg');
            if (_this.isLockUp) {
                return;
            }
            _this.isLockUp = true;
            _this.ctimg.animate({
                top: '-=' + _this.len,
            }, function () {
                _this.index++;
                if (_this.index == (_this.ctimgli.length - 1)) {
                    _this.index = 0;
                    _this.ctimg.css('top', -_this.len + 'px');
                }
                // setBullet.call(_this);
                _this.isLockUp = false;
            })
        })
        this.btnpre.click(function () {
            if (_this.isLockUp) return;
            event.preventDefault();
            // event.stopPropagation();
            _this.ctimg.animate({
                top: '+=' + _this.len,
            }, function () {
                _this.index--;
                if (_this.index < 0) {
                    _this.ctimg.css('top', -(_this.ctimgli.length * _this.ctimgli.height() - 150))
                    _this.index = _this.ctimgli.length - 1;
                }
                _this.isLockUp = false;
                // setBullet.bind(_this)();

            })
        })

        // function setBullet() {
        //     this.bullet.children().removeClass('active')
        //         .eq(this.index)
        //         .addClass('active');
        // }
    }
    return {
        init: function (ct) {
            ct.each(function (index, node) {
                new Carousel($(this));

            })
        }
    }

})()
var a = new _Carousel.init($('.carousel'));
// _Carouselfirst = (function () {
//     var Carousel = function (carousel) {
//         this.carousel = carousel;
//         this.init();
//         this.bind();
//     }
//     Carousel.prototype.init = function () {
//         // console.log(this);
//         var btnnext = this.btnnext = this.carousel.find('.btn-next');
//         // console.log(btnnext);  
//         var btnpre = this.btnpre = this.carousel.find('.btn-pre');
//         var ctimgli = this.ctimgli = this.carousel.find('.ct-img li');
//         var ctimg = this.ctimg = this.carousel.find('.ct-img');
//         var index = this.index = 0;
//         var bullet = this.bullet = this.carousel.find('.bullet');
//         var len = this.len = this.carousel.find('.ct-img li').width();
//         var isLockUp = this.isLockUp = false;
//         // ctimg.css('left', -len);
//         ctimg.append(ctimgli.first().clone());
//         ctimg.prepend(ctimgli.last().clone()); //这样就可以不使用this了
//     }
//     Carousel.prototype.bind = function () {
//         var _this = this;
//         this.btnnext.click()
//         setTimeout(function () {
//             // event.preventDefault();
//             console.log('gg',_this.ctimgli);
//             if (_this.isLockUp) {
//                 return;
//             }
//             _this.isLockUp = true;
//             _this.ctimg.animate({
//                 left: '-=' + _this.len,
//             }, function () {
//                 _this.index++;
//                 if (_this.index == (_this.ctimgli.length)) {
//                     _this.index = 0;
//                     _this.ctimg.css('left', -_this.len + 'px');
//                 }
//                 // setBullet.call(_this);
//                 _this.isLockUp = false;
//             })
//         },2000);
       

//         function setBullet() {
//             this.bullet.children().removeClass('active')
//                 .eq(this.index)
//                 .addClass('active');
//         }
//     }
//     return {
//         init: function (ct) {
//             ct.each(function (index, node) {
//                 new Carousel($(this));

//             })
//         }
//     }

// })()
// var b = new _Carouselfirst.init($('.container-case-img'));