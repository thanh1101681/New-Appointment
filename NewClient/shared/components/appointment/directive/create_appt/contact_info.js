import React, {Component, PropTypes} from 'react' 
import InputText from '../../../../modules/inputText'
class ContactInfo extends Component {
	constructor() {
		super()
	}
	componentDidMount() {}
	_getValue() {
	    var data = {}
	    for(var key in this.refs) {
	      if(key &&
	        this.refs[key] &&
	        this.refs[key]._getValue() &&
	        this.refs[key]._getValue() != '') {
	        data[key] = this.refs[key]._getValue()
	      }
	    }
	    return data
  	}
	render() {
		return (
			<div>
				<div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Address1: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_Address1"
			                       ref="Appointment.Data.Patient.Address1"
			                       placeholder="Address 1" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Address2: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_Address2"
			                       ref="Appointment.Data.Patient.Address2"
			                       placeholder="Address 2" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Suburb: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_Suburb" 
			                       ref="Appointment.Data.Patient.Suburb"
			                       placeholder="Suburb"/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Postcode: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_Postcode" 
			                       ref="Appointment.Data.Patient.Postcode"
			                       placeholder="Postcode"/>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="State: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_State"
			                       ref="Appointment.Data.Patient.State"
			                       placeholder="State" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Fax number: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_FaxNumber" 
			                       ref="Appointment.Data.Patient.FaxNumber" 
			                       placeholder="Fax number"/>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Contact number(M): "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_PhoneNumber"
			                       ref="Appointment.Data.Patient.PhoneNumber"
			                       placeholder="Mobile phone" />                         
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(H): "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_HomePhoneNumber"
			                       ref="Appointment.Data.Patient.HomePhoneNumber"
			                       placeholder="Home phone" /> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Contact number(W): "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_WorkPhoneNumber"
			                       ref="Appointment.Data.Patient.WorkPhoneNumber"
			                       placeholder="Work phone" />                         
                    </div>
                </div>
			</div>
			)
	}
}
export default ContactInfo