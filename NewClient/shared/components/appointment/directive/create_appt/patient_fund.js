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
	_getValue() {
	    var data = {}
	    for(var key in this.refs) {
	      if(key &&
	      	key != 'patient_fund' &&
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
			<div className="row" ref="patient_fund">
				<div className="col-lg-6 col-md-12">
                	<InputText label="Membership no: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[1]_MembershipNo"
		                       ref="MembershipNo"
		                       placeholder="Membership no" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="UPI: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[1]_UPI"
		                       ref="UPI"
		                       placeholder="UPI" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="Private fund: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[1]_PrivateFund"
		                       ref="PrivateFund"
		                       placeholder="Private fund" />
                </div>
			</div>
			)
	}
}
export default PatientFund