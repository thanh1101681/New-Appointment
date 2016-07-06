import React,  {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'

class PatientPension extends Component {
	constructor() {
		super()
		this.$root = null
	}
	componentDidMount() {
		this.$root = $(this.refs.patient_pension)
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
	      	key != 'patient_pension' &&
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
			<div className="row" ref="patient_pension">
				<div className="col-lg-6 col-md-12">
                	<InputText label="HCC/Pension no: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[3]_PensionNo"
		                       ref="PensionNo"
		                       placeholder="HCC/Pension no" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="Expiry: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[3]_Expiry"
		                       ref="Expiry"
		                       placeholder="Expiry" />
                </div>
			</div>
			)
	}
}
export default PatientPension