//如何去使用别人的
//在git中使用npm install --save marked //--save 这条信息放入dependencies //为什么要有它，这条信息。
//因为让别人在使用的时候，直接引用，不需要下载那么多的信息。
//使用npm install --save-dev easytpl //这个是将下载的easytpl这个工具用来测试的，用于生产环境
//easytpl是放在devDenpendencies（dev=development）这里，用于测试。
var marked = require('marked'); //require怎么去寻找marked的呢？先是在同级搜索marked，不行，在往上找。一级一级的往上找去的。
//要是找到就加载模块。找不到就报错。
var str = marked('# hello komolei');

console.log("str", str);
module.exports = str;