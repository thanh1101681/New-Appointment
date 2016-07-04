import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import InputTextarea from '../../../../modules/inputTextarea'
import RadioGroup from '../../../../modules/radio_group'
import Dropdown from '../../../../modules/dropdown'
import Datepicker from '../../../../modules/datepicker'
import Services from '../../../../services/restfulAPI'

class BasicInfo extends Component {
	static propTypes = {
		defaultValue: PropTypes.object,
		data: PropTypes.object
	}
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
	componentDidMount() {}
	componentDidUpdate() {
		//set value default
        for(var keyObj in this.refs){
            if(keyObj &&
                this.props.defaultValue[keyObj] &&
                this.refs[keyObj]){
                this.refs[keyObj]._setValue(this.props.defaultValue[keyObj])
            }
        }
        this.refs['Appointment.Data.Patient.Gender']._hide()
        this.refs['Appointment.Data.Patient.InterperterLanguage']._hide()
	}
	_onChangeGender(val) {
		val == 'Other' ? this.refs['Appointment.Data.Patient.Gender']._show() :
		this.refs['Appointment.Data.Patient.Gender']._hide()
	}
	_onChangeInterpreter(val) {
		val == 'Y' ? this.refs['Appointment.Data.Patient.InterperterLanguage']._show() :
		this.refs['Appointment.Data.Patient.InterperterLanguage']._hide()
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
			                       name="Appointment_Data_Patient_FirstName"
			                       ref="Appointment.Data.Patient.FirstName"
			                       placeholder="First name" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="Last name :"
                        		   required={true} 
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_LastName"
			                       ref="Appointment.Data.Patient.LastName"
			                       placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="Preferred name :"
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_PreferredName"
			                       ref="Appointment.Data.Patient.PreferredName" 
			                       placeholder="Preferred name"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputText label="Previous name :"
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                       name="Appointment_Data_Patient_PreviousName"
			                       ref="Appointment.Data.Patient.PreviousName"
			                       placeholder="Previous name" />
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
	                            name="Appointment_Data_Patient_Title"
	                            ref="Appointment.Data.Patient.Title" />
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
	                    <Dropdown data={this.dataMaritalStatus}
	            		  type={2}
	            		  label="Marital status: "
	            		  labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
	                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
	                      name="Appointment_Data_Patient_MaritalStatus"
	                      ref="Appointment.Data.Patient.MaritalStatus"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <Dropdown data={this.props.data.dataCountry}
			            		  type={2}
			            		  label="Country :"
			            		  labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="Appointment_Data_Patient_Country" 
			                      ref="Appointment.Data.Patient.Country" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <Datepicker label="Date of birth: " 
				                    type={2}
				                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
				                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
				                    name="Appointment_Data_Patient_DOB"
				                    ref="Appointment.Data.Patient.DOB" />
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
		                            name="Appointment_Data_Patient_GenderRadio"
		                            ref="Appointment.Data.Patient.GenderRadio"
		                            onChange={this._onChangeGender.bind(this)} />
		                <InputText  label=""
		                			required={true} 
				                    type={2}
				                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
				                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
				                    name="Appointment_Data_Patient_Gender"
				                    ref="Appointment.Data.Patient.Gender"
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
	                            name="Appointment_Data_Patient_IndigenousStatus"
	                            ref="Appointment.Data.Patient.IndigenousStatus" />
                </div>
                <div className="row margin-top-20">
	                <RadioGroup classGroup="col-lg-6 col-md-12 col-sm-12 col-xs-12" 
		                            nameGroup="Interpreter: "
		                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                            classRadioList="btn-group"
		                            classLabel="btn btn-sm btn-default"
		                            classInput="toggle"
		                            data={this.dataYesNo}
		                            name="Appointment_Data_Patient_Interpreter"
		                            ref="Appointment.Data.Patient.Interpreter"
		                            onChange={this._onChangeInterpreter.bind(this)} />
                </div>
                <div className="row margin-top-10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                		<Dropdown data={this.props.data.dataLanguage}
                				  required={true}
			            		  type={2}
			            		  label="Language :"
			            		  labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="Appointment_Data_Patient_InterperterLanguage" 
			                      ref="Appointment.Data.Patient.InterperterLanguage" />
                	</div>
                </div>
                <div className="row margin-top-10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    	<InputTextarea name="Appointment_Data_Patient_OtherSpecialNeeds"
                    				   type={3}
                    	               label="Other special needs: "
                    	               labelWidth="control-label text-right col-lg-3 col-md-3 col-xs-3"
                    	               inputWidth="col-lg-8 col-md-8 col-xs-8"
                    	               ref="Appointment.Data.Patient.OtherSpecialNeeds"
                    	               placeholder="Other special needs" />
                    </div>
                </div>
			</div>
			)
	}
}
BasicInfo.defaultProps = {
	defaultValue: {},
	data: {}
}
export default BasicInfo