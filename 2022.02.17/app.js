const express = require('express');
const path = require('path');

const app = express();

const indexRoute = require('./routes/index.js');

app.use('/', indexRoute)

// req: resquest(요청), 사용자의 브라우저 정보, 질문(주소창), 로그인 정보
// res: response(응답), 사이트 내용 html
// app.get('/', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/webtoon', (req,res)=> {
    res.send("<h2>현재 준비중입니다.ㅜ 조금만 기다려 주세요.</h2>");
});

app.get('/profile', (req,res)=>{
    res.send("<h2>별명: 열정맨, 취미: 골프..</h2>");
});



app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send(err.message);
});

app.listen(3000, ()=>{
    console.log('3000번 포트에서 웹서버를 실행중입니다...');
});