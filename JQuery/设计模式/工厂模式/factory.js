function creatpeople(name, sex) {
    var name = name;
    var sex = sex;
    var run = function () {
        console.log("run");
    }
    return {
        name: name,
        sex: sex,
        run: run,
    }
}
var a = creatpeople("komo", "male");