module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    var pagination = PaginationService(data, Appointment);
    Appointment.findAndCountAll({
            attributes: {
                exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy', 'ApprovalDate']
            },
            include: [{
                exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy'],
                model: Doctor,
                as: 'Doctor',
                where: pagination.Doctor,
                required: !_.isEmpty(pagination.Doctor)
            }],
            where: pagination.Appointment,
            order: pagination.order,
            limit: pagination.limit,
            offset: pagination.offset
        })
        .then(function(listAppt) {
            defer.resolve(listAppt);
        }, function(err) {
            defer.reject(err.message);
        });
    return defer.promise;
};
