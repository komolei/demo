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