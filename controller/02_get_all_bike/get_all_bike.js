var express = require('express');
var router = express.Router();
var jsonFormat = require('../json.js');
module.exports = router;

var getAllBike = require('../../repos/02_repo_get_all_bike.js');
router.get('/:id_station', (req, res) => {// /all_station/
    var id_station = req.params.id_station;
    var allBike = getAllBike.getAllBike(id_station);
    Promise.all([allBike]).then(([all_bikes]) => {
        // var vm = {
            // allBike: all_bikes
        // };
        // res.render('02_get_all_bike'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(all_bikes));
        jsonFormat.success(req, res, all_bikes);
    });
});

router.get('/', (req, res) => {// /all_station/
    var id_station = req.params.id_station;
    var allBikeInAllPark = getAllBike.getAllBikeInAllPark(id_station);
    Promise.all([allBikeInAllPark]).then(([all_bikesInAllPark]) => {
        // var vm = {
        // allBike: all_bikes
        // };
        // res.render('02_get_all_bike'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(all_bikes));
        jsonFormat.success(req, res, all_bikesInAllPark);
    });
});
