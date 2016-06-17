import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import InputTextarea from '../../../../modules/inputTextarea'
import RadioGroup from '../../../../modules/radio_group'
import Dropdown from '../../../../modules/dropdown'
import DropdownCountry from './dropdown_country'
import DropdownLanguage from './dropdown_language'
import Datepicker from '../../../../modules/datepicker'
import Services from '../../../../services/restfulAPI'

class BasicInfo extends Component {
	constructor() {
		super()
		//set default data Title
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
		//set default data Marital status
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
		//set default data Gender
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
		//set default data Indigenous status
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
		//set default data Yes - no
		this.dataYesNo = [{
			value: 'Y',
			name: 'Yes'
		},{
			value: 'N',
			name: 'No'
		}]
	}
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="First name :"
                        		   required={true} 
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_FirstName" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="Last name :"
                        		   required={true} 
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_LastName" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="Preferred name :"
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_PreferredName" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="Previous name :"
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_PreviousName" />
                    </div>
                </div>
                <div className="row">
	                <RadioGroup classGroup="col-lg-6 col-md-12 col-sm-12 col-xs-12" 
	                            nameGroup="Title: "
	                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
	                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
	                            classRadioList="btn-group"
	                            classLabel="btn btn-sm btn-default"
	                            classInput="toggle"
	                            data={this.dataTitle}
	                            name="PatientAppointment_Title"
	                             />

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
	                    <Dropdown data={this.dataMaritalStatus}
	            		  type={2}
	            		  label="Marital status: "
	            		  labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
	                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
	                      name="PatientAppointment_MaritalStatus"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <DropdownCountry name="PatientAppointment_Country" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <Datepicker label="Date of birth: " 
				                    type={2}
				                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
				                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
				                    name="PatientAppointment_DOB" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
	                    <RadioGroup nameGroup="Gender: "
		                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                            classRadioList="btn-group"
		                            classLabel="btn btn-sm btn-default"
		                            classInput="toggle"
		                            data={this.dataGender}
		                            name="PatientAppointment_GenderR"
		                             />
		                <InputText label=""
				                       type={2}
				                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
				                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
				                      name="PatientAppointment_Gender"
				                      placeholder="Other" />
                    </div>
                    <RadioGroup classGroup="col-lg-6 col-md-12 col-sm-12 col-xs-12" 
	                            nameGroup="Indigenous status: "
	                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
	                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
	                            classRadioList="btn-group"
	                            classLabel="btn btn-sm btn-default"
	                            classInput="toggle"
	                            data={this.dataIndigenousStatus}
	                            name="PatientAppointment_IndigenousStatus"
	                             />
                </div>
                <div className="row">
	                <RadioGroup classGroup="col-lg-6 col-md-12 col-sm-12 col-xs-12" 
		                            nameGroup="Interpreter: "
		                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                            classRadioList="btn-group"
		                            classLabel="btn btn-sm btn-default"
		                            classInput="toggle"
		                            data={this.dataYesNo}
		                            name="PatientAppointment_Interpreter"
		                             />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                		<DropdownLanguage name="PatientAppointment_Country" />
                	</div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    	<InputTextarea name="PatientAppointment_OtherSpecialNeeds"
                    				   type={3}
                    	               label="Other special needs: "
                    	               labelWidth="control-label text-right col-lg-3 col-md-3 col-xs-3"
                    	               inputWidth="col-lg-8 col-md-8 col-xs-8" />
                    </div>
                </div>
			</div>
			)
	}
}
export default BasicInfo