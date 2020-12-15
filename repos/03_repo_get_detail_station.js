var db = require('../fn/db');

exports.getDetailStation = (id_station) => {
    var sql = "select * from park"// where id_park = " + id_station;
    return db.load(sql);
}
