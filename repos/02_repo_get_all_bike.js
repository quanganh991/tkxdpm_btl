var db = require('../fn/db');
exports.getAllBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND typed = 'bike'";
    return db.load(sql);
}

exports.getAllBikeInAllPark = () => {
    var sql = "select * from bike WHERE typed = 'bike'";
    return db.load(sql);
}
exports.getAllEBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND typed = 'ebike'";
    return db.load(sql);
}

exports.getAllEBikeInAllPark = () => {
    var sql = "select * from bike WHERE typed = 'ebike'";
    return db.load(sql);
}
exports.getAllTwinBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND typed = 'twinbike'";
    return db.load(sql);
}

exports.getAllTwinBikeInAllPark = () => {
    var sql = "select * from bike WHERE typed = 'twinbike'";
    return db.load(sql);
}
