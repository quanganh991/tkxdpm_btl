var db = require('../fn/db');

exports.updateStation = park => {
    var sql = "UPDATE park SET " +
        "stationName = '" + park.stationName.toString() +"' ," +
        "stationAddress = '" + park.stationAddress.toString() +"' ," +
        "numberOfBikes = '" + park.numberOfBikes.toString() +"' ," +
        "numberOfEBikes = '" + park.numberOfEBikes.toString() +"' ," +
        "numberOfTwinBikes = '" + park.numberOfTwinBikes.toString() +"' ," +
        "numberOfEmptyDocks = '" + park.numberOfEmptyDocks.toString() +"' ," +
        "areaToWalk = '" + park.areaToWalk.toString() +"' ," +
        "timeToWalk = '" + park.timeToWalk.toString() +"' WHERE id_park = '" + park.id_park.toString() + "'";
    return db.save(sql);
}

//UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;
