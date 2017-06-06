// define(function() {
var people = {
        name: 'komo',
        sayName: function() {
            console.log('my name is:', this.name);
        }
    }
    // return people;
    // })

module.exports = people; //module.exports将模块导出去
module.exports.printName = function() {
        console.log("xixi");
    }
    // module.exports = 123;
    // (function(name,){

// })()
console.log(this);
console.log('--------------')