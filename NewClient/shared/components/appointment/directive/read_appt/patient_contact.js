import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import Dropdown from '../../../../modules/dropdown'

class PatientContact extends Component {
	static propTypes = {
		data: PropTypes.object
	}
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="tab-pane" id="tab_contact">
                <h4 className="form-section font-blue-madison">Contact information</h4> 
                <InputText label="Mobile phone: "
			               type={2}
			               labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Mobile phone" />
			    <InputText label="Home phone: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Home phone" />
			    <InputText label="Work phone: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Work phone" />
                <InputText label="Email: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Email" />
                <InputText label="Fax: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Fax" />
			    <InputText label="Address1: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Address1" />
			    <InputText label="Address2: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Address2" />
                <InputText label="Suburb: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Suburb" />
                <InputText label="Postcode: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Postcode" />
                <InputText label="State: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="State" />
                <Dropdown data={this.props.data.dataCountry}
	            		  type={2}
	            		  label="Country: "
	            		  labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                      name="Appointment_Data_Patient_Country" 
	                      ref="Appointment_Data_Patient_Country" />
            </div>
			)
	}
}
PatientContact.defaultProps = {
	data: {
		dataCountry: []
	}
}
export default PatientContact