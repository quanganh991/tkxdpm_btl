var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var searchBike = require('../../repos/13_repo_search_bike.js');
router.get('/:keyword', (req, res) => {//
    var keyword = req.params.keyword;
    var allBikeMatch = searchBike.searchBike(keyword);
    Promise.all([allBikeMatch]).then(([allBikeMatch]) => {
        var vm = {
            allBikeMatch: allBikeMatch,
        };
        // res.render('13_search_bike'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(allBikeMatch));
        jsonFormat.success(req, res, allBikeMatch);
    });
});
