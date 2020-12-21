var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var updateBike = require('../../repos/12_repo_update_bike.js');
router.post('/', (req, res) => {
    updateBike.updateBike(req.body).then(value => { //req.body = park
        var vm =
            req.body.type.toString() == "ebike"
        ?
        {
            id_bike: req.body.id_bike,
            name: req.body.name,
            type: req.body.type,
            weight: req.body.weight,
            licensePlate: req.body.licensePlate,
            manuafacturingDate: req.body.manuafacturingDate,
            producer: req.body.producer,
            cost: req.body.cost,
            idPark: req.body.idPark,
            batteryPercentage: req.body.batteryPercentage,
            loadCycles: req.body.loadCycles,
            timeRemaining: req.body.timeRemaining
        }
        :
                {
                    id_bike: req.body.id_bike,
                    name: req.body.name,
                    type: req.body.type,
                    weight: req.body.weight,
                    licensePlate: req.body.licensePlate,
                    manuafacturingDate: req.body.manuafacturingDate,
                    producer: req.body.producer,
                    cost: req.body.cost,
                    idPark: req.body.idPark
                }
        ;
        // res.render('12_update_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    }).catch(err => {
        var vm = {
            result: "false"
        };
        // res.render('12_update_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(vm));
        jsonFormat.success(req, res, vm);
    });
});
