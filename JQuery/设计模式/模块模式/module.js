var komo = (function () {
    var name = "clc";

    function sayName() {
        console.log("I can sayName" + name);
    }
    return {
        name: name,
        sayName: sayName,
    }
})()
komo.name;
// module.exports = komo;
//其中加入this
// var komo = (function () {
//     var name = "clc";
//    console.log(this) //为window
//     function sayName() {
//         console.log("I can sayName" + this.name);
//     }
//     return {
//         name: this.name,
//         sayName: this.sayName,
//     }
// })()  
//这个例子console.log()出来的是komo为object，其中name:"",sayName:undefined;
//要重新给komo赋值才能调用，给komo.name赋值为"ckc"
//Object {name: "", sayName: undefined}name: ""sayName: undefined__proto__: Object
// komo.name="ckc"
// "ckc"
// komo.name
// "ckc"
// komo
// Object {name: "ckc", sayName: undefined}name: "ckc"sayName: undefined__proto__: Object