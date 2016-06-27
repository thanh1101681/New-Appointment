const ValidateCreateAppt = {
    rules: {
        //Appointment
        Appointment_Data_Description: {
            maxlength: 500
        },
        //Patient
        Appointment_Data_Patient_FirstName: {
            required: true,
            maxlength: 50
        },
        Appointment_Data_Patient_LastName: {
            required: true,
            maxlength: 255
        },
        Appointment_Data_Patient_PreferredName: {
            maxlength: 255
        },
        Appointment_Data_Patient_PreviousName: {
            maxlength: 255
        },
        Appointment_Data_Patient_OtherSpecialNeed: {
            maxlength: 255
        },
        Appointment_Data_Patient_Address1: {
            maxlength: 255
        },
        Appointment_Data_Patient_Address2: {
            maxlength: 255
        },
        Appointment_Data_Patient_Suburb: {
            maxlength: 100
        },
        Appointment_Data_Patient_Postcode: {
            minlength: 4,
            maxlength: 10,
            pattern: /^[0-9]{4,10}$/
        },
        Appointment_Data_Patient_State: {
            maxlength: 100
        },
        Appointment_Data_Patient_FaxNumber: {
            pattern: /^[1-9]{9}$/,
            maxlength: 100
        },
        Appointment_Data_Patient_PhoneNumber: {
            pattern: /^(\+61|0061|0)?4[0-9]{8}$/,
            maxlength: 20
        },
        Appointment_Data_Patient_HomePhoneNumber: {
            pattern: /^[0-9]{6,10}$/,
            maxlength: 20
        },
        Appointment_Data_Patient_WorkPhoneNumber: {
            pattern: /^[0-9]{6,10}$/,
            maxlength: 20
        },
        Appointment_Data_Patient_Gender: {
            required: true
        },
        //PatentKin
        Appointment_Data_PatientKin_FirstName: {
            required: true,
            maxlength: 50
        },
        Appointment_Data_PatientKin_LastName: {
            required: true,
            maxlength: 255
        },
        Appointment_Data_PatientKin_Address1: {
            maxlength: 255
        },
        Appointment_Data_PatientKin_Address2: {
            maxlength: 255
        },
        Appointment_Data_PatientKin_Suburb: {
            maxlength: 100
        },
        Appointment_Data_PatientKin_Postcode: {
            minlength: 4,
            maxlength: 10,
            pattern: /^[0-9]{4,10}$/
        },
        Appointment_Data_PatientKin_PhoneNumber: {
            pattern: /^(\+61|0061|0)?4[0-9]{8}$/,
            maxlength: 20
        },
        Appointment_Data_PatientKin_HomePhoneNumber: {
            pattern: /^[0-9]{6,10}$/,
            maxlength: 20
        },
        Appointment_Data_PatientKin_WorkPhoneNumber: {
            pattern: /^[0-9]{6,10}$/,
            maxlength: 20
        },
        //DoctorGP
        Appointment_Data_DoctorGP_FirstName: {
            required: true,
            maxlength: 50
        },
        Appointment_Data_DoctorGP_LastName: {
            required: true,
            maxlength: 255
        },
        Appointment_Data_DoctorGP_HealthLink: {
            maxlength: 255
        },
        Appointment_Data_DoctorGP_ProviderNumber: {
            maxlength: 255
        },
        Appointment_Data_DoctorGP_Email: {
            email: true,
            maxlength: 255
        },
        Appointment_Data_DoctorGP_PhoneNumber: {
            pattern: /^(\+61|0061|0)?4[0-9]{8}$/,
            maxlength: 20
        },
        Appointment_Data_DoctorGP_HomePhoneNumber: {
            pattern: /^[0-9]{6,10}$/,
            maxlength: 20
        },
        Appointment_Data_DoctorGP_WorkPhoneNumber: {
            pattern: /^[0-9]{6,10}$/,
            maxlength: 20
        },
        Appointment_Data_DoctorGP_Note: {
            maxlength: 255
        }

    },
    messages: {
        //Appointment
        Appointment_Data_Description: {
            maxlength: 'Please enter no more than 500 characters.'
        },
        //Patient
        Appointment_Data_Patient_FirstName: {
            required: 'Provide First name.',
            maxlength: 'Please enter no more than 50 characters.'
        },
        Appointment_Data_Patient_LastName: {
            required: 'Provide Last name.',
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_Patient_PreferredName: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_Patient_PreviousName: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_Patient_OtherSpecialNeed: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_Patient_Address1: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_Patient_Address2: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_Patient_Suburb: {
            maxlength: 'Please enter no more than 100 characters.'
        },
        Appointment_Data_Patient_Postcode: {
            minlength: 'Please enter at least 4 characters.',
            maxlength: 'Please enter no more than 10 characters.',
            pattern: 'Please enter a valid number.'
        },
        Appointment_Data_Patient_State: {
            maxlength: 'Please enter no more than 100 characters.'
        },
        Appointment_Data_Patient_FaxNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 100 characters.'
        },
        Appointment_Data_Patient_PhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_Patient_HomePhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_Patient_WorkPhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_Patient_Gender: {
            required: 'Provide Gender !'
        },
        //PatientKin
        Appointment_Data_PatientKin_FirstName: {
            required: 'Provide First name',
            maxlength: 'Please enter no more than 50 characters.'
        },
        Appointment_Data_PatientKin_LastName: {
            required: 'Provide Last name',
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_PatientKin_Address1: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_PatientKin_Address2: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_PatientKin_Suburb: {
            maxlength: 'Please enter no more than 100 characters.'
        },
        Appointment_Data_PatientKin_Postcode: {
            minlength: 'Please enter at least 4 characters.',
            maxlength: 'Please enter no more than 10 characters.',
            pattern: 'Please enter a valid number.'
        },
        Appointment_Data_PatientKin_PhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_PatientKin_HomePhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_PatientKin_WorkPhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        //DoctorGP
        Appointment_Data_DoctorGP_FirstName: {
            required: 'Provide First name',
            maxlength: 'Please enter no more than 50 characters.'
        },
        Appointment_Data_DoctorGP_LastName: {
            required: 'Provide Last name',
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_DoctorGP_HealthLink: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_DoctorGP_ProviderNumber: {
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_DoctorGP_Email: {
            email: 'Please enter a valid email address.',
            maxlength: 'Please enter no more than 255 characters.'
        },
        Appointment_Data_DoctorGP_PhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_DoctorGP_HomePhoneNumber: {
            attern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_DoctorGP_WorkPhoneNumber: {
            pattern: 'Please enter a valid number.',
            maxlength: 'Please enter no more than 20 characters.'
        },
        Appointment_Data_DoctorGP_Note: {
            maxlength: 'Please enter no more than 255 characters.'
        }
    }
}
export default ValidateCreateAppt
