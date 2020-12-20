var express = require('express');
var router = express.Router();
module.exports = router;

var getRentingBike = require('../../repos/17_repo_get_renting_bike_information');
router.get('/:id_card', (req, res) => {// /all_station/
    var id_card = req.params.id_card;
    var all_bike = getRentingBike.getRentingBike(id_card);
    Promise.all([all_bike]).then(([all_bike]) => {
        var vm = {
            all_bike: all_bike,
        };
        res.render('17_get_renting_bike_information', vm);
    });
});
