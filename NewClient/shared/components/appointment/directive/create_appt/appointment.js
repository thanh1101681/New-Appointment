import React, {Component, PropTypes} from 'react'
import Datepicker from '../../../../modules/datepicker'
import Timepicker from '../../../../modules/timepicker'
import Dropdown from '../../../../modules/dropdown'
import RadioSite from './radio_site'
import DropdownService from './dropdown_service'
class StepAppointment extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="tab-pane active" id="appointment">
                <h3 className="block text-success">Appointment information</h3>
                <Datepicker label="Prefered date :" 
                    type={2}
                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                    name="Appointment_PreferedDate" />
                <Timepicker label="Prefered time :" 
                    type={2}
                    data_default_time="00:00"
                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                    name="Appointment_PreferedTime" />
                <div className="row margin-bottom-20">
                    <DropdownService name="Appointment_Services_ID" />
                </div>
                <RadioSite name="Appointment_SiteID" />
                <div className="form-group">
                    <label className="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3">Problem description :</label>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <textarea name="Appointment_Description" className="form-control"></textarea>
                    </div>
                </div>
            </div>
			)
	}
}
export default StepAppointment