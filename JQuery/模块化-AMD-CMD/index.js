//定义模块Model
var name = 'komo';

function sayName() {
    console.log(name);
}

function run() {
    console.log('I am running');
}

module.exports = {
    sayName: sayName,
    run: run,
}

//加载模块modal
var nameModule = require('./index.js');
nameModule.sayName();

//AMD ==>requireJS //requireJS的语法：define(id?,dependencies?,factory);
require(['carousel', 'tab', 'exposure'], function (Carousel, Tab, Exposure) {
    new Carousel();
    Tab.init();
    Exposure.init();
})
//requireJS //定义模块mymodule.js
define([dependencies], function () {
    var name = 'komo';
    function sayName() {
        console.log('my name', name);

    }
    return {
        sayName: sayName
    }
})
//加载模块
require(['./mymodule.js'], function (my) {
    my.sayName();
})
//ComonJs
var carousel = require('./carousle');
new carousel($('.ct'));

var tab = require('./tab')
tab.init();
var exposure = require('./exposure');
exposure.init($('.ct'), function () {});