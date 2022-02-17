const express = require('express');
const path = require('path');

const app = express();

const indexRoute = require('./routes/index.js');



const pickMyFood = () => {
    const food = ['돈까스', '김밥', '초밥', '샐러드', '햄버거', '피자', '파스타','삼겹살', '순댓국', '치킨', '짜장면', "짬뽕", '오므라이스'];
    let idx = Math.floor(Math.random() * food.length);
    
    return food[idx];
}


app.use('/', indexRoute)
// req: resquest(요청), 사용자의 브라우저 정보, 질문(주소창), 로그인 정보
// res: response(응답), 사이트 내용 html
// app.get('/', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/food', (req,res)=>{
    let text = pickMyFood();
    res.send(`오늘 당신에게 추천드리는 메뉴는 바로 ${text} 입니다.`)
})

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