import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import InputTextarea from '../../../../modules/inputTextarea'
class GPInfo extends Component {
	constructor() {
		super()
        this.$root = null
	}
	componentDidMount() {
        this.$root = $(this.refs.GPInfo)
	}
    _hide() {
        this.$root.addClass('hide')
    }
    _show() {
       this.$root.removeClass('hide') 
    }
	render() {
		return (
			<div ref="GPInfo">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="First name: "
                                   required={true}
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_DoctorGP_FirstName"
                                  placeholder="First name" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Last name: "
                                   required={true}
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_DoctorGP_LastName"
                                  placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Health link: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                   inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                   name="Appointment_Data_DoctorGP_HealthLink"
                                   placeholder="Health link" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Provider number: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                   inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                   name="Appointment_Data_DoctorGP_ProviderNumber"
                                   placeholder="Provider number" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Email: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                   inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                   name="Appointment_Data_DoctorGP_Email"
                                   placeholder="Email" />                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(M): "
                                   placeholder="Mobile phone"
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_DoctorGP_PhoneNumber" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(H): "
                                   type={2}
                                   placeholder="Home phone"
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_DoctorGP_HomePhoneNumber" />                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(W): "
                                   type={2}
                                   placeholder="Work phone"
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                   inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                   name="Appointment_Data_DoctorGP_WorkPhoneNumber" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputTextarea name="Appointment_Data_DoctorGP_Note"
                                       type={3}
                                       label="Note: "
                                       labelWidth="control-label text-right col-lg-3 col-md-3 col-xs-3"
                                       inputWidth="col-lg-8 col-md-8 col-xs-8"
                                       placeholder="Note" />
                    </div>
                </div>
            </div>
			)
	}
}
export default GPInfo