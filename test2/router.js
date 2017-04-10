app.get('/login', function (req, res) {
    var user = req.query.username;
    var pwd = req.query.password;
    // if (user == 'xiaoming' && pwd == 'abcd1234') {

    //     user = 'xiaoming';
    //     pwd = 'abcd1234';
    // }
    // else {
    //     user = 'error';
    //     pwd = 'clc';

    // }
    res.send({ user, pwd });
})