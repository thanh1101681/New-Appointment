import React, {Component, PropTypes} from 'react'
import Dropdown from '../../../../modules/dropdown'
import Datepicker from '../../../../modules/datepicker'
import Timepicker from '../../../../modules/timepicker'
import InputText from '../../../../modules/inputText'
import RadioGroup from '../../../../modules/radio_group'
import InputTextarea from '../../../../modules/inputTextarea'

class Appointment extends Component {
    static propTypes = {
        data: PropTypes.object
    }
	constructor() {
		super()
        this.dataYesNo = [{
            value: 'Y',
            name: 'Yes'
        },{
            value: 'N',
            name: 'No'
        }]
        this.dataStatus = [{
            value: 'Received',
            name: 'Received'
        }, {
            value: 'Appoint pendding',
            name: 'Appoint Pendding'
        }, {
            value: 'Appoint time',
            name: 'Appoint Time'
        }, {
            value: 'Attended',
            name: 'Attended'
        }, {
            value: 'Wait list surgery',
            name: 'Wait List Surgery'
        }, {
            value: 'Finished',
            name: 'Finished'
        }, {
            value: 'Canceled',
            name: 'Canceled'
        }]
        this.dataTypeOfTreament = [{
            value: 'Physiotherapy',
            name: 'Physiotherapy'
        },{
            value: 'Exercise rehab',
            name: 'Exercise rehab'
        },{
            value: 'Hand therapy',
            name: 'Hand therapy'
        }]
	}
	componentDidMount() {

	}
  componentDidUpdate() {
    //set value default
         for (var keyObj in this.refs) {
             if (keyObj &&
                 this.props.data[keyObj] &&
                 this.refs[keyObj]) {
                 this.refs[keyObj]._setValue(this.props.data[keyObj])
             }
         }
  }
	render () {
		return (
			<div id="tab_appointment" className="tab-pane active">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="box">
                            <h4 className="form-section font-blue-madison">
                                Appointment: {this.props.data['Appointment.Code']}
                                <a className="btn green margin-left-20">Booking</a>
                            </h4>
                            <Dropdown data={this.dataStatus}
                                      type={2}
                                      label="Status: "
                                      labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                      ref="Appointment.Status"/> 
                            <Datepicker label="Appointment date :" 
                                        type={2}
                                        labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        ref="Appointment.Data.PreferedDate"/>
                            <Timepicker label="Appointment time :" 
                                        type={2}
                                        data_default_time="00:00"
                                        labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                        inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                        ref="Appointment.Data.PreferedTime" />
                            <Datepicker label="Request date: " 
                                        type={2}
                                        labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                        inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                        ref="Appointment.Data.PreferedDate"/>
                            <InputText label="Patient: "
                                       type={2}
                                       readOnly={true}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.Data.Patient.FullName" />
                            <InputText label="Referring practitioner: "
                                       type={2}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.Data.Patient.FullName" />
                            <InputText label="Fund type: "
                                       type={2}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.Data.Patient.FullName" />
                            <InputText label="Fund: "
                                       type={2}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.Data.Patient.FullName" />
                            <RadioGroup classGroup="row margin-top-10"
                                        nameGroup="Has GP referral: "
                                        classLabelGroup="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                        classInputGroup="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        ref="Appointment.SiteID" />
                            <RadioGroup classGroup="row margin-top-10"
                                        nameGroup="Type of treament: "
                                        classLabelGroup="ccontrol-label text-right col-lg-3 col-md-4"
                                        classInputGroup="col-lg-8 col-md-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataTypeOfTreament}
                                        ref="Appointment.SiteID" />
                        </div>
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Referral to</h4> 
                            <InputText label="Speciality: "
                                       type={2}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.Data.Patient.FullName" />
                            <InputText label="Name of speciality (if required): "
                                       type={2}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.Data.Patient.FullName" />
                            <InputText label="Site: "
                                       type={2}
                                       labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                       inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                       ref="Appointment.SiteID" />
                            <InputTextarea type={3}
                               label="Description: "
                               labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                               inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                               ref="Appointment.Description"
                               placeholder="Description" />
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}
Appointment.defaultProps = {
    data: {}
}
export default Appointment