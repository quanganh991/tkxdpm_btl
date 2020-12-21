var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var updateStation = require('../../repos/09_repo_update_station.js');
router.post('/', (req, res) => {
    updateStation.updateStation(req.body).then(value => {
        var vm = {

                id_park: req.body.id_park,
                stationName: req.body.stationName,
                stationAddress: req.body.stationAddress,
                numberOfBikes: req.body.numberOfBikes,
                numberOfEBikes: req.body.numberOfEBikes,
                numberOfTwinBikes: req.body.numberOfTwinBikes,
                numberOfEmptyDocks: req.body.numberOfEmptyDocks,
                areaToWalk: req.body.areaToWalk,
                timeToWalk: req.body.timeToWalk
        };
        // res.render('09_update_station', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    }).catch(err => {
        var vm = {
            result: "false"
        };
        console.log("-----------------------errr = "+err.toString());
        // res.render('09_update_station', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(vm));
        jsonFormat.success(req, res, vm);
    });
});
