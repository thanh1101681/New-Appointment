module.exports = function(objRel) {
    var $q = require('q');
    var defer = $q.defer();
    if (!_.isEmpty(objRel)) {
        if (!_.isEmpty(objRel.data)) {
            RelAppointmentDoctor.create(objRel.data, {
                    transaction: objRel.transaction
                })
                .then(function(relApptDoctorCreated) {
                    defer.resolve(relApptDoctorCreated);
                }, function(err) {
                    defer.reject(err);
                });
        } else if (!_.isEmpty(objRel.where) &&
            !_.isEmpty(objRel.appointmentObject)) {
            var whereClause = ParseWhereClauseService(objRel.where);
            Doctor.findOne({
                    attributes: ['ID'],
                    where: {
                        $or: whereClause
                    },
                    raw: true
                })
                .then(function(doctorRes) {
                    if (!_.isEmpty(doctorRes)) {
                        return objRel.appointmentObject.setDoctor(doctorRes.ID, {
                            transaction: objRel.transaction
                        });
                    } else {
                        var error = new Error('Doctor not found!');
                        defer.reject(error);
                    }
                }, function(err) {
                    defer.reject(err);
                })
                .then(function(relApptDoctorCreated) {
                    defer.resolve(relApptDoctorCreated);
                }, function(err) {
                    defer.reject(err);
                });
        } else {
            var error = new Error('data failed!');
            defer.reject(error);
        }
    }
    return defer.promise;
};
