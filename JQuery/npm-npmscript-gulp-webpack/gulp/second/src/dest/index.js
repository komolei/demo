define(function () {
    return _Carousel = function () {
        var t = function (t) {
            this.carousel = t, this.init(), this.bind()
        };
        return t.prototype.init = function () {
            this.btnnext = this.carousel.find(".btn-next"), this.btnpre = this.carousel.find(".btn-pre");
            var t = this.ctimgli = this.carousel.find(".ct-img li"),
                i = this.ctimg = this.carousel.find(".ct-img"),
                n = (this.index = 0, this.bullet = this.carousel.find(".bullet"), this.len = this.carousel.find(".ct-img li").width());
            this.isLockUp = !1;
            i.append(t.first().clone()), i.prepend(t.last().clone()), i.css("left", -n), i.width(i.children().length * n)
        }, t.prototype.bind = function () {
            function t() {
                this.bullet.children().removeClass("active").eq(this.index).addClass("active")
            }
            var i = this;
            this.btnnext.click(function () {
                event.preventDefault(), i.isLockUp || (i.isLockUp = !0, i.ctimg.animate({
                    left: "-=" + i.len
                }, function () {
                    ++i.index == i.ctimgli.length && (i.index = 0, i.ctimg.css("left", -i.len + "px")), t.call(i), i.isLockUp = !1
                }))
            }), this.btnpre.click(function () {
                i.isLockUp || (event.preventDefault(), i.ctimg.animate({
                    left: "+=" + i.len
                }, function () {
                    --i.index < 0 && (i.ctimg.css("left", -i.ctimgli.length * i.ctimgli.width()), i.index = i.ctimgli.length - 1), i.isLockUp = !1, t.bind(i)()
                }))
            })
        }, {
            init: function (i) {
                i.each(function (i, n) {
                    new t($(this))
                })
            }
        }
    }(), _Carousel
}), define(function () {  //估计出在define中，只能有一个define的？但是函数GoTop却可以运行。
    return _LoadMore = function () {
        var t = function (t) {
            this.btn = t, this.click()
        };
        return t.prototype.click = function () {
            var t = this;
            this.btn.on("click", t.bind)
        }, t.prototype.bind = function () {
            $.ajax({
                url: "/imgarray",
                method: "GET",
                data: {
                    length: 3
                },
                async: !0,
                dataType: "json",
                success: function (t) {
                    var i, n = $('<ul class="fullpage"></ul>');
                    n.insertBefore($(".LoadMore"));
                    for (var e = [], o = 0; o < t.length; o++) {
                        e[o] = t[o], i = e[o];
                        var c = $('<li><a href="#"><div class="ct2-2"> <i class="iconfont icon-nbaicon" style="font-size: 90px;"></i> <img id="addimg" src=' + i + "></div></a><p>paint</p></li>");
                        n.append(c)
                    }
                },
                error: function (t) {
                    console.log("gg")
                }
            })
        }, {
            init: function (i) {
                console.log("ct:", i), new t(i)
            }
        }
    }(), _LoadMore
}), define(function () {
    return GoTop = function () {
        if ($(window).scrollTop() > 1e3) {
            var t = $('<div class="GoTop">GoTop</div>');
            $(".ct").append(t), t.on("click", function () {
                $(window).scrollTop(0)
            })
        } else $(".GoTop").remove()
    }, _GoTop = function () {
        $(window).on("scroll", GoTop)
    }, _GoTop
}), define(function () {
    function t() {
        $("#waterfullct> img");
        for (var t = $(".item"), i = [], n = parseInt($("#waterfullct").outerWidth() / t.outerWidth()), e = 0; e < n; e++) i[e] = 0;
        t.each(function () {
            $(this).children().find("img").css({
                height: $(this).height()
            });
            var n = Math.min.apply(null, i),
                e = i.indexOf(n);
            $(this).css({
                top: i[e],
                left: e * t.outerWidth(!0)
            }), i[e] += $(this).outerHeight(!0), $(".waterfullbtn").css({
                top: i[e]
            }), $(".ct2-1").height(i[e] + 220)
        })
    }
    return Waterfull = function (t) {
        this.ct = t, this.addEvent()
    }, Waterfull.prototype.addEvent = function () {
        var t = this;
        this.ct.on("click", t.add)
    }, Waterfull.prototype.add = function () {
        $("#first").remove(), $.ajax({
            url: "/imgarray",
            method: "GET",
            data: {
                length: 4
            },
            datatype: "json",
            success: function (i) {
                for (var n = [], e = 1; e < i.length + 1; e++) n[e] = $('<div class="item h' + e + '"><a href=""><img src=' + i[e - 1] + ' alt="gg"></a></div>'), n[e].insertBefore($(".waterfullbtn"));
                $("#waterfullct").css("display", "block"), t()
            },
            error: function () {
                console.log("出错了")
            }
        })
    }, Waterfull
});