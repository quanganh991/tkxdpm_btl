var db = require('../fn/db');

exports.getDetailBike = (id_bike) => {
    var sql = "select * from bike where id_bike = " + id_bike;
    return db.load(sql);
}
