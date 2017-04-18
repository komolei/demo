app.get('/a', function (req, res) {
    var a = ["内容1" ,"内容2","内容3","内容4","内容5","内容6","内容7","内容8","内容9","内容10","内容11","内容12","内容13","内容14","内容15","内容16"];
    var len = req.query.length;
    var index = req.query.index;  
    var ll=parseInt(len)+parseInt(index); //傻吊啊，传过来得到是对象啊，相加是按照字符串相加的方式啊。哎。真被自己气死。
    //  所以发出的数据会很大。
    // console.log('length:',len);
    // console.log('index',index);  
    // console.log('ll:',ll);
    var news = [];
   
    news = a.slice(parseInt(index), ll);   
    // news = a.slice(2, 6);   
    

    // news = a.slice((index+len), index );   
     console.log(news);

    res.send(news);   
    // index+=2;
})


// app.get('/getInfo', function(req, res) {
//   res.send({name: 'ruoyu'})  
// })
