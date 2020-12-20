var db = require('../fn/db');

exports.update_bike = (id_bike, idPark) => {   //1. cập nhật lại idPark trong bike
    var sql = "UPDATE bike SET idPark = "+idPark+" WHERE id_bike = "+id_bike;
    return db.save(sql);
}

exports.update_card = (id_card, delta_money) => {   //2. làm cho idBike trong card lại trở thành null và cập nhật tiền mỗi khi xe được đưa trở lại bẫi (delta_money đã tự tính ở phía controller)
    var sql = "UPDATE card SET idBike = NULL, money = money - "+delta_money+" WHERE id_card = " + id_card;
    return db.save(sql);
}

exports.update_order_bike = (id_order, id_park ,real_cost ,time_return) => {   //3. cập nhật lại 3 trường id_park, real_cost, time_return (giờ laptop) trong order_bike
    var sql = "UPDATE order_bike SET id_park = "+id_park+" , real_cost = "+real_cost+" , time_return = '"+time_return+"' WHERE id_order = "+id_order;
    return db.save(sql);
}

exports.update_park = (id_park, numberOf_X_Bike) =>{   //4. Giảm số lượng numberOf_X_Bikes và numberOfEmptyDocks đi 1 trong park
    var sql = "UPDATE park SET "+numberOf_X_Bike+" = "+numberOf_X_Bike+" - 1, numberOfEmptyDocks = numberOfEmptyDocks - 1 WHERE id_park = "+id_park ;
    return db.save(sql);
}
