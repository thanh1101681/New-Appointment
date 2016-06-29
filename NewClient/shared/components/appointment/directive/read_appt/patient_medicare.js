import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import RadioGroup from '../../../../modules/radio_group'
import Datepicker from '../../../../modules/datepicker'
class PatientMedicare extends Component {
	constructor() {
		super()
		this.dataYesNo = [{ 
			value: 'Y', 
	    	name: 'Yes' 
	    },
	     {
	        value: 'N',
	        name: 'No'
	    }]

	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="tab-pane" id="tab_medicare">
                <h4 className="form-section font-blue-madison">Medicare information</h4>
                <InputText label="First name: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="First name" />
                <InputText label="Last name: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Last name" />
                <InputText label="Relationship: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Relationship" />
                <InputText label="Contact number: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Contact number" />
                <RadioGroup 	classGroup="row margin-bottom-10"
                				nameGroup="Medicare eligible: "
	                            classLabelGroup="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                            classInputGroup="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                            classRadioList="btn-group"
	                            classLabel="btn btn-sm btn-default"
	                            classInput="toggle"
	                            data={this.dataYesNo}
	                            name="Appointment_Data_Patient_Title"
	                            ref="Appointment_Data_Patient_Title" />
                <InputText label="Medicare number: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Medicare number" />
               <InputText label="Medicare reference number: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="Medicare reference number" />
                <Datepicker label="Expiry date: " 
                    type={2}
                    labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                    inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                    name="Appointment_Data_PreferedDate" 
                    ref="Appointment_Data_PreferedDate"/>
            </div>
			)
	}
}
export default PatientMedicare