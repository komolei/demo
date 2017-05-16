define(function () {
    _Exposure = (function () {
        // 'use strict';
        Exposure.prototype.bind = function () {
            var _this = this;
            // console.log('this:',this);
            // $(window).scroll(_this.check);//在这里不能使用这样的写法，会改变this。导致下面的check中的this指向window，测试出来，但是不知道为什么？
            $(window).on('scroll', function () {
                _this.check();
            })
            // console.log('this。check:',this.check);
        }

        Exposure.prototype.check = function () {
            var _this = this;
            if (_this.IsShow(this.$target)) {
                // _this.show((this));
                _this.callback(this.$target);
            }
        }

        Exposure.prototype.IsShow = function () {
            var windowHeight = $(window).height();
            var nodescroll = $(window).scrollTop();
            var nodeHeight = this.$target.outerHeight();
            var nodeOffsetTop = this.$target.offset().top;
            if (nodeOffsetTop < nodescroll + windowHeight && nodescroll < nodeOffsetTop + nodeHeight) {
                // $($node).addClass('a');
                return true;
            } else {
                return false;
            }
        }

        function Exposure($target, callback) {
            this.$target = $target;
            this.callback = callback;
            this.bind();
            this.check(); //先执行一次
        }
        return {
            init: function ($target, callback) {
                $target.each(function (index, target) {
                    new Exposure($(target), callback);
                })
            },
            komo: function () {
                console.log($('.ct img'));
            }
        }
    })()

    // function show($img) {
    //     var url = $($img).attr('data-src');
    //     $($img).attr('src', url);
    // }
    // console.log(_Exposure);
    return _Exposure;
});