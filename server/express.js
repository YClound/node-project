const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static(path.join(__dirname, '../app/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'})).array('image');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function(req, res) {
    console.log('主页 GET 请求');
    res.send('Hello GET');
});

//  POST 请求
app.post('/', function(req, res) {
    console.log('主页 POST 请求');
    res.send('Hello POST');
});

//  /del_user 页面响应
app.get('/del_user', function(req, res) {
    console.log('/del_user 响应 DELETE 请求');
    res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function(req, res) {
    console.log('/list_user GET 请求');
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log('/ab*cd GET 请求');
    res.send('正则匹配');
});

app.get('/process_get', function(req, res) {

    // 输出 JSON 格式
    const response = {
        'first_name': req.query.first_name,
        'last_name': req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function(req, res) {

    // 输出 JSON 格式
    var response = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

const server = app.listen(9091, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
