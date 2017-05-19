#! /usr/bin/env node

var axios = require("axios");
// console.log(process.argv);
// // var a = {}
// var b = {}
// // var data = 'city' + process.argv.toString();
// // var data = process.argv.toString();
// // var data = process.argv[2];

// // console.log(data);
// // if (process.argv[2]) {
// //     b.params = {
// //         city: process.argv[2],
// //     }
// // }
// b.params ={
//     city: process.argv[2],
// }
axios.get('http://api.jirengu.com/weather.php', {
    params: {
        city: process.argv[2],
    }
}).then(function (response) {
    console.log('\n')
    console.log(response.data.results[0].currentCity);
    var weather=response.data.results[0].weather_data;
    console.log(weather[0].date);
    console.log(weather[0].temperature);
    console.log(weather[0].weather);
    console.log(weather[0].wind);
    console.log("以上为"+response.data.results[0].currentCity+'的天气');
    console.log('穿衣意见：')
    console.log(response.data.results[0].index[0].des);

}).catch(function (error) {
    console.log(error);
})
// axios.get('http://api.jirengu.com/weather.php', b).then(function (response) {
//     // console.log(response.data.results[0].pm25);
//     console.log(response);
//     var weather=response.data.results[0].weather_data[0]
//     console.log(weather.date)
//     // var weather = response.data.results[0].weather_data[0]
//     // console.log(weather.date)
// }).catch(function (error) {
//     console.log(error)
// })
// // // var $ = require("jquery");
// // define(['jquery'], function () {
// //     $.ajax({
// //         url: 'http://api.jirengu.com/weather.php?city=宁波',
// //         data: {

// //         },
// //         type: "get",
// //         dataType: "json",
// //         success: function (data) {
// //             console.log(data);
// //         },
// //         error: function () {
// //             console.log('gg');
// //         }

// //     })
// // })