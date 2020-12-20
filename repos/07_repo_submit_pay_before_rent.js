var db = require('../fn/db');

exports.create_order_bike = (id_bike, id_card, predict_cost, time_renting) => {   //thêm vào bảng order
    var sql = "INSERT INTO order_bike (id_card, id_bike, predict_cost, time_renting) VALUES ("+id_bike+","+id_card+" ,"+predict_cost+" ,'"+time_renting+"')";
    return db.save(sql);
}

exports.increment_numberOfEmptyDocks = (id_park, numberOf_X_Bike) => {   //tăng số lượng ô trống trong park thêm 1
    var sql = "UPDATE park SET " +numberOf_X_Bike.toString()+ " = " +numberOf_X_Bike.toString()+ " + 1 WHERE id_park = " + id_park;
    return db.save(sql);
}

exports.set_idBike_in_card = (id_bike , id_card) => {   //gán cho id_card đang thuê id_bike
    var sql = "UPDATE card SET idBike = "+id_bike+" WHERE id_card = "+id_card;
    return db.save(sql);
}
exports.set_idPark_null_in_bike = (id_bike) =>{   //làm cho bike.idPark = null vì đã lấy xe ra khỏi bãi rồi
    var sql = "UPDATE bike SET idPark = NULL WHERE id_bike = " + id_bike;
    return db.save(sql);
}
