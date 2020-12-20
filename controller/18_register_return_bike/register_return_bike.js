var express = require('express');

var router = express.Router();
module.exports = router;

var checkBikeForRenting = require('../../repos/18_repo_register_return_bike.js');
router.post('/', (req, res) => {//
    // var id_bike = req.body.id_bike; //truyền vào id_bike
    // var id_card = req.body.id_card; //truyền vào id_card
    var id_order = req.body.id_order; //truyền vào id_order
    var id_park = req.body.id_park; //truyền vào id_park


    //gọi 2 hàm đồng thời nhưng chỉ show hàm thứ 2 ra nếu hàm thứ 1 trả về mảng không rỗng
    var is_there_any_slot = checkBikeForRenting.is_there_any_slot(id_park); //kiểm tra xem trong bãi còn chỗ trống hay không
    var get_all_return_information = checkBikeForRenting.get_all_return_information(id_order);  //lấy thông tin hoàn tiền trả xe
    Promise.all([is_there_any_slot, get_all_return_information]).then(([is_there_any_slot, get_all_return_information]) => {
        var vm;

        if(is_there_any_slot.length == 0) { //park hết chỗ
            vm = {
                result : false,
                reason : "Bãi đậu xe hết chỗ, vui lòng chọn park khác"
            };
        }
        else {  //park còn chỗ
            vm = {
                result : true,
                is_there_any_slot: is_there_any_slot,
                get_all_return_information : get_all_return_information[0],
                reason : "Vui lòng chọn bãi đậu xe để xác nhận trả xe"
            }
        }
        res.render('18_register_return_bike'/*.pug*/, vm);
    });
});
