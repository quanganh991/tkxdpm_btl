var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//các đường dẫn để xác định API
//1.Lấy thông tin toàn bộ bãi xe
var get_all_station = require('./controller/01_get_all_station/get_all_station');
app.use('/all_station', get_all_station);


//2.Lấy thông tin toàn bộ xe trong bãi
var get_all_bike = require('./controller/02_get_all_bike/get_all_bike');
app.use('/all_bike', get_all_bike);



//3.Lấy thông tin detail của bãi xe
var get_detail_station = require('./controller/03_get_detail_station/get_detail_station');
app.use('/detail_station/:id_station', get_detail_station);



//4.Lấy thông tin detail của xe
var get_detail_bike = require('./controller/04_get_detail_bike/get_detail_bike');
app.use('/detail_bike/:id_bike', get_detail_bike);



//5.search thông tin bãi xe
var search_station = require('./controller/05_search_station_detail/search_station_detail');
app.use('/search_station/:station_name', search_station);



//6.Thanh toán
var pay_before_rent = require('./controller/06_pay_before_rent/pay_before_rent');
app.use('/pay_before_rent', pay_before_rent);



//7.
//8.Thêm mới một bãi xe
var add_station = require('./controller/08_add_station/add_station');
app.use('/add_station', add_station);



//9.Thay đổi thông tin một bãi xe
var update_station = require('./controller/09_update_station/update_station');
app.use('/update_station', update_station);



//10.Xóa bãi xe
var delete_station = require('./controller/10_delete_station/delete_station');
app.use('/delete_station', delete_station);



//11.Thêm mới một xe
var add_bike = require('./controller/11_add_bike/add_bike');
app.use('/add_bike', add_bike);



//12.thay đổi thông tin mỗi xe
var update_bike = require('./controller/12_update_bike/update_bike');
app.use('/update_bike', update_bike);



//13.search search xe
var search_bike = require('./controller/13_search_bike/search_bike');
app.use('/search_bike/:bike_name', search_bike);



//14.Xóa một xe
var delete_bike = require('./controller/14_delete_bike/delete_bike');
app.use('/delete_bike', delete_bike);



//15.lấy thông tin xe thuê từ idXe
var get_rent_bike_by_id = require('./controller/15_get_rent_bike_by_id/get_rent_bike_by_id');
app.use('/get_rent_bike_by_id', get_rent_bike_by_id);



//16.thanh toán xe muốn thuê
var pay_after_rent = require('./controller/16_pay_after_rent/pay_after_rent');
app.use('/pay_after_rent', pay_after_rent);



//17.Lấy thông tin xe đang thuê
var get_renting_bike_information = require('./controller/17_get_renting_bike_information/get_renting_bike_information');
app.use('/get_renting_bike_information', get_renting_bike_information);



//18.Trả xe
var register_return_bike = require('./controller/18_register_return_bike/register_return_bike');
app.use('/register_return_bike', register_return_bike);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(9999, () => {
  console.log('Site running on port 9999');
});
