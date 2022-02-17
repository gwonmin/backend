const express = require('express');
const path = require('path');

const app = express();



const indexRoute = require('./routes/index.js');

const pickRandom = (arr) => {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
const food = ['돈까스', '김밥', '초밥', '샐러드', '햄버거', '피자', '파스타','삼겹살', '순댓국', '치킨', '짜장면', "짬뽕", '오므라이스'];
const mbti = ["INTJ - 용의주도한 전략가 (Architect)",
    "​INTP - 논리적인 사색가 (Logician)",
    "ENTJ - 대담한 ​통솔자 (Commander)",
    "ENTP - ​뜨거운 논쟁을 즐기는 변론가 (Debater)",
    "INFJ - 선의의 옹호자 (Advocate)",
    "INFP - ​열정적인 중재자 (Mediator)",
    "ENFJ - 정의로운 사회운동가 (Protagonist)",
    "ENFP - ​재기발랄한 활동가 (Campaigner)",
    "ISTJ - 청렴결백한 논리주의자 (Logistician)",
    "ISFJ - 용감한 수호자 (Defender)",
    "ESTJ - ​엄격한 관리자 (Executive)",
    "ESFJ - 사교적인 외교관 (Consul)",
    "ISTP - 만능 재주꾼 (Virtuoso)",
    "ISFP - ​호기심 많은 예술가 (Adventurer)",
    "ESTP - ​모험을 즐기는 사업가 (Entrepreneur)",
    "ESFP - 자유로운 영혼의 연예인 (Entertainer)"];

const direction = ['동', '서', '남', '북'];
const reward = ['우정', '행운', '재물', '지혜', '즐거움', '놀라움'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', indexRoute)
// req: resquest(요청), 사용자의 브라우저 정보, 질문(주소창), 로그인 정보
// res: response(응답), 사이트 내용 html
// app.get('/', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/food', (req,res)=>{
    let text = pickRandom(food);
    res.send(`오늘 당신에게 추천드리는 메뉴는 바로 ${text} 입니다.`)
})

app.get('/lucky', (req,res)=>{
    let text = pickRandom(mbti);
    let randDirc = pickRandom(direction);
    let randReward = pickRandom(reward);
    res.send(`<p></p>오늘 당신이 <font color = "blue">${randDirc}쪽</font>으로 가신다면,<p></p>
        오늘 당신이 만날 귀인은 바로 <font color = "purple">${text}</font> 입니다. <p></p>
        그는 당신에게 <font color = "red">${randReward}</font> 을 선사할 것입니다. <p></p>
        그는 당신에게 소중한 인연입니다. <p></p>`)
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