var express = require('express');

var router = express.Router();
module.exports = router;

var updateStation = require('../../repos/09_repo_update_station.js');
router.post('/', (req, res) => {
    updateStation.updateStation(req.body).then(value => {
        var vm = {
            result: "true"
        };
        res.render('09_update_station', vm);
    }).catch(err => {
        var vm = {
            result: "false"
        };
        console.log("-----------------------errr = "+err.toString());
        res.render('09_update_station', vm);
    });
});
