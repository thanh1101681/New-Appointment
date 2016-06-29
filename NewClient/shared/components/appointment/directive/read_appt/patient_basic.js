import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import RadioGroup from '../../../../modules/radio_group'
import Datepicker from '../../../../modules/datepicker'
import InputTextarea from '../../../../modules/inputTextarea'
import Dropdown from '../../../../modules/dropdown'

class PatientBasic extends Component {
	static propTypes = {
		data: PropTypes.object
	}
	constructor() {
		super()
		this.dataYesNo = [{
			value: 'Y',
			name: 'Yes'
		},{
			value: 'N',
			name: 'No'
		}]
		this.dataTitle = [{
		    value: 'Mr',
		    name: 'Mr'
		}, {
		    value: 'Mrs',
		    name: 'Mrs'
		}, {
		    value: 'Miss',
		    name: 'Miss'
		}, {
		    value: 'Dr',
		    name: 'Dr'
		}, {
		    value: 'Master',
		    name: 'Master'
		}]
		this.dataMaritalStatus = [{
		    value: 'Nerver Married',
		    name: 'Nerver Married'
		}, {
		    value: 'Married',
		    name: 'Married'
		}, {
		    value: 'Widowed',
		    name: 'Widowed'
		}, {
		    value: 'Divorced',
		    name: 'Divorced'
		}, {
		    value: 'Separated',
		    name: 'Separated'
		}]
		this.dataGender = [{
			value: 'Male',
			name: 'Male'
		},{
			value: 'Female',
			name: 'Female'
		},{
			value: 'Other',
			name: 'Other'
		}]
		this.dataIndigenousStatus = [{
			value: 'None',
			name: 'None'
		},{
			value: 'Aboriginal',
			name: 'Aboriginal'
		},{
			value: 'Torres strait islander',
			name: 'Torres strait islander'
		}]
	}
	componentDidMount() {

	}
	render() {
		return (
			 <div className="tab-pane active" id="tab_basic">
                <h4 className="form-section font-blue-madison">Basic information</h4>
                <RadioGroup 	nameGroup="Title: "
	                            classLabelGroup="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                            classInputGroup="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                            classRadioList="btn-group"
	                            classLabel="btn btn-sm btn-default"
	                            classInput="toggle"
	                            data={this.dataTitle}
	                            name="Appointment_Data_Patient_Title"
	                            ref="Appointment_Data_Patient_Title" />
	            <InputText label="First name: "
	                       type={2}
	                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                       name="Appointment_Data_Patient_PreviousName"
	                       ref="Appointment_Data_Patient_PreviousName"
	                       placeholder="First name" />
			    <InputText label="Middle name: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
			                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
			                      name="Appointment_Data_Patient_PreviousName"
			                      ref="Appointment_Data_Patient_PreviousName"
			                      placeholder="Middle name" />
			    <InputText label="Last name: "
			                      type={2}
			                      labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
			                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
			                      name="Appointment_Data_Patient_PreviousName"
			                      ref="Appointment_Data_Patient_PreviousName"
			                      placeholder="Last name" />
                <InputText label="Preferred name: "
			                      type={2}
			                      labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
			                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
			                      name="Appointment_Data_Patient_PreviousName"
			                      ref="Appointment_Data_Patient_PreviousName"
			                      placeholder="Preferred name" />
                <InputText label="Previous name: "
			                      type={2}
			                      labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
			                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
			                      name="Appointment_Data_Patient_PreviousName"
			                      ref="Appointment_Data_Patient_PreviousName"
			                      placeholder="Previous name" />
			    <Dropdown data={this.props.data.dataCountry}
			            		  type={2}
			            		  label="Country of birth: "
			            		  labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
			                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
			                      name="Appointment_Data_Patient_Country" 
			                      ref="Appointment_Data_Patient_Country" />
			    <Datepicker label="Date of birth: " 
                    type={2}
                    labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                    inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                    name="Appointment_Data_PreferedDate" 
                    ref="Appointment_Data_PreferedDate"/>
                <Dropdown data={this.dataMaritalStatus}
	            		  type={2}
	            		  label="Marital status: "
	            		  labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
	                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
	                      name="Appointment_Data_Patient_MaritalStatus"
	                      ref="Appointment_Data_Patient_MaritalStatus"/>
	            <RadioGroup nameGroup="Gender: "
		                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                            classRadioList="btn-group"
		                            classLabel="btn btn-sm btn-default"
		                            classInput="toggle"
		                            data={this.dataGender}
		                            name="Appointment_Data_Patient_GenderRadio"
		                            ref="Appointment_Data_Patient_GenderRadio" />
		        <InputText  label=""
		                	required={true} 
				            type={2}
				            labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
				            inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
				            name="Appointment_Data_Patient_Gender"
				            ref="Appointment_Data_Patient_Gender"
				            placeholder="Other" />
				<RadioGroup     classGroup="row margin-top-10"
								nameGroup="Indigenous status: "
	                            classLabelGroup="control-label text-right col-lg-3 col-md-4 col-sm-4"
	                            classInputGroup="col-lg-8 col-md-8 col-sm-8"
	                            classRadioList="btn-group"
	                            classLabel="btn btn-sm btn-default"
	                            classInput="toggle"
	                            data={this.dataIndigenousStatus}
	                            name="Appointment_Data_Patient_IndigenousStatus"
	                            ref="Appointment_Data_Patient_IndigenousStatus" />
	            <RadioGroup 		classGroup="row margin-top-10"
	            					nameGroup="Interpreter: "
		                            classLabelGroup="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
		                            classInputGroup="col-lg-8 col-md-6 col-sm-6 col-xs-6"
		                            classRadioList="btn-group"
		                            classLabel="btn btn-sm btn-default"
		                            classInput="toggle"
		                            data={this.dataYesNo}
		                            name="Appointment_Data_Patient_Interpreter"
		                            ref="Appointment_Data_Patient_Interpreter" />
		        <InputTextarea name="PatientAppointment_OtherSpecialNeeds"
                               type={3}
                               label="Other special needs: "
                               labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                               inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                               name="Appointment_Data_Description"
                               ref="Appointment_Data_Description"
                               placeholder="Other special needs" />
            </div>
			)
	}
}
PatientBasic.defaultProps = {
	data: {
		dataCountry: []
	}
}
export default PatientBasic