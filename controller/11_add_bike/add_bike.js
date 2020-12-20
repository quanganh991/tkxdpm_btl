var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var addBike = require('../../repos/11_repo_add_bike.js');
router.post('/', (req, res) => {
    addBike.addBike(req.body).then(value => { //req.body = park
        var vm = {
            result: "true"
        };
        // res.render('11_add_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    }).catch(err => {
        var vm = {
            result: "false"
        };
        // res.render('11_add_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(vm));
        jsonFormat.success(req, res, vm);
    });
});
