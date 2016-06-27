import React, {Component, PropTypes} from 'react'
import Datepicker from '../../../../modules/datepicker'
import Timepicker from '../../../../modules/timepicker'
import Dropdown from '../../../../modules/dropdown'
import InputTextarea from '../../../../modules/inputTextarea'
import RadioGroup from '../../../../modules/radio_group'
import Services from '../../../../services/restfulAPI'
class StepAppointment extends Component {
    static propTypes = {
        defaultValue:PropTypes.object,
        data: PropTypes.object
    }
	constructor() {
		super()
        this.dataService = []
        this.dataSite = []
        this.dataType = [{
            value: 'Onsite',
            name: 'Onsite'
        }, {
            value: 'Telehealth',
            name: 'Telehealth'
        }]
	}
	componentDidMount() {
	}
    componentDidUpdate() {
        //set value default
         for (var keyObj in this.refs) {
             if (keyObj &&
                 this.props.defaultValue[keyObj] &&
                 this.refs[keyObj]) {
                 this.refs[keyObj]._setValue(this.props.defaultValue[keyObj])
             }
         }
    }
    _onChangeSite() {
    }
	render() {
		return (
			<div className="tab-pane active" id="appointment">
                <h3 className="block text-success">Appointment information</h3>
                <div className="row">
                    <Dropdown data={this.dataType}
                      type={2}
                      label="Type :"
                      labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                      name="Appointment_Type" 
                      ref="Appointment_Type"/>
                </div>
                <Datepicker label="Prefered date :" 
                    type={2}
                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                    name="Appointment_Data_PreferedDate" 
                    ref="Appointment_Data_PreferedDate"/>
                <Timepicker label="Prefered time :" 
                    type={2}
                    data_default_time="00:00"
                    labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                    inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                    name="Appointment_Data_PreferedTime"
                    ref="Appointment_Data_PreferedTime" />
                <div className="row margin-bottom-20">
                    <Dropdown data={this.props.data.dataService}
                      type={2}
                      label="Service :"
                      labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                     name="Service_ID" 
                     ref="Service_ID"/>
                </div>
                <RadioGroup classGroup="row margin-bottom-20" 
                            nameGroup="Site: "
                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                            classRadioList="btn-group"
                            classLabel="btn btn-sm btn-default"
                            classInput="toggle"
                            data={this.props.data.dataSite}
                            name="Appointment_SiteID"
                            onChange={this._onChangeSite.bind(this)}
                            ref="Appointment_SiteID"
                             />
                <InputTextarea name="PatientAppointment_OtherSpecialNeeds"
                               type={3}
                               label="Other special needs: "
                               labelWidth="control-label text-right col-lg-3 col-md-3 col-xs-3"
                               inputWidth="col-lg-8 col-md-8 col-xs-8"
                               name="Appointment_Data_Description"
                               ref="Appointment_Data_Description"
                               placeholder="Other special needs" />
            </div>
			)
	}
}
StepAppointment.defaultProps = {
    defaultValue: {},
    data: {}
}
export default StepAppointment