var db = require('../fn/db');

exports.addBike = bike => {
    var sql =
        bike.typed == "ebike"
    ?
        "INSERT INTO bike (name, type, typed, weight,licensePlate, manuafacturingDate, producer, cost, idPark,batteryPercentage,loadCycles,timeRemaining) VALUES" +
        " ('"+ bike.name +"' ," +
        "'" + bike.type +"' ," +
        "'" + bike.typed +"' ," +
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
            "INSERT INTO bike (name, type, typed, weight,licensePlate, manuafacturingDate, producer, cost, idPark) VALUES" +
            " ('"+ bike.name +"' ," +
            "'" + bike.type +"' ," +
            "'" + bike.typed +"' ," +
            "'" + bike.weight +"' ," +
            "'" + bike.licensePlate +"' ," +
            "'" + bike.manuafacturingDate +"' ," +
            "'" + bike.producer +"' ," +
            "'" + bike.cost +"' ," +
            "'" + bike.idPark +"' )"
    ;
    return db.save(sql);
}
