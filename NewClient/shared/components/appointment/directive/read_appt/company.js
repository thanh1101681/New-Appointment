import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import Dropdown from '../../../../modules/dropdown'
import InputTextarea from '../../../../modules/inputTextarea'

class Company extends Component {
    static propTypes = {
        data: PropTypes.object
    }
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div id="tab_company" className="tab-pane">
                <div className="box">
                    <h4 className="form-section font-blue-madison">Company information</h4>   
                    <InputText label="Company name: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Company name" />
                    <InputTextarea type={3}
                                   label="Other special needs: "
                                   labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                   inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                   name="Appointment_Data_Description"
                                   ref="Appointment_Data_Description"
                                   placeholder="Other special needs" />
                    <InputText label="Site name: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Site name" />
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
                    <InputText label="State: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="State" />
                    <Dropdown data={this.props.data.dataCountry}
                                  type={2}
                                  label="Country: "
                                  labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                  inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                  name="Appointment_Data_Patient_Country" 
                                  ref="Appointment_Data_Patient_Country" />
                    <InputText label="Contact name: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Contact name" />
                    <InputText label="Contact number: "
                           type={2}
                           labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                           inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                           name="Appointment_Data_Patient_PreviousName"
                           ref="Appointment_Data_Patient_PreviousName"
                           placeholder="Contact number" />
                </div>                               
            </div>
			)
	}
}
Company.defaultProps = {
    data: {
        dataCountry: []
    }
}
export default Company