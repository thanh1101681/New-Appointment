import React, {Component, PropTypes} from 'react'
import Dropdown from '../../../../modules/dropdown'
import Datepicker from '../../../../modules/datepicker'
import Timepicker from '../../../../modules/timepicker'
class Appointment extends Component {
    static propTypes = {
        data: PropTypes.object
    }
	constructor() {
		super()
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
	}
	componentDidMount() {

	}
	render () {
		return (
			<div id="tab_appointment" className="tab-pane active">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="box">
                            <h4 className="form-section font-blue-madison">
                                Appointment: {this.props.data.Code}
                                <a className="btn green margin-left-20">Booking</a>
                            </h4>
                            <Dropdown data={this.dataStatus}
                                      type={2}
                                      label="Status: "
                                      labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                      inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                      name="Appointment_Status" 
                                      ref="Appointment_Status"/> 
                            <Datepicker label="Appointment date :" 
                                        type={2}
                                        labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        name="Appointment_Data_PreferedDate" 
                                        ref="Appointment_Data_PreferedDate"/>
                            <Timepicker label="Appointment time :" 
                                        type={2}
                                        data_default_time="00:00"
                                        labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                        inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                        name="Appointment_Data_PreferedTime"
                                        ref="Appointment_Data_PreferedTime" />
                            <Datepicker label="Request date :" 
                                        type={2}
                                        labelWidth="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5"
                                        inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-6"
                                        name="Appointment_Data_PreferedDate" 
                                        ref="Appointment_Data_PreferedDate"/>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Patient :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Referring practitioner :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Fund type :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Fund :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Has GP referral :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="has_gp_referral" value="yes" className="toggle"/> yes
                                        </label>
                                        <label className="btn btn-sm btn-primary">
                                            <input type="radio" name="has_gp_referral" value="no" className="toggle"/> no
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-4">Type of treament :</label>
                                <div className="col-lg-8 col-md-8">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="status" value="Physiotherapy" className="toggle"/> Physiotherapy
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="status" value="exercise_rehab" className="toggle"/> Exercise Rehab
                                        </label>
                                        <label className="btn btn-sm btn-primary">
                                            <input type="radio" name="status" value="hand_therapy" className="toggle"/> Hand Therapy
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Referral to</h4> 
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Speciality :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Name of speciality (if required) :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Site :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Description :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
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