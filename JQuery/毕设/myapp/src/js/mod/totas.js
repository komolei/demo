// var $ = require("../libs/jquery-3.2.1.js")
var $ = require('jquery');
require("../../less/totas.less")
    // require("less");

function totas(msg, time) {
    this.msg = msg;
    this.time = time || 1400;
    this.createTotas();
    this.showTotas();
}
totas.prototype = {
    createTotas: function() {
        console.log("this.msg:", this.msg);
        var tpl = $("<div class='totas'>" + this.msg + "</div>")
        this.totas = tpl;
        $("body").append(this.totas);
    },
    showTotas: function() {
        var _this = this;
        this.totas.fadeIn(300, function() {
            setTimeout(function() {
                _this.totas.fadeOut(300, function() {
                    _this.totas.remove();
                });
            }, _this.time);
        })
    }
}

function Totas(msg, time) {
    return new totas(msg, time);
}

module.exports.ToTas = Totas;