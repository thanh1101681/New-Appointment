module.exports = function(uidAppt, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    if (uidAppt) {
        Appointment.findOne({
                attributes: {
                    exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                },
                where: {
                    UID: uidAppt
                },
                include: [{
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: Patient,
                    as: 'Patient',
                    required: false
                }, {
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: Doctor,
                    as: 'Doctor',
                    required: false
                }, {
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: FileUpload,
                    as: 'FileUpload',
                    required: false
                }]
            })
            .then(function(apptRes) {
                defer.resolve(apptRes);
            }, function(err) {
                defer.reject(err.message);
            });
    } else {
        defer.reject('param not found');
    }
    return defer.promise;
};
