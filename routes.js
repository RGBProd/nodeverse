const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index')
})
// dont ask why this, this is just a test
router.get('/403', function (req, res) {
    res.render('403')
})
router.all("/*", function(req,res){
    res.render("404")
});

module.exports = router;