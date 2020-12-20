var express = require('express');

var router = express.Router();
module.exports = router;

var checkBikeForRenting = require('../../repos/06_repo_pay_before_rent.js');
router.post('/', (req, res) => {//
    var id_card = req.body.id_card; //truyền vào người dùng
    var id_bike = req.body.id_bike; //truyền vào xe mà người dùng muốn thuê
    var is_bike_still_in_park = checkBikeForRenting.is_bike_still_in_park(id_bike); //kiểm tra xem id_bike còn ở trong bãi không
    var is_user_renting_a_bike = checkBikeForRenting.is_user_renting_a_bike(id_card);   //kiểm tra xem id_card còn đang thuê xe nào không
    var does_id_card_have_enoght_money = checkBikeForRenting.    //kiểm tra xem card có đủ tiền để thuê id_bike không

    Promise.all([resultRegisterRenting]).then(([resultRegisterRenting]) => {
        var vm;

        if(resultRegisterRenting["is_bike_still_in_park"].length == 0 || resultRegisterRenting["is_user_renting_a_bike"].length == 0) { //ko đủ điều kiện thuê
            vm = {
               result : false,
               // is_bike_still_in_park : ,
               // is_user_renting_a_bike : ,
            };
        }
        else {
            //kiểm tra xem xe có id_bike có thể được thuê bởi người có id_card hay không ?
            resultRegisterRenting[]
            //đã kiểm tra xong, gửi kết quả sang view

            vm = {

            }
        }
        res.render('06_pay_before_rent'/*.pug*/, vm);
    });
});
