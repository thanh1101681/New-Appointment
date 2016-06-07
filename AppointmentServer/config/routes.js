var routes = {};
var _ = require('lodash');
//Begin Module Telehealth Appointment
var AppointmentRoutes = require('./routes/AppointmentRoutes');
_.extend(routes, AppointmentRoutes);
//End Module Telehealth Appointment
module.exports.routes = routes;
