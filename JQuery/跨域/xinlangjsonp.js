define(function () {
    _Xinlang = (function () {
        xinlang = function () {
            var _this = this;
            $.ajax({
                // url: "http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4",
                url: "http://platform.sina.com.cn/slide/album_tech",
                type: 'get',
                // datatype: "jsoncallback",
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                data: {
                    app_key: 1271687855,
                    num: 4,
                    page: 4,
                },
                success: function (data) {
                    // console.log("data:", data);
                    _this.addEvent(data);
                }

            })
        }
        xinlang.prototype.addEvent = function (data) {
            // console.log(1);
            console.log("data:", data);
            var data = data;
            arr = data.data;
            // console.log(arr);
            for (var i = 0; i < arr.length; i++) {
                var div = $('<a href=' + arr[i].cmnt_url + ' style="text-decoration: none"><div class="xinlang    ">' +
                    '<img src=' + arr[i].img_url + '>' +
                    '<p>' + arr[i].name + '</p>' +
                    '</div></a>')
                $('.text').append(div);
            }

        }
        return {
            init: function () {
                new xinlang();
            }
        }
    })()

    return _Xinlang;
})