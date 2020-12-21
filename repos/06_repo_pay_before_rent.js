var db = require('../fn/db');

exports.is_bike_still_in_park = (id_bike) => {   //đảm bảo rằng id_bike đang ở trong bãi
    var sql = "SELECT * FROM bike where id_bike = " + id_bike +" and idPark IS NOT NULL";
    return db.load(sql);
}

exports.is_user_renting_a_bike = (id_card) => {   //đảm bảo rằng id_card đang ko thuê xe nào
    var sql = "SELECT * FROM card where id_card = "+ id_card +" and idBike IS NULL";
    return db.load(sql);
}

exports.does_id_card_have_enoght_money = (id_bike , id_card) => {   //đảm bảo rằng trong tài khoản của id_card có đủ tiền để thuê
    var sql = "SELECT * FROM " +
        "(SELECT *, IF(bike.`typed` = 'ebike',400000,200000) as condizione FROM card, bike where (id_card = "+ id_card +" and id_bike = "+ id_bike +")) as tmp " +
        "WHERE tmp.condizione <= tmp.money";
    return db.load(sql);
}
