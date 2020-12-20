var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var searchStationDetail = require('../../repos/05_repo_search_station_detail.js');
router.get('/:keyword', (req, res) => {//
    var keyword = req.params.keyword;
    var allStationMatch = searchStationDetail.searchStationDetail(keyword);
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
