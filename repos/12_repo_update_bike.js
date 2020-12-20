var db = require('../fn/db');

exports.updateBike = bike => {
    var sql =
        bike.type.toString() == "ebike"
    ?
        "UPDATE bike SET " +
        "name = '" + bike.name.toString() +"' ," +
        "type = '" + bike.type.toString() +"' ," +
        "weight = '" + bike.weight.toString() +"' ," +
        "licensePlate = '" + bike.licensePlate.toString() +"' ," +
        "manuafacturingDate = '" + bike.manuafacturingDate.toString() +"' ," +
        "producer = '" + bike.producer.toString() +"' ," +
        "cost = '" + bike.cost.toString() +"' ," +
        "idPark = '" + bike.idPark.toString() +"' ," +
        "batteryPercentage = '" + bike.batteryPercentage.toString() +"' ," +
        "loadCycles = '" + bike.loadCycles.toString() +"' ," +
        "timeRemaining = '" + bike.timeRemaining.toString() +"' WHERE id_bike = '" + bike.id_bike.toString() + "'"
        :
            "UPDATE bike SET " +
            "name = '" + bike.name.toString() +"' ," +
            "type = '" + bike.type.toString() +"' ," +
            "weight = '" + bike.weight.toString() +"' ," +
            "licensePlate = '" + bike.licensePlate.toString() +"' ," +
            "manuafacturingDate = '" + bike.manuafacturingDate.toString() +"' ," +
            "producer = '" + bike.producer.toString() +"' ," +
            "cost = '" + bike.cost.toString() +"' ," +
            "idPark = '" + bike.idPark.toString() +"' WHERE id_bike = '" + bike.id_bike.toString() + "'"
    ;
    return db.save(sql);
}
