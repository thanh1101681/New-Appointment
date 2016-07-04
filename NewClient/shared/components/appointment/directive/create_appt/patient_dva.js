import React,  {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
class PatientDVA extends Component {
	constructor() {
		super()
		this.$root = null
	}
	componentDidMount() {
		this.$root = $(this.refs.patient_dva)
	}
	_hide() {
		this.$root.addClass('hide') 
	}
	_show() {
		this.$root.removeClass('hide')
	}
	render() {
		return (
			<div className="row" ref="patient_dva">
                <div className="col-lg-6 col-md-12">
                	<InputText label="DVA no: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[0]_Data_DVANo"
		                       ref="Appointment.Data.PatientFund[0].Data.DVANo"
		                       placeholder="DVA no" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="DVA disability: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[0]_Data_DVADisability"
		                       ref="Appointment.Data.PatientFund[0].Data.DVADisability"
		                       placeholder="DVA disability" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="DVA card colour: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[0]_Data_DVACardColour"
		                       ref="Appointment.Data.PatientFund[0].Data.DVACardColour"
		                       placeholder="DVA card colour" />
                </div>
			</div>
			)
	}
}
export default PatientDVA