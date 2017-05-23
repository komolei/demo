var People = function (name, age) {
    this.name = name;
    this.age = age;
    // this.bind();
}
People.prototype.bind = function () {
    console.log("I can fly");
}
//  var komo=new People;
var komo=function(name,age,sex){
    People.call(this,name,age,sex);
    this.sex=sex;
}
komo.prototype = new People();
var clc=new komo("clc","male",23);