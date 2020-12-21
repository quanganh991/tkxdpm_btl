var db = require('../fn/db');
exports.getAllBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND `type` = 'bike'";
    return db.load(sql);
}

exports.getAllBikeInAllPark = () => {
    var sql = "select * from bike WHERE `type` = 'bike'";
    return db.load(sql);
}
exports.getAllEBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND `type` = 'ebike'";
    return db.load(sql);
}

exports.getAllEBikeInAllPark = () => {
    var sql = "select * from bike WHERE `type` = 'ebike'";
    return db.load(sql);
}
exports.getAllTwinBike = (id_station) => {
    var sql = "select * from bike WHERE idPark = " + id_station.toString() + " AND `type` = 'twinbike'";
    return db.load(sql);
}

exports.getAllTwinBikeInAllPark = () => {
    var sql = "select * from bike WHERE `type` = 'twinbike'";
    return db.load(sql);
}
