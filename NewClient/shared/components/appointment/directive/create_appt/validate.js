const ValidateCreateAppt = {
    rules: {
        PatientAppointment_FirstName: {
            required: true
        },
        PatientAppointment_LastName: {
        	required: true
        }
    },
    messages: {
        PatientAppointment_FirstName: {
            required: 'Provide your First name !'
        },
        PatientAppointment_LastName: {
        	required: 'Provide your Last name !'
        }
    }
}
export default ValidateCreateAppt
