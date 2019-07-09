const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
//html 렌더링 설정



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//html파일을 ejs라는 파일을 통해 클라이언트의 브라우저에 뿌려주는 역할



app.use(express.urlencoded({
    extended: false
}));
 // querystring 모듈 사용



 app.use(express.static(path.join(__dirname, 'public')));
 //public 폴더로 



// 기본 페이지
 app.get('/', (req, res) => {
    res.render('first_page.html')
})
// ~~/ 로 끝나는 기본 페이지
// (/로 끝나면 first_page.html로 이동한다는 의미)
// 여기에서 두 경로로 이동가능 (회원가입페이지, 로그인페이지)



app.post('/gosignup', (req, res) => {
    res.render('signup_page.html');
})
//회원가입 버튼(gosignup)을 누르면 회원가입 페이지로 이동합니다.



app.post('/gosignin', (req, res) => {
    res.render('signin_page.html');
})
//로그인 버튼(gosignin)을 누르면 로그인 페이지로 이동합니다.



// 회원가입 페이지
app.get('/signup_page', (req, res) => {
    res.render('signup_page.html');
})
// ~~/signup_page인 회원가입 페이지



app.post('/signup', (req, res) => {
    console.log('signup 요청');
    console.log(req.body);
    res.render('first_page.html');
})
//회원가입을 완료한 후 버튼을 누르면 다시 first 페이지로 이동합니다.



// 로그인 페이지
app.get('/signin_page', (req, res) => {
    res.render('signin_page.html');
})
// ~~/signin_page인 로그인 페이지



app.post('/gomain', (req, res) => {
    console.log('signin');
    console.log(req.body);
    res.render('main_page.html');
})
//로그인 완료 버튼(gomain)을 누르면 메인 페이지로 이동합니다.





// 메인 페이지
app.get('/main_page', (req, res) => {
    res.render('main_page.html');
})
// ~~/main_page인 로그인 페이지







 app.listen(port, () => {
    console.log('server listening...' + port);
});
//끝냅니다.