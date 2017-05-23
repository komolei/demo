// var People = function () {
//     function people() {
//         var name = "komo";
//         var sayName = function () {
//             console.log("name:", name);
//         }
//         // console.log("I am people");
//     }
//     return people;
// }
// var a = People.sayName()
// var b = People.sayName();
var People = (function () {
    var instance;

    function init() {

        return {

        };
    }
    return {
        create: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();
var a = People.create();
var b = People.create();
// a===b ==>true






















var Komo=(function(){
    var instance;
    function init(){
        //do something
    }
    return  {
        komo:function(){
            if (!instance){
                instance=init();
            }
            return instance
        }
    }
})()