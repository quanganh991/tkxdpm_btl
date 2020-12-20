var express = require('express');

var router = express.Router();
module.exports = router;

var getRentBikeById = require('../../repos/15_repo_get_rent_bike_by_id.js');
router.get('/:id_bike', (req, res) => {//
    var id_bike = req.params.id_bike;
    var detailBike4Table = getRentBikeById.getRentBikeById(id_bike);
    Promise.all([detailBike4Table]).then(([detailBike4Table]) => {
        var vm = {
            detailBike4Table: detailBike4Table,
        };
        // res.render('15_get_rent_bike_by_id'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(detailBike4Table));
    });
});
