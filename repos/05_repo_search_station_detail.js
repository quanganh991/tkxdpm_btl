var db = require('../fn/db');

exports.searchStationDetail = (keyword) => {
    var sql = "select * from park where stationName like '%" + keyword + "%' or stationAddress like '%" + keyword + "%'";
    return db.load(sql);
}

exports.searchStationDetailBy2Keyword = (station, address) => {
    var sql = "select * from park where stationName like '%" + station + "%' or stationAddress like '%" + address + "%'";
    return db.load(sql);
}
