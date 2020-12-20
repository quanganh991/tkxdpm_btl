var db = require('../fn/db');

exports.getRentingBike = (id_card) => {
    var sql = 'select * from order_bike where id_card = ' + id_card;
    return db.load(sql);
}
