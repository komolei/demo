app.get('/LoadMore', function (req, res) {
    var length = req.query.length;
    var index = req.query.index;    
    var a=[];    
    for(var i=0;i<length;i++){
        a.push((parseInt(index)+i));
    }
    console.log(a);
    res.send(a);
})
