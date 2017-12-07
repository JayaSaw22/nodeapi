var express = require('express');
var router = express.Router();
const users = require('../controller/table');
const load = require('lodash');

/* GET home page. */


router.post('/tabledata', function(req, res,err) {
    console.log('body',req.body);
    let body = req.body;
    let userCountDetails = users.getdatatable(body);
    res.header("Access-Control-Allow-Origin", "*");
    return res.json(userCountDetails);
});


module.exports = router;


