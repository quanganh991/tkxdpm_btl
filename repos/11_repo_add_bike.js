var db = require('../fn/db');

exports.addBike = bike => {
    var sql =
        bike.type == "ebike"
    ?
        "INSERT INTO bike (name, type, weight,licensePlate, manuafacturingDate, producer, cost, idPark,batteryPercentage,loadCycles,timeRemaining) VALUES" +
        " ('"+ bike.name +"' ," +
        "'" + bike.type +"' ," +
        "'" + bike.weight +"' ," +
        "'" + bike.licensePlate +"' ," +
        "'" + bike.manuafacturingDate +"' ," +
        "'" + bike.producer +"' ," +
        "'" + bike.cost +"' ," +
        "'" + bike.idPark +"' ," +
        "'" + bike.batteryPercentage +"' ," +
        "'" + bike.loadCycles +"' ," +
        "'" + bike.timeRemaining +"' )"
    :
            "INSERT INTO bike (name, type, weight,licensePlate, manuafacturingDate, producer, cost, idPark) VALUES" +
            " ('"+ bike.name +"' ," +
            "'" + bike.type +"' ," +
            "'" + bike.weight +"' ," +
            "'" + bike.licensePlate +"' ," +
            "'" + bike.manuafacturingDate +"' ," +
            "'" + bike.producer +"' ," +
            "'" + bike.cost +"' ," +
            "'" + bike.idPark +"' )"
    ;
    return db.save(sql);
}
