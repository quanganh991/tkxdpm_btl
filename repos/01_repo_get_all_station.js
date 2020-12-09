var db = require('../fn/db');

exports.getAllStation = () => {
    var sql = 'select * from park';
    return db.load(sql);
}
