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
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_FirstName" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Last name: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_LastName" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Health link: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_HealthLink" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Provider number: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_ProviderNumber" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Email: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_Email" />                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(W): "
                                   placeholder="Work phone"
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_WorkPhone" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(M): "
                                   type={2}
                                   placeholder="Mobile phone"
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_MobilePhone" />                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(H): "
                                   type={2}
                                   placeholder="Home phone"
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_GP_HomePhone" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <InputTextarea name="PatientAppointment_GP_Note"
                                       type={3}
                                       label="Note: "
                                       labelWidth="control-label text-right col-lg-3 col-md-3 col-xs-3"
                                       inputWidth="col-lg-8 col-md-8 col-xs-8" />
                    </div>
                </div>
            </div>
			)
	}
}
export default GPInfo