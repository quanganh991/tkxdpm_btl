var db = require('../fn/db');

exports.is_there_any_slot = (id_park) => {   //kiểm tra xem trong bãi đậu xe còn chỗ trống không
    var sql = "SELECT * FROM park WHERE numberOfBikes + numberOfEBikes + numberOfTwinBikes + 1 <= numberOfEmptyDocks AND id_park = "+id_park;
    return db.load(sql);
}

exports.get_all_return_information = (id_order) => {   //lấy tất cả thông tin hoàn tiền về cho người dùng, trả về tất cả các park hợp lệ
    var sql = "SELECT * FROM order_bike NATURAL JOIN card NATURAL JOIN bike WHERE order_bike.id_order = "+id_order;
    return db.load(sql);
}
