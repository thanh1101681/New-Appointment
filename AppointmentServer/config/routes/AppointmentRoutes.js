module.exports = {
    'POST /api/appointment/create': {
        controller: 'Appointment/AppointmentController',
        action: 'CreateAppointmentRequest'
    },
    'GET /api/appointment/read/:UID': {
        controller: 'Appointment/AppointmentController',
        action: 'ReadAppointmentRequest'
    },
    'POST /api/appointment/update': {
        controller: 'Appointment/AppointmentController',
        action: 'UpdateAppointmentRequest'
    },
    'POST /api/appointment/list': {
        controller: 'Appointment/AppointmentController',
        action: 'GetListAppointmentRequest'
    }
};
