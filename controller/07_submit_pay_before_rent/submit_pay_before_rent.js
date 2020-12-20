var express = require('express');
var jsonFormat = require('../json.js');
var router = express.Router();
module.exports = router;

var submitRentingBike = require('../../repos/07_repo_submit_pay_before_rent.js');
router.post('/', (req, res) => {//
    var id_card = req.body.id_card; //truyền vào người dùng
    var id_bike = req.body.id_bike; //truyền vào xe mà người dùng muốn thuê
    var predict_cost = req.body.predict_cost;   //giá ban đầu (đã tính ở API số 6
                //lấy giờ hiện tại
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time_renting = date+' '+time;//thời gian bắt đầu thuê
                //lấy giờ hiện tại
    var id_park = req.body.id_park;
    var numberOf_X_Bike = req.body.numberOf_X_Bike;
    // var create_order_bike = submitRentingBike.create_order_bike(id_bike, id_card, predict_cost, time_renting); //thêm vào bảng order
    // var increment_numberOfEmptyDocks = submitRentingBike.increment_numberOfEmptyDocks(id_park, numberOf_X_Bike);   //tăng số lượng ô trống trong park thêm 1
    // var set_idBike_in_card = submitRentingBike.set_idBike_in_card(id_bike , id_card);    //gán cho id_card đang thuê id_bike
    // var set_idPark_null_in_bike = submitRentingBike.set_idPark_null_in_bike(id_bike);    //làm cho bike.idPark = null vì đã lấy xe ra khỏi bãi rồi

    submitRentingBike.increment_numberOfEmptyDocks(id_park, numberOf_X_Bike).catch(
        err => {
        var vm = {
                result: "false, không thể tăng số numberOfEmptyDocks"
            };
            // res.render('09_update_station', vm);
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            // res.end(JSON.stringify(vm));
            jsonFormat.success(req, res, vm);
        }
    )

    submitRentingBike.set_idBike_in_card(id_bike , id_card).catch(
        err => {
            var vm = {
                result: "false, không thể set_idBike_in_card"
            };
            // res.render('09_update_station', vm);
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            // res.end(JSON.stringify(vm));
            jsonFormat.success(req, res, vm);
        }
    )

    submitRentingBike.set_idPark_null_in_bike(id_bike).catch(
        err => {
            var vm = {
                result: "false, không thể set_idPark_null_in_bike"
            };
            // res.render('09_update_station', vm);
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            // res.end(JSON.stringify(vm));
            jsonFormat.success(req, res, vm);
        }
    )

    submitRentingBike.create_order_bike(id_bike, id_card, predict_cost, time_renting).then(value => {
        var vm = {
            result: "true"
        };
        // res.render('09_update_station', vm)
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // res.end(JSON.stringify(vm));
        jsonFormat.success(req, res, vm);
    }).catch(
        err => {
            console.log("--------------------err = " +err.toString())
            var vm = {
                result: "false, không thể tạo order"
            };
            // res.render('09_update_station', vm);
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            // res.end(JSON.stringify(vm));
            jsonFormat.success(req, res, vm);
        }
    )
});
