// require(req,res){

// }
app.get('/imgarray', function (req, res) {
    var length = req.query.length;
    var imgArr = [];
    var max = 400;
    var width = 200;
    var height = 200;
    for (let i = 0; i < length; i++) {
        var needWidth = Math.floor(Math.random() * (max - width + 1)) + width;
        var needHeight = Math.floor(Math.random() * (max - height + 1)) + height;
        var url = "https://unsplash.it/" + needWidth + '/' + needHeight;
        imgArr[i] = url;
        // console.log('imgArr',imgArr[i]);
    }
    res.send(imgArr);
})