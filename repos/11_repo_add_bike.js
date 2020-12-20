var db = require('../fn/db');

exports.addBike = bike => {
    var sql =
        bike.type.toString() == "ebike"
    ?
        "INSERT INTO bike (name, type, weight,licensePlate, manuafacturingDate, producer, cost, idPark,batteryPercentage,loadCycles,timeRemaining) VALUES" +
        " ('"+ bike.name.toString() +"' ," +
        "'" + bike.type.toString() +"' ," +
        "'" + bike.weight.toString() +"' ," +
        "'" + bike.licensePlate.toString() +"' ," +
        "'" + bike.manuafacturingDate.toString() +"' ," +
        "'" + bike.producer.toString() +"' ," +
        "'" + bike.cost.toString() +"' ," +
        "'" + bike.idPark.toString() +"' ," +
        "'" + bike.batteryPercentage.toString() +"' ," +
        "'" + bike.loadCycles.toString() +"' ," +
        "'" + bike.timeRemaining.toString() +"' )"
    :
            "INSERT INTO bike (name, type, weight,licensePlate, manuafacturingDate, producer, cost, idPark) VALUES" +
            " ('"+ bike.name.toString() +"' ," +
            "'" + bike.type.toString() +"' ," +
            "'" + bike.weight.toString() +"' ," +
            "'" + bike.licensePlate.toString() +"' ," +
            "'" + bike.manuafacturingDate.toString() +"' ," +
            "'" + bike.producer.toString() +"' ," +
            "'" + bike.cost.toString() +"' ," +
            "'" + bike.idPark.toString() +"' )"
    ;
    return db.save(sql);
}
