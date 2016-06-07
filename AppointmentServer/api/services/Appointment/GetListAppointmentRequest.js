module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    if (!_.isEmpty(userInfo) &&
        userInfo.roles) {
        var role = HelperService.GetRole(userInfo.roles);
        if (role.isAdmin ||
            role.isAssistant) {
            //call service GetListAppointment for Amdin
            Services.GetListAppointmentRequestAdmin(data, userInfo)
                .then(function(listAppt) {
                    defer.resolve(listAppt);
                }, function(err) {
                    defer.reject(err.message);
                });
        } else if (role.isInternalPractitioner ||
            role.isExternalPractitioner) {
            //call service GetListAppointment for doctor
            Services.GetListAppointmentRequestDoctor(data, userInfo)
                .then(function(listAppt) {
                    defer.resolve(listAppt);
                }, function(err) {
                    defer.reject(err.message);
                });
        } else if (role.isOrganization) {
            //call service GetListAppointment for Company
            Services.GetListAppointmentRequestCompany(data, userInfo)
                .then(function(listAppt) {
                    defer.resolve(listAppt);
                }, function(err) {
                    defer.reject(err.message);
                });
        } else if (role.isPatient) {
            //call service GetListAppointment for Patient
            Services.GetListAppointmentRequestPatient(data, userInfo)
                .then(function(listAppt) {
                    defer.resolve(listAppt);
                }, function(err) {
                    defer.reject(err.message);
                });
        } else {
            var error = new Error('not.permission');
            defer.reject({
                error: error
            });
        }
    } else {
        var error = new Error('not.permission');
        defer.reject({
            error: error
        });
    }
    return defer.promise;
};
