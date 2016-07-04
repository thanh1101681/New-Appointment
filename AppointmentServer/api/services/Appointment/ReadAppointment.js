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
                }
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
