var AppointmentController = require('../controllers/AppointmentController');

module.exports = function(router) {
    router.get('/appointment/create', AppointmentController.Create);
    router.get('/appointment/read', AppointmentController.Read);
    router.get('/appointment/list', AppointmentController.List);
};
