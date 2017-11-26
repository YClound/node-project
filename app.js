var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 4000);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, 'public')));


//错误页面
app.get('/error.html', function (req, res) {
    res.render('error',{
        error: '错误页面'
    });
})

//全部路由以index.ejs为模板
app.get('/**.html', function (req, res) {
    res.render('index', {
        path: 'index.ejs'
    });
})

//404页面
app.use(function (req, res) {
    res.status(404);
    res.send('error',{
        error: '404 NO FOUND'
    })
})

//500页面
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.send('error', {
        error: '500服务器错误'
    });
})

//服务器监听3000端口
app.listen(app.get('port'), function () {
    console.log('serevr start on http://localhost:' + app.get('port'));
})