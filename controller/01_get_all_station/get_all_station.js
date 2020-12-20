var express = require('express');
var router = express.Router();
var jsonFormat = require('../json.js');
module.exports = router;

var getAllStationRepo = require('../../repos/01_repo_get_all_station');
router.get('/', (req, res) => {// /all_station/
    var allParks = getAllStationRepo.getAllStation();
    Promise.all([allParks]).then(([all_parks]) => {
        // var vm = {
        //     allParks: all_parks,
        // };
        // res.render('01', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(all_parks));
        jsonFormat.success(req, res, all_parks);
    });
});
