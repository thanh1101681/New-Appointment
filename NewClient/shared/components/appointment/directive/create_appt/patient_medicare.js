import React,  {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'

class PatientMedicare extends Component {
	constructor() {
		super()
		this.$root = null
	}
	componentDidMount() {
		this.$root = $(this.refs.patient_medicare)
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
	      	key != 'patient_medicare' &&
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
			<div className="row" ref="patient_medicare">
				<div className="col-lg-6 col-md-12">
                	<InputText label="Medicare no: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[2]_MedicareNo"
		                       ref="MedicareNo"
		                       placeholder="Medicare no" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="Medicare ref: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[2]_MedicareRef"
		                       ref="MedicareRef"
		                       placeholder="Medicare ref" />
                </div>
                <div className="col-lg-6 col-md-12">
                	<InputText label="Medicare expiry: "
		                       type={2}
		                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
		                       inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
		                       name="Appointment_Data_PatientFund[2]_MedicareExpiry"
		                       ref="MedicareExpiry"
		                       placeholder="Medicare expiry" />
                </div>
			</div>
			)
	}
}
export default PatientMedicare