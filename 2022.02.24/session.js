const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: "elice backend service",
    resave: false,
    saveUninitialized: false,
}));

app.get('/', (req,res)=> {
    if(!req.session.num) {
        req.session.num = 1;
        req.session.userName = `${req.session.num}번째 접속자`;
    } else {
        console.log(req.session)
        req.session.num += 1;
        req.session.userName = `${req.session.num}번째 접속자`;
    }
    res.send(`You visit our site ${req.session.num} times..`);
});

app.listen(3000, () => {
    console.log('web server 3000 listening...');
})