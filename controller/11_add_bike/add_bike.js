var express = require('express');

var router = express.Router();
module.exports = router;

var addBike = require('../../repos/11_repo_add_bike.js');
router.post('/', (req, res) => {
    addBike.addBike(req.body).then(value => { //req.body = park
        var vm = {
            result: "true"
        };
        res.render('11_add_bike', vm);
    }).catch(err => {
        var vm = {
            result: "false"
        };
        res.render('11_add_bike', vm);
    });
});
