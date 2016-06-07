module.exports = function(data, userInfo) {
    var $q = require('q');
    var defer = $q.defer();
    var pagination = PaginationService(data, Appointment);
    Company.findAll({
            attributes: ['ID'],
            include: [{
                attributes: [],
                model: Patient,
                'as': 'Patient',
                where: {
                    UserAccountID: userInfo.ID
                },
                through: {
                    attributes: []
                }
            }],
            raw: true
        })
        .then(function(companyRes) {
            if (!_.isEmpty(companyRes)) {
                companyRes = _.uniq(_.map(companyRes, 'ID'), 'ID');
                if (!HelperService.CheckExistData(pagination.Company)) {
                    pagination.Company = [];
                }
                var filterRoleTemp = {
                    ID: {
                        '$in': companyRes
                    }
                };
                pagination.Company.push(filterRoleTemp);
            }
            return Appointment.findAndCountAll({
                attributes: {
                    exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                },
                include: [{
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: Patient,
                    as: 'Patient',
                    where: pagination.Patient,
                    required: !_.isEmpty(pagination.Patient)
                }, {
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: Doctor,
                    as: 'Doctor',
                    where: pagination.Doctor,
                    required: !_.isEmpty(pagination.Doctor)
                }, {
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: FileUpload,
                    'as': 'FileUpload',
                    where: pagination.FileUpload,
                    required: !_.isEmpty(pagination.FileUpload)
                }, {
                    attributes: {
                        exclude: ['ID', 'CreatedBy', 'ModifiedDate', 'ModifiedBy']
                    },
                    model: Company,
                    as: 'Company',
                    where: pagination.Company,
                    required: !_.isEmpty(pagination.Company)
                }],
                where: pagination.Appointment,
                order: pagination.order,
                limit: pagination.limit,
                offset: pagination.offset
            });
        }, function(err) {
            defer.reject(err);
        })
        .then(function(listAppt) {
            defer.resolve(listAppt);
        }, function(err) {
            defer.reject(err);
        });
    return defer.promise;
};
