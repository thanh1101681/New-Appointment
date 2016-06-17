import React, {Component, PropTypes} from 'react'
import DropdownCountry from './dropdown_country'
import InputText from '../../../../modules/inputText'
class SkinInfo extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
        this.$root = $(this.refs.SkinInfo)
    }
    _hide() {
        this.$root.addClass('hide')
    }
    _show() {
       this.$root.removeClass('hide') 
    }
	render() {
		return (
			<div ref="SkinInfo">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="First name: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_FirstName" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Last name: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_LastName" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(M): "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_MobilePhone" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(H): "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_HomePhone" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Address1: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_Address1" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Address2: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_Address1" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Suburb: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_Suburb" />                         
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Postcode: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="PatientAppointment_Skin_Postcode" /> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <DropdownCountry name="PatientAppointment_Country" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <DropdownCountry name="PatientAppointment_Country" />
                    </div>
                </div>
			</div>
			)
	}
}
export default SkinInfo