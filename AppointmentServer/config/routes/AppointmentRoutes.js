module.exports = {
    //create appointment
    'POST /api/appointment/create': {
        controller: 'Appointment/AppointmentController',
        action: 'CreateAppointmentRequest'
    },
    //read appointment
    'GET /api/appointment/read/appointment/:UID': {
        controller: 'Appointment/AppointmentController',
        action: 'ReadAppointment'
    },
    'GET /api/appointment/read/patient/:UID': {
        controller: 'Appointment/AppointmentController',
        action: 'ReadPatient'
    },
    //update appointment
    'POST /api/appointment/update': {
        controller: 'Appointment/AppointmentController',
        action: 'UpdateAppointmentRequest'
    },
    //get list appointment
    'POST /api/appointment/list': {
        controller: 'Appointment/AppointmentController',
        action: 'GetListAppointmentRequest'
    }
};
