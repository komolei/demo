define(function () {
    _LoadMore = (function () {
        var LoadMore = function (btn) {
            this.btn = btn;
            this.click();
            // this.bind();
        };
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

        };
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
                    // var data = data;//不行就要去掉这行的注释
                    // console.log( $('.LoadMore'));

                    var url;
                    var ul = $('<ul class="fullpage"></ul>');
                    ul.insertBefore($('.LoadMore'));
                    var arr = [];
                    for (var i = 0; i < data.length; i++) {
                        arr[i] = data[i];
                        url = arr[i];
                        var li = $('<li><a href="#"><div class="ct2-2"> <i class="iconfont icon-nbaicon" style="font-size: 90px;"></i> ' +
                            '<img id="addimg" src=' + url + '>' +
                            '</div></a><p>paint</p></li>');
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
            });
        };
        return {
            init: function (ct) {
                console.log('ct:', ct);
                new LoadMore(ct);
            }
        };
    })();
    return _LoadMore;
});