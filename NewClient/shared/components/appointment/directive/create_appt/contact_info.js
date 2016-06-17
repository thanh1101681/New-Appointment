import React, {Component, PropTypes} from 'react' 
import InputText from '../../../../modules/inputText'
class ContactInfo extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Address1: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_Address1" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Address2: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_Address2" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Suburb: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_Suburb" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Postcode: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_Postcode" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="State: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_State" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Fax number: "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_FaxNumber" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    	<InputText label="Contact number(M): "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_MobilePhone" />                         
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(H): "
			                       type={2}
			                       labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
			                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
			                      name="PatientAppointment_HomePhone" /> 
                    </div>
                </div>
			</div>
			)
	}
}
export default ContactInfo