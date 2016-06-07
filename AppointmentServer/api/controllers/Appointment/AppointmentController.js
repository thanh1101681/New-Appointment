module.exports = {
    CreateAppointmentRequest: function(req, res) {
        var data = HelperService.CheckPostRequest(req);
        if (data === false) {
            res.serverError('data failed');
        } else {
            Services.CreateAppointmentRequest(data, req.user)
                .then(function(success) {
                    if (!_.isEmpty(success) &&
                        !_.isEmpty(success.transaction)) {
                        success.transaction.commit()
                            .then(function(cSuccess) {
                                res.ok({ status: 'success' });
                            }, function(err) {
                                res.serverError(err);
                            });
                    } else {
                        res.ok({ status: 'success' });
                    }
                }, function(err) {
                    if (HelperService.CheckExistData(err) &&
                        HelperService.CheckExistData(err.transaction) &&
                        HelperService.CheckExistData(err.error)) {
                        err.transaction.rollback();
                        res.serverError(err.error);
                    } else {
                        res.serverError(err);
                    }
                });
        }
    },
    UpdateAppointmentRequest: function(req, res) {
        var data = HelperService.CheckPostRequest(req);
        if (data === false) {
            res.serverError('data failed');
        } else {
            Services.UpdateAppointmentRequest(data, req.user)
                .then(function(success) {
                    if (!_.isEmpty(success) &&
                        !_.isEmpty(success.transaction)) {
                        success.transaction.commit()
                            .then(function(cSuccess) {
                                res.ok({ status: 'success' });
                            }, function(err) {
                                res.serverError(err);
                            });
                    } else {
                        res.ok({ status: 'success' });
                    }
                }, function(err) {
                    if (HelperService.CheckExistData(err) &&
                        HelperService.CheckExistData(err.transaction) &&
                        HelperService.CheckExistData(err.error)) {
                        err.transaction.rollback();
                        res.serverError(err.error);
                    } else {
                        res.serverError(err);
                    }
                });
        }
    },
    ReadAppointmentRequest: function(req, res) {
        var UID = req.param('UID');
        Services.ReadAppointmentRequest(UID, req.user)
            .then(function(success) {
                res.ok(success);
            }, function(err) {
                if (HelperService.CheckExistData(err) &&
                    HelperService.CheckExistData(err.transaction) &&
                    HelperService.CheckExistData(err.error)) {
                    err.transaction.rollback();
                    res.serverError(err.error);
                } else {
                    res.serverError(err);
                }
            });
    },
    GetListAppointmentRequest: function(req, res) {
        var data = HelperService.CheckPostRequest(req);
        if (data === false) {
            res.serverError('data failed');
        } else {
            Services.GetListAppointmentRequest(data, req.user)
                .then(function(success) {
                    res.ok(success);
                }, function(err) {
                    if (HelperService.CheckExistData(err) &&
                        HelperService.CheckExistData(err.transaction) &&
                        HelperService.CheckExistData(err.error)) {
                        err.transaction.rollback();
                        res.serverError(err.error);
                    } else {
                        res.serverError(err);
                    }
                });
        }
    }
};
