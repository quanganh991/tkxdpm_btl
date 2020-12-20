var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var checkBikeForRenting = require('../../repos/06_repo_pay_before_rent.js');
router.post('/', (req, res) => {//
    var id_card = req.body.id_card; //truyền vào người dùng
    var id_bike = req.body.id_bike; //truyền vào xe mà người dùng muốn thuê
    var is_bike_still_in_park = checkBikeForRenting.is_bike_still_in_park(id_bike); //kiểm tra xem id_bike còn ở trong bãi không
    var is_user_renting_a_bike = checkBikeForRenting.is_user_renting_a_bike(id_card);   //kiểm tra xem id_card còn đang thuê xe nào không
    var does_id_card_have_enoght_money = checkBikeForRenting.does_id_card_have_enoght_money(id_bike, id_card);    //kiểm tra xem card có đủ tiền để thuê id_bike không

    Promise.all([is_bike_still_in_park,is_user_renting_a_bike,does_id_card_have_enoght_money]).then(([is_bike_still_in_park,is_user_renting_a_bike,does_id_card_have_enoght_money]) => {
        var vm;

        if(is_bike_still_in_park.length == 0) { //bike ko còn ở trong park
            vm = {
               result : false,
               reason : "Xe đang được thuê bởi người khác, vui lòng chọn xe khác hoặc quay lại sau"
            };
        }
        else if (is_user_renting_a_bike.length == 0){   //người dùng đang thuê xe rồi
            vm = {
                result : false,
                reason : "Bạn vui lòng trả xe trước khi thuê xe mới"
            }
        }
        else if (does_id_card_have_enoght_money.length == 0){
            vm = {
                result : false,
                reason : "Bạn không đủ tiền thuê xe, vui lòng nạp thêm tiền vào tài khoản"
            }
        }
        else {  //thỏa mãn cả 3 điều kiện
            vm = {
                result : true,
                is_bike_still_in_park : is_bike_still_in_park[0],
                is_user_renting_a_bike : is_user_renting_a_bike[0],
                does_id_card_have_enoght_money : does_id_card_have_enoght_money[0]
            }
        }
        // res.render('06_pay_before_rent'/*.pug*/, vm);
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(vm));
        jsonFormat.success(req, res, vm);
    });
});
