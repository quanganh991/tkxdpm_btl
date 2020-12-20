var express = require('express');
var router = express.Router();
module.exports = router;

var getAllBike = require('../../repos/02_repo_get_all_bike.js');
router.get('/:id_station', (req, res) => {// /all_station/
    var id_station = req.params.id_station;
    var allBike = getAllBike.getAllBike(id_station);
    Promise.all([allBike]).then(([all_bikes]) => {
        var vm = {
            allBike: all_bikes
        };
        res.render('02_get_all_bike'/*.pug*/, vm);
    });
});
