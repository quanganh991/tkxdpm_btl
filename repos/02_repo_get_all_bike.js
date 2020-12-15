var db = require('../fn/db');

exports.getAllBike = () => {
    var sql = 'select * from bike';
    return db.load(sql);
}
