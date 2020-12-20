var express = require('express');
var router = express.Router();
module.exports = router;

var getDetailStation = require('../../repos/03_repo_get_detail_station.js');
router.get('/:id_station', (req, res) => {//
    var id_station = req.params.id_station;
    var detailStation = getDetailStation.getDetailStation(id_station);
    // console.log("----------------id_station = " + id_station);
    Promise.all([detailStation]).then(([detailStation]) => {
        // var vm = {
            // detailStation: detailStation,
        // };
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(detailStation));
        // res.render('03_get_detail_station'/*.pug*/, vm);
    });
});
