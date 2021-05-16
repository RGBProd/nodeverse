//dependencies

const express = require('express');
const router = express.Router();
const auth = require("./funcs/user_auth")
const parser = require("body-parser")

//things

router.use(parser.urlencoded({ extended: false }))
router.use(parser.json())

// routes

router.get('/', function (req, res) {
    res.render('index')
})
router.get('/activity', function (req, res) {
    res.render('activity')
})
router.get('/communities/search', function(req, res){
    res.render('community-search')
})
router.get('/communities', function (req, res) {
    res.render("index")
})
router.get('/signin', function (req, res) {
    res.render("signin")
})
router.get('/signup', function (req, res) {
    res.render("signup")
})
router.post('/signup',function(req,res){
    var user = {
        username: req.body.username,
        nickname: req.body.nickname,
        password: req.body.password,
        confirmpassword: req.body.confirm
    }
    if(user.password !== user.confirmpassword ){
        res.send("Passwords don't match !")
        return
    }
    if(user.username == "" | user.nickname == "" | user.password == "" | user.confirmpassword == ""){
        res.send("Some value(s) have not been correctly filled in!")
        return
    }
    auth.createUser(user.username, user.password, user.nickname)
    res.render('signin');     
});
// just a test do not ask about it
router.get('/403', function (req, res) {
    res.render('403')
})
router.all("/*", function(req,res){
    res.render("404")
});

//export router

module.exports = router;
