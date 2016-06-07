module.exports = {
    associations: function() {
        //Association Appointment - Patient
        Appointment.belongsToMany(Patient, {
            through: 'RelAppointmentPatient',
            foreignKey: 'AppointmentID',
            as: 'Patient'
        });
        Patient.belongsToMany(Appointment, {
            through: 'RelAppointmentPatient',
            foreignKey: 'PatientID',
            as: 'Appointment'
        });
        //Association Appointment - Doctor
        Appointment.belongsToMany(Doctor, {
            through: 'RelAppointmentDoctor',
            foreignKey: 'AppointmentID',
            as: 'Doctor'
        });
        Doctor.belongsToMany(Appointment, {
            through: 'RelAppointmentDoctor',
            foreignKey: 'DoctorID',
            as: 'Appointment'
        });
        //Association Appointment - FileUpload
        Appointment.belongsToMany(FileUpload, {
            through: 'RelAppointmentFileUpload',
            foreignKey: 'AppointmentID',
            as: 'FileUpload'
        });
        FileUpload.belongsToMany(Appointment, {
            through: 'RelAppointmentFileUpload',
            foreignKey: 'FileUploadID',
            as: 'Appointment'
        });
        //Association Appointment - Company
        Appointment.belongsToMany(Company, {
            through: 'RelAppointmentCompany',
            foreignKey: 'AppointmentID',
            as: 'Company'
        });
        Company.belongsToMany(Appointment, {
            through: 'RelAppointmentCompany',
            foreignKey: 'CompanyID',
            as: 'Appointment'
        });

        //Association Company - Patient
        Company.belongsToMany(Patient, {
            through: 'RelCompanyPatient',
            foreignKey: 'CompanyID',
            as: 'Patient'
        });
        Patient.belongsToMany(Company, {
            through: 'RelCompanyPatient',
            foreignKey: 'PatientID',
            as: 'Company'
        });
    }
};
