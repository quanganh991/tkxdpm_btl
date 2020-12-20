var db = require('../fn/db');

exports.addStation = park => {
    var sql = "INSERT INTO park (stationName, stationAddress, numberOfBikes,numberOfEBikes, numberOfTwinBikes, numberOfEmptyDocks, areaToWalk, timeToWalk) VALUES" +
        " ('"+ park.stationName.toString() +"' ," +
        "'" + park.stationAddress.toString() +"' ," +
        "'" + park.numberOfBikes.toString() +"' ," +
        "'" + park.numberOfEBikes.toString() +"' ," +
        "'" + park.numberOfTwinBikes.toString() +"' ," +
        "'" + park.numberOfEmptyDocks.toString() +"' ," +
        "'" + park.areaToWalk.toString() +"' ," +
        "'" + park.timeToWalk.toString() +"' )";
    return db.save(sql);
}
