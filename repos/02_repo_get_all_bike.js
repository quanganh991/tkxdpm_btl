var db = require('../fn/db');
exports.getAllBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND typed = 'bike'";
    return db.load(sql);
}

exports.getAllBikeInAllPark = () => {
    var sql = "select * from bike AND typed = 'bike'";
    return db.load(sql);
}
