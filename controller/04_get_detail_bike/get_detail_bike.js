var express = require('express');

var router = express.Router();
module.exports = router;

var getDetailBike = require('../../repos/04_repo_get_detail_bike.js');
router.get('/:id_bike', (req, res) => {//
    var id_bike = req.params.id_bike;
    var detailBike = getDetailBike.getDetailBike(id_bike);
    Promise.all([detailBike]).then(([detailBike]) => {
        // var vm = {
            // detailBike: detailBike,
        // };
        // res.render('04_get_detail_bike'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(detailBike));
    });
});
