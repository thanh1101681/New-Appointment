module.exports = function(uidAppt, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    if (uidAppt) {
        Appointment.findOne({
                attributes: ['UID', 'Data'],
                include: [{
                    model: Patient,
                    'as': 'Patient',
                    include: [{
                        model: PatientFund
                    }]
                }],
                where: {
                    UID: uidAppt
                }
            })
            .then(function(patientRes) {
                defer.resolve(patientRes);
            }, function(err) {
                defer.reject(err.message);
            });
    } else {
        defer.reject('param not found');
    }
    return defer.promise;
};
