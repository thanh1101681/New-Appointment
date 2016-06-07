var _ = require('lodash');
var policies = {
    '*': 'isAuthenticated', //bật lên khi ở chế độ develop không cần login phân quyền
    // '*': true, //bật lên khi ở chế độ develop không cần login phân quyền
    // '*': "hasToken", //bật lên khi relase, hầu hết tất cả api đều phải có token
};
//Begin module Appointment
var appointmentPolicies = require('./policies/AppointmentPolicies');
_.extend(policies, appointmentPolicies);
//End module Appointment
module.exports.policies = policies;
