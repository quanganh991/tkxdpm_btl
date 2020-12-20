var express = require('express');

var router = express.Router();
module.exports = router;

var submitReturningBike = require('../../repos/16_repo_pay_after_rent.js');
router.post('/', (req, res) => {
    var id_card = req.body.id_card; //truyền vào người dùng đã thuê xe (API 18)
    var id_bike = req.body.id_bike; //truyền vào người dùng đã thuê xe (API 18)
    var id_order = req.body.id_order; //truyền vào đơn hàng thuê xe
    var id_park = req.body.id_park; //truyền vào bãi mà người dùng muốn trả
    var predict_cost = req.body.predict_cost;   //giá ban đầu (đã tính ở API số 18)
    var time_renting = req.body.time_renting;
    var numberOf_X_Bike = req.body.numberOf_X_Bike; //loại xe
                        //lấy giờ hiện tại
                        var today = new Date();
                        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time_return = date+' '+time;//thời gian trả xe về bãi
                        //lấy giờ hiện tại
    var real_cost = 0;   //cập nhật lại giá trị dôi ra của đơn thuê, tính toán khá dài dòng
    var delta_money = real_cost - predict_cost;   //cập nhật lại chênh lệch số dư tài khoản, sau này phải -delta_money trong db

    //Tính số tiền thực tế mà người dùng cần phải trả
                var delta_hour = (Date.parse(time_renting) - Date.parse(time_return))/(1000*60*60); //số giờ thuê
                if (delta_hour < 12){   //nếu thuê xe dưới 12 tiếng
                    delta_money = -10000 * (24 - delta_hour) //< 0 ; thì sẽ được trả 10K mỗi tiếng trả sớm
                    real_cost = predict_cost + delta_money; //realcost sẽ thấp hơn predict_cost
                } else if (12 <= delta_hour && delta_hour < 24){    //nếu thuê từ 12 tiếng đến 24 tiếng
                    delta_money = 0; // = 0 ; thì không được hoàn tiền
                    real_cost = predict_cost;//
                } else {    //thuê quá 24 tiếng
                    delta_money = 12000 * (delta_hour - 24); // > 0 ; thì trả 8000 mỗi tiếng trễ
                    real_cost = predict_cost + delta_money; //realcost sẽ cao hơn predict_post
                }
    //Tính số tiền thực tế mà người dùng cần phải trả

    submitReturningBike.update_bike(id_bike, id_park).catch(
        err => {
            var vm = {
                result: "false, không thể update_bike"
            };
            res.render('16_pay_after_rent', vm);
        }
    )

    submitReturningBike.update_card(id_card, delta_money).catch(
        err => {
            var vm = {
                result: "false, không thể update_card"
            };
            res.render('16_pay_after_rent', vm);
        }
    )

    submitReturningBike.update_order_bike(id_order, id_park ,real_cost ,time_return).catch(
        err => {
            var vm = {
                result: "false, không thể update_order_bike"
            };
            res.render('16_pay_after_rent', vm);
        }
    )

    submitReturningBike.update_park(id_park, numberOf_X_Bike).then(value => {
        var vm = {
            result: "true"
        };
        res.render('16_pay_after_rent', vm)
    }).catch(
        err => {
            console.log("--------------------err = " +err.toString())
            var vm = {
                result: "false, không thể update_park"
            };
            res.render('16_pay_after_rent', vm);
        }
    )
});
