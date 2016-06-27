import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import Dropdown from '../../../../modules/dropdown'
class KinInfo extends Component {
  static propTypes = {
    data: PropTypes.object
  }
	constructor() {
		super()
    //set data default State
    this.dataState = [
     { value: 'VIC', name: 'Victoria' },
     { value: 'TAS', name: 'Tasmania' },
     { value: 'QLD', name: 'Queensland' },
     { value: 'NSW', name: 'New South Wales' },
     { value: 'WA', name: 'Western Australia' },
     { value: 'NT', name: 'Northern Territory' },
     { value: 'ACT', name: 'Australian Capital Territory' }
 ]

	}
	componentDidMount() {
        this.$root = $(this.refs.PatientKinInfo)
    }
  componentDidUpdate() {
    //set value default
        for(var keyObj in this.refs){
            if(keyObj &&
                this.props.defaultValue[keyObj] &&
                this.refs[keyObj]){
                this.refs[keyObj]._setValue(this.props.defaultValue[keyObj])
            }
        }
  }
    _hide() {
        this.$root.addClass('hide')
    }
    _show() {
       this.$root.removeClass('hide') 
    }
	render() {
		return (
			<div ref="PatientKinInfo">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="First name: "
                                   required={true}
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_FirstName"
                                  placeholder="First name" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Last name: "
                                   required={true}
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_LastName"
                                  placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Address1: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_Address1"
                                  placeholder="Adress 1" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Address2: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_Address2"
                                  placeholder="Address 2" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Suburb: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_Suburb"
                                  placeholder="Suburb" />                         
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Postcode: "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_Postcode"
                                  placeholder="Postcode" /> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <Dropdown data={this.dataState}
                        type={2}
                        label="State :"
                        labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                            inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                            name="Appointment_Data_PatientKin_State" 
                            ref="Appointment_Data_PatientKin_State" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <Dropdown data={this.props.data.dataCountry}
                        type={2}
                        label="Country :"
                        labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                            inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                            name="Appointment_Data_PatientKin_Country" 
                            ref="Appointment_Data_PatientKin_Country" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(M): "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_PhoneNumber" 
                                  placeholder="Mobile phone"/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(H): "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_HomePhoneNumber"
                                  placeholder="Home phone" />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <InputText label="Contact number(W): "
                                   type={2}
                                   labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                  inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                  name="Appointment_Data_PatientKin_WorkPhoneNumber"
                                  placeholder="Work phone" />
                    </div>
                </div>
			</div>
			)
	}
}
KinInfo.defaultProps = {
  data: {}
}
export default KinInfo