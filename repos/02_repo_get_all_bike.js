var db = require('../fn/db');
exports.getAllBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = '" + id_station.toString() + "'";
    return db.load(sql);
}
