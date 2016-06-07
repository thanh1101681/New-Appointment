module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    var pagination = PaginationService(data, Appointment);
    Appointment.findAll({
            attributes: ['ID'],
            include: [{
                attributes: ['ID'],
                model: Doctor,
                as: 'Doctor',
                required: false
            }],
            where: {
                $or: [{
                        CreatedBy: userInfo.ID
                    },
                    sequelize.where(sequelize.col('Doctor.UserAccountID'), userInfo.ID)
                ]
            }
        })
        .then(function(appointmentRoleList) {
            appointmentRoleList = _.map(appointmentRoleList, 'ID');
            if (!HelperService.CheckExistData(pagination.Appointment)) {
                pagination.Appointment = [];
            }
            pagination.Appointment.push({
                ID: {
                    $in: appointmentRoleList
                }
            });
            return Appointment.findAndCountAll({
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
            });
        }, function(err) {
            defer.reject(err.message);
        })
        .then(function(listAppt) {
            defer.resolve(listAppt);
        }, function(err) {
            defer.reject(err.message);
        });
    return defer.promise;
};
