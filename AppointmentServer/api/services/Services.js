module.exports = {
    //service appointment request
    CreateAppointmentRequest: require('./Appointment/CreateAppointmentRequest'),
    ReadAppointmentRequest: require('./Appointment/ReadAppointmentRequest'),
    UpdateAppointmentRequest: require('./Appointment/UpdateAppointmentRequest'),
    InitDataAppointment: require('./Appointment/InitDataAppointment'),
    RelAppointmentDoctor: require('./Appointment/RelAppointmentDoctor'),
    RelAppointmentPatient: require('./Appointment/RelAppointmentPatient'),
    RelAppointmentFileUpload: require('./Appointment/RelAppointmentFileUpload'),
    GetListAppointmentRequest: require('./Appointment/GetListAppointmentRequest'),
    GetListAppointmentRequestAdmin: require('./Appointment/GetListAppointmentRequestAdmin'),
    GetListAppointmentRequestCompany: require('./Appointment/GetListAppointmentRequestCompany'),
    GetListAppointmentRequestDoctor: require('./Appointment/GetListAppointmentRequestDoctor'),
    GetListAppointmentRequestPatient: require('./Appointment/GetListAppointmentRequestPatient'),
    RelAppointmentCompany: require('./Appointment/RelAppointmentCompany'),
    //service validate appointment model
    DataAppointment: require('./ValidateJSONB/DataAppointment'),
};
