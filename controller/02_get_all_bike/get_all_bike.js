var express = require('express');
var router = express.Router();
module.exports = router;

var getAllBike = require('../../repos/02_repo_get_all_bike.js');
router.get('/', (req, res) => {// /all_station/
    var allBike = getAllBike.getAllBike();
    Promise.all([allBike]).then(([all_bikes]) => {
        var vm = {
            allBikes: all_bikes,
        };
        res.render('02_get_all_bike'/*.pug*/, vm);
    });
});
