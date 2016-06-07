module.exports = function(objRel) {
    var $q = require('q');
    var defer = $q.defer();
    if (!_.isEmpty(objRel)) {
        if (!_.isEmpty(objRel.data)) {
            RelAppointmentPatient.create(objRel.data, {
                    transaction: objRel.transaction
                })
                .then(function(relApptPatientCreated) {
                    defer.resolve(relApptPatientCreated);
                }, function(err) {
                    defer.reject(err);
                });
        } else if (!_.isEmpty(objRel.where) &&
            !_.isEmpty(objRel.appointmentObject)) {
            var whereClause = ParseWhereClauseService(objRel.where);
            Patient.findOne({
                    attributes: ['ID'],
                    where: {
                        $or: whereClause
                    },
                    raw: true
                })
                .then(function(patientRes) {
                    if (!_.isEmpty(patientRes)) {
                        return objRel.appointmentObject.setPatient(patientRes.ID, {
                            transaction: objRel.transaction
                        });
                    } else {
                        var error = new Error('Patient not found!');
                        defer.reject(error);
                    }
                }, function(err) {
                    defer.reject(err);
                })
                .then(function(relApptPatientCreated) {
                    defer.resolve(relApptPatientCreated);
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
