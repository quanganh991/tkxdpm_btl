var db = require('../fn/db');

exports.getRentBikeById = (id_bike) => {
    var sql = "SELECT * FROM (SELECT * FROM order_bike NATURAL JOIN card NATURAL JOIN bike WHERE order_bike.id_bike = " +  + id_bike +") as tmp JOIN park WHERE tmp.idPark = park.id_park";
    return db.load(sql);
}
