var db = require('../fn/db');

exports.is_bike_still_in_park = (id_bike) => {   //hàm kiểm tra xem xe có id_bike có thể được thuê bởi người có id_card hay không ?
    var sql = "SELECT * FROM order_bike where id_bike = " + id_bike +" and id_park IS NOT NULL";   //đảm bảo rằng id_bike đang ở trong bãi
    return db.load(sql);
}

exports.is_user_renting_a_bike = (id_card) => {   //hàm kiểm tra xem xe có id_bike có thể được thuê bởi người có id_card hay không ?
    var sql = "SELECT * FROM card where id_card = "+ id_card +" idBike IS NULL";   //đảm bảo rằng id_card đang ko thuê xe nào
    return db.load(sql);
}

exports.does_id_card_have_enoght_money = (id_bike , id_card) {

}
