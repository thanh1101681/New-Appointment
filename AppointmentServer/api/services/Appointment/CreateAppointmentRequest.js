module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    var appointmentObject = null;
    if (!_.isEmpty(data) &&
        !_.isEmpty(data.Appointment)) {
        sequelize.transaction()
            .then(function(t) {
                var dataAppointment = Services.InitDataAppointment.Create(data.Appointment, userInfo);
                Appointment.create(dataAppointment, {
                        transaction: t
                    })
                    .then(function(apptCreated) {
                        var arrayPromise = [];
                        appointmentObject = apptCreated;
                        //relation Appt - Patient
                        if (!_.isEmpty(data.Patient) &&
                            _.isArray(data.Patient)) {
                            var objRelApptPatient = {
                                where: data.Patient,
                                appointmentObject: appointmentObject,
                                transaction: t
                            };
                            arrayPromise.push(Services.RelAppointmentPatient(objRelApptPatient));
                        }
                        //rel Appt - Doctor
                        if (!_.isEmpty(data.Doctor) &&
                            _.isArray(data.Doctor)) {
                            var objRelApptDoctor = {
                                where: data.Doctor,
                                appointmentObject: appointmentObject,
                                transaction: t
                            };
                            arrayPromise.push(Services.RelAppointmentDoctor(objRelApptDoctor));
                        }
                        //rel Appt - FileUpload
                        if (!_.isEmpty(data.FileUpload) &&
                            _.isArray(data.FileUpload)) {
                            var objRelApptFileUpload = {
                                where: data.FileUpload,
                                appointmentObject: appointmentObject,
                                transaction: t
                            };
                            arrayPromise.push(Services.RelAppointmentFileUpload(objRelApptFileUpload));
                        }
                        //rel Appt - Company
                        if (!_.isEmpty(userInfo) &&
                            userInfo.roles) {
                            var role = HelperService.GetRole(userInfo.roles);
                            if (role.isOrganization) {
                                var objRelApptCompany = {
                                    where: userInfo.ID,
                                    appointmentObject: appointmentObject,
                                    transaction: t
                                };
                                arrayPromise.push(Services.RelAppointmentCompany(objRelApptCompany));
                            }
                        }
                        return $q.all(arrayPromise);
                    }, function(err) {
                        defer.reject({
                            error: err,
                            transaction: t
                        });
                    })
                    .then(function(allRelCreated) {
                        defer.resolve({
                            status: 'success',
                            data: appointmentObject,
                            transaction: t
                        });
                    }, function(err) {
                        defer.reject({
                            error: err,
                            transaction: t
                        });
                    });
            }, function(err) {
                defer.reject({
                    error: err
                });
            });
    } else {
        var error = new Error('data.isEmpty');
        defer.reject({ error: error });
    }
    return defer.promise;
};
