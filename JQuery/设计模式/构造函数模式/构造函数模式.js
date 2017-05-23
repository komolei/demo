var komo = function () {
    this.name = "clc";
    this.sex = "male";
    this.addEvent();
}
komo.prototype.addEvent = function () {
    console.log(this.name, this.sex);
}

new komo;