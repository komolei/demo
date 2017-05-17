define(function () {
    Jsonp = function () {

        // var script = $('<script src="http://api.jirengu.com/weather.php?city=北京"></script>')
        // $('body').append(script);
        $.ajax({
            url: "http://api.jirengu.com/weather.php?",
            dataType: 'json',
            type: 'get',
            data: 'city=宁波',

        }).done(function (data) {

            // var results = JSON.stringify(data);
            // var results = data.match(/\bresults\b/g);
            // var results = data.split(/\W/g);
            // var results=data.match("results");
            // var results = JSON.parse(data) //传过来的是字符串，要转化为JSON对象            
            var results = data;
            for (var key in results) {
                // console.log(results[key]);
                if (key == "results") {
                    // console.log(results[key][0])
                    var a = results[key][0].index;
                    var b = results[key][0].weather_data;
                    // console.dir(b);
                    b.forEach(function (e, i, arr) {
                        var ct = $('<div class="weather">' +
                            '<p>' + JSON.stringify(e.date) + '</p>' +
                            '<img src=' + JSON.stringify(e.dayPictureUrl) + '>' +
                            '<p>' + JSON.stringify(e.temperature) + '</p>' +
                            '<p>' + JSON.stringify(e.weather) + '</p>' +
                            '<p>' + JSON.stringify(e.wind) + '</p>' +
                            '</div>')
                        $('.text').prepend(ct);
                    });
                    a.forEach(function (e, i, arr) {
                        // var jsone=JSON.parse(e);
                        var ct = $('<div class="weather">' +
                            '<p>' + JSON.stringify(e.title) + '</p>' +
                            '<p>' + JSON.stringify(e.zs) + '</p>' +
                            '<p>' + JSON.stringify(e.tipt) + '</p>' +
                            '<p>' + JSON.stringify(e.des) + '</p>' +
                            '</div>')
                        $('.text').prepend(ct);
                        // $('.text').append($('<p>'+JSON.stringify(e)+'</p>'))
                    });


                }
            }
        })


    }
    return Jsonp;
})
//---------------------------------------------------------分割线-------------------------------

//  {
//     "error": 0,
//     "status": "success",
//     "date": "2017-05-17",
//     "results": [{
//         "currentCity": "宁波",
//         "pm25": "53",
//         "index": [{
//             "title": "穿衣",
//             "zs": "舒适",
//             "tipt": "穿衣指数",
//             "des": "建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。"
//         }, {
//             "title": "洗车",
//             "zs": "较适宜",
//             "tipt": "洗车指数",
//             "des": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"
//         }, {
//             "title": "感冒",
//             "zs": "少发",
//             "tipt": "感冒指数",
//             "des": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。"
//         }, {
//             "title": "运动",
//             "zs": "较适宜",
//             "tipt": "运动指数",
//             "des": "天气较好，较适宜进行各种运动，但因天气热，请适当减少运动时间，降低运动强度。"
//         }, {
//             "title": "紫外线强度",
//             "zs": "中等",
//             "tipt": "紫外线强度指数",
//             "des": "属中等强度紫外线辐射天气，外出时建议涂擦SPF高于15、PA+的防晒护肤品，戴帽子、太阳镜。"
//         }],
//         "weather_data": [{
//             "date": "周三 05月17日 (实时：25℃)",
//             "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
//             "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/qing.png",
//             "weather": "多云转晴",
//             "wind": "东南风微风",
//             "temperature": "25 ~ 14℃"
//         }, {
//             "date": "周四",
//             "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/qing.png",
//             "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
//             "weather": "晴转多云",
//             "wind": "东南风微风",
//             "temperature": "27 ~ 16℃"
//         }, {
//             "date": "周五",
//             "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
//             "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
//             "weather": "多云",
//             "wind": "东南风微风",
//             "temperature": "27 ~ 18℃"
//         }, {
//             "date": "周六",
//             "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
//             "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
//             "weather": "多云",
//             "wind": "东南风3-4级",
//             "temperature": "26 ~ 19℃"
//         }]
//     }]
// }
//---------------------------------------------------------分割线-------------------------------

// define({
//     function(){

//     }
// })
//上面写错了
//---------------------------------------------------------分割线-------------------------------
// define(function (require, exports, module) {
//     //    komo= function () {
//     //    function komo() {
//     //         console.log('this name is clc');
//     //     }
//     komo = {
//         name: 'clc',
//         sayName: function () {
//             console.log("this name is", name);
//         }
//     }
//     // console.log(1);
//     // return komo;
//     // exports.a =  {
//     //     name: 'clc',
//     //     sayName: function () {
//     //         consoel.log("this name is", name);
//     //     }
//     // };
//     exports.a=komo.sayName();
// })
//---------------------------------------------------------分割线-------------------------------

// define(function () {
//     GoTop = function () {
//         var windowHeight = $(window).scrollTop();
//         // console.log(windowHeight);
//         if (windowHeight > 1000) {
//             // console.log(1);
//             var gotop = $('<div class="GoTop">GoTop</div>')
//             $('body').append(gotop);
//             gotop.on('click', function () {
//                 // $(window).offsetTop() = 0;
//                 // $(window).scrollTo(0, 0);
//                 $(window).scrollTop(0);
//             })
//         } else {
//             $('.GoTop').remove();
//         }
//     }
//     _GoTop = function () {
//         $(window).on('scroll', GoTop);
//     }
//     return _GoTop;
// })
//---------------------------------------------------------分割线-------------------------------