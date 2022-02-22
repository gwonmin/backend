const http = require('http');

http.createServer((req,res)=> {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie' : 'mycookie=1234qwe'});
    res.end('Welcome to our service...');
})
.listen(3000, ()=> {
    console.log('3000번 포트에서 웹서버가 실행됩니다..');
});