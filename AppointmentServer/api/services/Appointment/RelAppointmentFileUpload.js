module.exports = function(objRel) {
    var $q = require('q');
    var defer = $q.defer();
    if (!_.isEmpty(objRel)) {
        if (!_.isEmpty(objRel.data)) {
            RelAppointmentFileUpload.create(objRel.data, {
                    transaction: objRel.transaction
                })
                .then(function(relApptFileUploadCreated) {
                    defer.resolve(relApptFileUploadCreated);
                }, function(err) {
                    defer.reject(err);
                });
        } else if (!_.isEmpty(objRel.where) &&
            !_.isEmpty(objRel.appointmentObject)) {
            var whereClause = ParseWhereClauseService(objRel.where);
            FileUpload.findOne({
                    attributes: ['ID'],
                    where: {
                        $or: whereClause
                    },
                    raw: true
                })
                .then(function(fileUploadRes) {
                    if (!_.isEmpty(fileUploadRes)) {
                        return objRel.appointmentObject.setFileUpload(fileUploadRes.ID, {
                            transaction: objRel.transaction
                        });
                    } else {
                        var error = new Error('FileUpload not found!');
                        defer.reject(error);
                    }
                }, function(err) {
                    defer.reject(err);
                })
                .then(function(relApptFileUploadCreated) {
                    defer.resolve(relApptFileUploadCreated);
                }, function(err) {
                    defer.reject(err);
                });
        } else {
            var error = new Error('data failed!');
            defer.reject(error);
        }
    }
    return defer.promise;
};
