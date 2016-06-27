module.exports = {
    Create: function(data, userInfo) {
        var moment = require('moment');
        if (!_.isEmpty(data)) {
            //add UID CreatedBy for Appointment
            data.UID = UUIDService.Create();
            data.Status = 'Received';
            if (userInfo &&
                userInfo.ID) {
                data.CreatedBy = userInfo.ID;
            }
            //add UID, CreatedBy, CreatedDate for PatientAppointment
            if (!_.isEmpty(data.Data) &&
                !_.isEmpty(data.Data.Patient)) {
                data.Data.Patient.UID = UUIDService.Create();
                data.Data.Patient.CreatedDate = new Date().toString();
                if (userInfo &&
                    userInfo.ID) {
                    data.Data.Patient.CreatedBy = userInfo.ID;
                }
                //parse date
                if (data.Data.Patient.MedicareExpiryDate) {
                    var METemp = data.Data.Patient.MedicareExpiryDate;
                    data.Data.Patient.MedicareExpiryDate =
                        moment(METemp).utcOffset('+00:00').format('YYYY-MM-DD HH:mm:ss');
                }
            }
            //add UID, CreatedBy, CreatedDate  for AppointmentData
            if (!_.isEmpty(data.Data) &&
                !_.isEmpty(data.Data.AppointmentData) &&
                _.isArray(data.Data.AppointmentData)) {
                _.forEach(data.Data.AppointmentData, function(value, index) {
                    data.Data.AppointmentData[index].UID = UUIDService.Create();
                    data.Data.AppointmentData[index].CreatedDate = new Date().toString();
                    if (userInfo &&
                        userInfo.ID) {
                        data.Data.AppointmentData[index].CreatedBy = userInfo.ID;
                    }
                })
            }
        }
        return data;
    },
    Update: function(data, userInfo) {
        var moment = require('moment');
        if (!_.isEmpty(data)) {
            //add Modified for Appointment
            if (userInfo &&
                userInfo.ID) {
                data.ModifiedBy = userInfo.ID;
            }
            //add UID, CreatedBy, CreatedDate for PatientAppointment
            if (!_.isEmpty(data.Data) &&
                !_.isEmpty(data.Data.Patient)) {
                data.Data.Patient.UID = UUIDService.Create();
                data.Data.Patient.CreatedDate = new Date().toString();
                if (userInfo &&
                    userInfo.ID) {
                    data.Data.Patient.CreatedBy = userInfo.ID;
                }
                //parse date
                if (data.Data.Patient.MedicareExpiryDate) {
                    var METemp = data.Data.Patient.MedicareExpiryDate;
                    data.Data.Patient.MedicareExpiryDate =
                        moment(METemp).utcOffset('+00:00').format('YYYY-MM-DD HH:mm:ss');
                }
            }
            //add UID, CreatedBy, CreatedDate  for AppointmentData
            if (!_.isEmpty(data.Data) &&
                !_.isEmpty(data.Data.AppointmentData) &&
                _.isArray(data.Data.AppointmentData)) {
                _.forEach(data.Data.AppointmentData, function(value, index) {
                    data.Data.AppointmentData[index].UID = UUIDService.Create();
                    data.Data.AppointmentData[index].CreatedDate = new Date().toString();
                    if (userInfo &&
                        userInfo.ID) {
                        data.Data.AppointmentData[index].CreatedBy = userInfo.ID;
                    }
                })
            }
        }
        return data;
    }
};
