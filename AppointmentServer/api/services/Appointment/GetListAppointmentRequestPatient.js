module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    var pagination = PaginationService(data, Appointment);
    var filterRoleTemp = {
        '$and': {
            UserAccountID: userInfo.ID
        }
    };
    if (!HelperService.CheckExistData(pagination.Patient)) {
        pagination.Patient = [];
    }
    pagination.Patient.push(filterRoleTemp);
    Appointment.findAndCountAll({
            attributes: {
                exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
            },
            include: [{
                exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy'],
                model: Patient,
                as: 'Patient',
                where: pagination.Patient,
                required: !_.isEmpty(pagination.Patient)
            }, {
                exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy'],
                model: Doctor,
                as: 'Doctor',
                where: pagination.Doctor,
                required: !_.isEmpty(pagination.Doctor)
            }, {
                exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy'],
                model: FileUpload,
                as: 'FileUpload',
                where: pagination.FileUpload,
                required: !_.isEmpty(pagination.FileUpload)
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
