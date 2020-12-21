var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var addBike = require('../../repos/11_repo_add_bike.js');
router.post('/', (req, res) => {
    addBike.addBike(req.body).then(value => { //req.body = park
        var vm =
            req.body.typed.toString() == "ebike"
                ?
                {
                    name: req.body.name,
                    typed: req.body.typed,
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
                    name: req.body.name,
                    typed: req.body.typed,
                    weight: req.body.weight,
                    licensePlate: req.body.licensePlate,
                    manuafacturingDate: req.body.manuafacturingDate,
                    producer: req.body.producer,
                    cost: req.body.cost,
                    idPark: req.body.idPark
                }
        ;
        // res.render('11_add_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(vm));
    }).catch(err => {
        var vm = {
            result: "false"
        };
        // res.render('11_add_bike', vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(vm));
        jsonFormat.success(req, res, vm);
    });
});
