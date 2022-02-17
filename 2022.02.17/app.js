const express = require('express');
const res = require('express/lib/response');

const app = express();

// req: resquest(요청), 사용자의 브라우저 정보, 질문(주소창), 로그인 정보
// res: response(응답), 사이트 내용 html
app.get('/', (req, res)=> {
    res.send('Hello, world');
});

app.listen(3000, ()=>{
    console.log('3000번 포트에서 웹서버를 실행중입니다...');
})