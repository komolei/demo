#! /usr/bin/env node

var axios = require("axios");
// console.log(process.argv);
var a = {}
var b = {}
// var data = 'city' + process.argv.toString();
// var data = process.argv.toString();
var data = process.argv;

// console.log(data);

// axios.get('http://api.jirengu.com/weather.php', {
//     params: {
//         city: data,
//     }
axios.get('http://api.jirengu.com/weather.php?city=北京').then(function (response) {
    console.log(response.data);
    console.log(response);
    // var weather = response.data.results[0].weather_data[0]
    // console.log(weather.date)
}).catch(function (error) {
    console.log(error)
})