var express = require('express');
var router = express.Router();
module.exports = router;

var getAllStationRepo = require('../../repos/01_repo_get_all_station');
router.get('/', (req, res) => {// /all_station/
    var allParks = getAllStationRepo.getAllStation();
    Promise.all([allParks]).then(([all_parks]) => {
        var vm = {
            allParks: all_parks,
        };
        res.render('index', vm);
    });
});
