   var _Dropdown = (function() {
       var Dropdown = function(div, li, i, none) {
           this.div = div;
           this.li = li;
           this.i = i;
           this.none = none;
           this.mouseover();
           this.mouseleave();
       }
       Dropdown.prototype.mouseover = function() {
           this.li = Array.prototype.slice.call(this.li)
           var _this = this;
           this.div.addEventListener("mouseover", function(e) {
               if (e.target.tagName.toLowerCase() === "li") {
                   _this.li.forEach(function(idx, element) {
                       idx.classList.remove("addbg");
                   });
                   if (e.target.className.toLowerCase() == "third") {
                       _this.i.classList.add("addi");
                       _this.none.forEach(function(element) {
                           element.classList.remove("none");
                       }, this);
                   }
                   e.target.classList.add("addbg");
               }
           })
       }

       Dropdown.prototype.mouseleave = function() {
           var _this = this;
           this.none = Array.prototype.slice.call(this.none)
           this.div.addEventListener("mouseleave", function() {
               _this.li.forEach(function(element) {
                   element.classList.remove("addbg");
               });
               _this.i.classList.remove("addi");
               _this.none.forEach(function(element) {
                   element.classList.add("none");
               }, this);
           })
       }
       return {
           init: function(div, li, i, none) {
               new Dropdown(div, li, i, none);
           }
       }

   })()

   var a = new _Dropdown.init(document.getElementsByTagName("div")[0], document.getElementsByTagName("li"), document.getElementsByTagName(
       "i")[0], document.getElementsByClassName("none"));