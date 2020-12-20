var express = require('express');

var router = express.Router();
module.exports = router;

var updateBike = require('../../repos/12_repo_update_bike.js');
router.post('/', (req, res) => {
    updateBike.updateBike(req.body).then(value => { //req.body = park
        var vm = {
            result: "true"
        };
        // res.render('12_update_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    }).catch(err => {
        var vm = {
            result: "false"
        };
        // res.render('12_update_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    });
});
