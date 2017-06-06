 var Waterfull = (function() {
     var waterfull = function(ct) {
         this.ct = ct;
         var img = this.img = this.ct.find("img");
         var item = this.item = this.ct.find("item");
         var arrimg = []; //存放元素的高度
         var colsum = parseInt($('.ct').outerWidth() / $item.outerWidth())
             // console.log(colsum);
         for (var i = 0; i < colsum; i++) {
             arrimg[i] = 0;
         }
         $item.each(function() {
             var img = $(this).children().find('img');
             img.css({
                 height: $(this).height()
             });
             var min = Math.min.apply(null, arrimg);
             var minIndex = arrimg.indexOf(min);
             // console.log('min:', min, 'minIdex:', minIndex);
             $(this).css({
                 // top: $(min).outerHeight(true),//一开始想打的使这种写法，直接报错。
                 // top: $(min).top,//效果错误，是因为每一次的$(min).top的值都是以前的。突然想到一个方式，那我在下面的数组存储的时候，存储为top不就好了。试试看！//gg，//并不行。同时写法错误，就算在item的css的position：relative;也是无效的。
                 // 应该为top:$(min).css('top'),
                 // top: $(min).css('top'),
                 top: arrimg[minIndex], //这些要用在定位的元素上的。妈蛋，现在才想起来。
                 // margin: -arrimg[minIndex],
                 left: minIndex * $item.outerWidth(true),
             })
             arrimg[minIndex] += $(this).outerHeight(true); //给添加好的元素记录高度，为下次的比较而准备。
             // arrimg[minIndex] += $(this).css('top');
             // console.log(minIndex)
         })
     }
     $(window).resize(function() {
         waterfull();
     })
     return {
         init: function(ct) {
             new waterfull(ct);
         }
     }
 })()
 module.exports = Waterfull;