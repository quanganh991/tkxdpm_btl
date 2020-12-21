var express = require('express');
var router = express.Router();
var jsonFormat = require('../json.js');
module.exports = router;
const querystring = require('querystring');
//

var searchStationDetailBy2Keyword = require('../../repos/05_repo_search_station_detail.js');
router.get('', (req, res) => {//
    var stationName = req.query.stationName;
    var stationAddress = req.query.stationAddress;
    console.log("--------------stationName = " + stationName.toString());
    console.log("--------------stationAddress = " + stationAddress.toString());
    var allStationMatch = searchStationDetailBy2Keyword.searchStationDetailBy2Keyword(stationName, stationAddress);
    Promise.all([allStationMatch]).then(([allStationMatch]) => {
        // var vm = {
        // allStationMatch: allStationMatch,
        // };
        // res.render('05_search_station_detail'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(allStationMatch));
        jsonFormat.success(req, res, allStationMatch);
    });
});

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
