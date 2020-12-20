var express = require('express');

var router = express.Router();
module.exports = router;

var addStation = require('../../repos/08_repo_add_station.js');
router.post('/', (req, res) => {
    addStation.addStation(req.body).then(value => { //req.body = park
        var vm = {
            result: "true"
        };
        // res.render('08_add_station', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    }).catch(err => {
        var vm = {
            result: "false"
        };
        // res.render('08_add_station', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    });
});
