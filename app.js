const express = require('express')
const bodyParser = require('body-parser')
const data = require(__dirname+'/public/data.json')

const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

let userName = null;

// get request
app.get('/', function(req, res){
    res.render('home', {userName: userName})
})
app.get('/about', function(req, res){
    res.render('about', {data: data})
})
app.get('/contact', function(req, res){
    res.render('contact')
})
app.get('/login', function(req, res){
    res.render('login')
})
app.get('/register', function(req, res){
    res.render('register')
})

// post requests
app.post('/login', function(req, res){
    userName = req.body.username;
    res.redirect('/')
})

app.listen(process.env.PORT || 4000, function(){
    console.log("server is running");
})