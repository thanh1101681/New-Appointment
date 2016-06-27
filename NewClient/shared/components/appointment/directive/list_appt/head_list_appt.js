import React, {Component, PropTypes} from 'react'
import InputText from '../../../../modules/inputText'
import Datepicker from '../../../../modules/datepicker'
import Dropdown from '../../../../modules/dropdown'
import DataObjectParser from 'dataobject-parser'
class TheadListAppt extends Component {
	constructor() {
		super()
        this.dataReferralTracking = [{
            value: '',
            name: 'Select referral tracking'
        },
        {
            value: 'Received',
            name: 'Received'
        }, {
            value: 'Appoint Pendding',
            name: 'Appoint Pendding'
        }, {
            value: 'Appoint Time',
            name: 'Appoint Time'
        }, {
            value: 'Attended',
            name: 'Attended'
        }, {
            value: 'Wait List Surgery',
            name: 'Wait List Surgery'
        }, {
            value: 'Finished',
            name: 'Finished'
        }, {
            value: 'Canceled',
            name: 'Canceled'
        }]
        this.dataAppointmentType = [{
            value: '',
            name: 'Select type'
        },{
            value: 'Telehealth',
            name: 'Telehealth'
        },{
            value: 'Onsite',
            name: 'Onsite'
        },{
          value: 'PreEmployment',
          name: 'PreEmployment'  
        },{
            value: 'Campaign',
            name: 'Campaign'
        },{
            value: 'RediSite',
            name: 'RediSite'
        }]
	}
	componentDidMount() {

	}
    _onChangeFilter() {
        var daOP = new DataObjectParser()
        var dataFilter = {}
        var arrayKeyFormatDate = ['Range[0].Appointment.RequestDate[0]',
                                  'Range[0].Appointment.RequestDate[1]',
                                  'Range[1].Appointment.FromTime[0]',
                                  'Range[1].Appointment.FromTime[1]']
        for(var key in this.refs) {
            if(key &&
                this.refs[key]._getValue()) {
                var val = this.refs[key]._getValue()
            //check key format date to parse timezone
            var index = _.findIndex(arrayKeyFormatDate, function(o){
                return o == key
            })
            if(index != -1) {
                val = moment(val, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss Z')
            }
            daOP.set(key,val)
            }
        }
        if(typeof this.props.onFilter !== 'undefined') {
            this.props.onFilter(daOP._data)
        }
    }
	render() {
		return (
			<thead>
                <tr className="uppercase">
                    <th width="1">#</th>
                    <th style={{'minWidth':'250px'}}>Patient</th>
                    <th style={{'minWidth':'250px'}}>Treating Practitioner</th>
                    <th style={{'minWidth':'150px'}}>Submit Date</th>
                    <th style={{'minWidth':'200px'}}>Appointment Type</th>
                    <th style={{'minWidth':'150px'}}>Appointment Date</th>
                    <th style={{'minWidth':'250px !important'}}>Referral Tracking</th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td><InputText ref="Search[0].Appointment.Data.Patient.FullName" type={0} placeholder="Filter patient" onEnter={this._onChangeFilter.bind(this)} /></td>
                    <td><InputText ref="Search[1].Doctor.FullName" type={0} placeholder="Filter treating practitioner" onEnter={this._onChangeFilter.bind(this)} /></td>
                    <td>
                        <Datepicker ref="Range[0].Appointment.RequestDate[0]" type={0} placeholder="From date" onChange={this._onChangeFilter.bind(this)}/>
                        <Datepicker ref="Range[0].Appointment.RequestDate[1]" type={0} placeholder="To date"  onChange={this._onChangeFilter.bind(this)}/>
                    </td>
                    <td>
                        <Dropdown ref="Filter[0].Appointment.Type" data={this.dataAppointmentType}
                                  type={0} 
                                  onChange={this._onChangeFilter.bind(this)}/>
                    </td>
                    <td>
                        <Datepicker ref="Range[1].Appointment.FromTime[0]" type={0} placeholder="From date" onChange={this._onChangeFilter.bind(this)}/>
                        <Datepicker ref="Range[1].Appointment.FromTime[1]" type={0} placeholder="To date" onChange={this._onChangeFilter.bind(this)}/>
                        
                    </td>
                    <td>
                        <Dropdown ref="Filter[0].Appointment.Status"
                                  data={this.dataReferralTracking}
                                  type={0} 
                                  onChange={this._onChangeFilter.bind(this)}/>
                    </td>
                    <td>
                    </td>
                </tr>
            </thead>
			)
	}
}
export default TheadListAppt
