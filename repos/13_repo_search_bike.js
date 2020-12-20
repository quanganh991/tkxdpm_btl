var db = require('../fn/db');

exports.searchBike = (keyword) => {
    var sql = "select * from bike where name like '%" + keyword + "%' or producer like '%" + keyword + "%'";
    return db.load(sql);
}
