var express = require('express');

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
        res.render('13_search_bike'/*.pug*/, vm);
    });
});
