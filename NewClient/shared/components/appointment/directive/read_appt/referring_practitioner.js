import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import Dropdown from '../../../../modules/dropdown'

class ReferringPractitioner extends Component {
    static propTypes = {
        data: PropTypes.object
    }
	constructor() {
		super()
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

	}
	render() {
		return (
			<div id="tab_referring" className="tab-pane">
                <div className="box">
                    <h4 className="form-section font-blue-madison">Referring practitioner</h4>   
                    <InputText label="Healthlink ID: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Healthlink ID" />
                    <InputText label="Provider number: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Provider number" />
                    <InputText label="First name: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="First name" />
                    <InputText label="Middle name: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Middle name" />
                    <InputText label="Last name: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Last name" />
                    <InputText label="Work phone: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Work phone" />
                    <InputText label="Home phone: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Home phone" />
                    <InputText label="Fax: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Fax" />
                    <InputText label="Address1: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Address1" />
                    <InputText label="Address2: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Address2" />
                    <InputText label="Suburb: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Suburb" />
                    <InputText label="Postcode: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Postcode" />
                    <Dropdown data={this.dataState}
                                  type={2}
                                  label="State: "
                                  labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                  inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                  name="Appointment_Data_Patient_Country" 
                                  ref="Appointment_Data_Patient_Country" />
                    <Dropdown data={this.props.data.dataCountry}
                                  type={2}
                                  label="Country: "
                                  labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                  inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                  name="Appointment_Data_Patient_Country" 
                                  ref="Appointment_Data_Patient_Country" />
                </div>
            </div>
			)
	}
}
ReferringPractitioner.defaultProps = {
    data: {
        dataCountry: []
    }
}
export default ReferringPractitioner