module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    if (!_.isEmpty(data) &&
        !_.isEmpty(data.Appointment)) {
        var dataAppointment = Services.InitDataAppointment.Update(data.Appointment, userInfo);
        sequelize.transaction()
            .then(function(t) {
                Appointment.findOne({
                        where: {
                            UID: dataAppointment.UID
                        },
                        transaction: t
                    })
                    .then(function(apptRes) {
                        if (!_.isEmpty(apptRes)) {
                            return apptRes.update(dataAppointment, {
                                transaction: t
                            });
                        }
                    }, function(err) {
                        defer.reject(err.message);
                    })
                    .then(function(apptUpdated) {
                        var arrayPromise = [];
                        if (!_.isEmpty(data.Patient) &&
                            _.isArray(data.Patient)) {
                            var objRelApptPatient = {
                                where: data.Patient,
                                appointmentObject: apptCreated,
                                transaction: t
                            };
                            arrayPromise.push(Services.RelAppointmentPatient(objRelApptPatient));
                        }
                        if (!_.isEmpty(data.Doctor) &&
                            _.isArray(data.Doctor)) {
                            var objRelApptDoctor = {
                                where: data.Doctor,
                                appointmentObject: apptCreated,
                                transaction: t
                            };
                            arrayPromise.push(Services.RelAppointmentDoctor(objRelApptDoctor));
                        }
                        if (!_.isEmpty(data.FileUpload) &&
                            _.isArray(data.FileUpload)) {
                            var objRelApptFileUpload = {
                                where: data.FileUpload,
                                appointmentObject: apptCreated,
                                transaction: t
                            };
                            arrayPromise.push(Services.RelAppointmentFileUpload(objRelApptFileUpload));
                        }
                        return $q.all(arrayPromise);
                    }, function(err) {
                        defer.reject(err.message);
                    })
                    .then(function(allRelCreated) {
                        defer.resolve({
                            status: 'success',
                            transaction: t
                        });
                    }, function(err) {
                        defer.reject(err.message);
                    });
            }, function(err) {
                defer.reject(err.message);
            });
    } else {
        defer.reject('Data.isEmpty');
    }
    return defer.promise;
};
