import React,  {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'

class PatientFund extends Component {
	constructor() {
		super()
		this.$root = null
	}
	componentDidMount() {
		this.$root = $(this.refs.patient_fund)
	}
	_hide() {
		this.$root.addClass('hide') 
	}
	_show() {
		this.$root.removeClass('hide')
	}
	render() {
		return (
			<div className="row" ref="patient_fund">
				<div className="col-lg-6 col-md-12">
                	<InputText label="Membership no: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[1]_MembershipNo"
		                       ref="Appointment.Data.PatientFund[1].MembershipNo"
		                       placeholder="Membership no" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="UPI: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[1]_UPI"
		                       ref="Appointment.Data.PatientFund[1].UPI"
		                       placeholder="UPI" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="Private fund: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[1]_PrivateFund"
		                       ref="Appointment.Data.PatientFund[1].PrivateFund"
		                       placeholder="Private fund" />
                </div>
			</div>
			)
	}
}
export default PatientFund