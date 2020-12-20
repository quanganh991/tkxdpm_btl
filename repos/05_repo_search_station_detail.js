var db = require('../fn/db');

exports.searchStationDetail = (keyword) => {
    var sql = "select * from park where stationName like '%" + keyword + "%' or stationAddress like '%" + keyword + "%'";
    return db.load(sql);
}
