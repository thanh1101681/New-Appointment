module.exports = function(objRel) {
    var $q = require('q');
    var defer = $q.defer();
    if (!_.isEmpty(objRel) &&
        !_.isEmpty(objRel.appointmentObject) &&
        HelperService.CheckExistData(objRel.where)) {
        Company.findAll({
                attributes: ['ID'],
                include: [{
                    attributes: [],
                    model: Patient,
                    'as': 'Patient',
                    where: {
                        UserAccountID: objRel.where
                    },
                    through: {
                        attributes: []
                    }
                }],
                transation: objRel.transation,
                raw: true
            })
            .then(function(companyRes) {
                if (!_.isEmpty(companyRes)) {
                    companyRes = _.uniq(_.map(companyRes, 'ID'), 'ID');
                    return objRel.appointmentObject.setCompany(companyRes, {
                        transaction: objRel.transaction
                    });
                }
            }, function(err) {
                defer.reject(err);
            })
            .then(function(relApptCompanyCreated) {
                defer.resolve(relApptCompanyCreated);
            }, function(err) {
                defer.reject(err);
            });
    } else {
        defer.reject('objRel.isEmpty');
    }
    return defer.promise;
};
