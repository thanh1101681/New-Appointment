import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Dropdown2 from '../../modules/dropdown2'
import TabLefReadAppt from './directive/read_appt/tab_left'
import Appointment from './directive/read_appt/appointment'
import Patient from './directive/read_appt/patient'
import Company from './directive/read_appt/company'
import Referral from './directive/read_appt/referral'
import Clinical from './directive/read_appt/clinical'
import TreatingPractitioner from './directive/read_appt/treating_practitioner'
import MedicalImage from './directive/read_appt/medical_image'
import ReferringPractitioner from './directive/read_appt/referring_practitioner'
import Services from '../../services/restfulAPI'
class ReadAppt extends Component {
    constructor() {
        super()
        this.dataAppointment = {}
        this.dataSite = []
        this.dataPatient = {}
    }
    _getParam(paramName) {
        //function get query string value
        var qs = (function(a) {
        if (a == "") return {}
        var b = {}
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=', 2)
            if (p.length == 1)
                b[p[0]] = ""
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "))
        }
        return b
    })(window.location.search.substr(1).split('&'))
    return qs[paramName]
    }
    componentDidMount() {
        App.blockUI({
            arget: '#blockui_sample_1_portlet_body',
            animate: true
        })
        var uid = this._getParam('uid')
        Promise.all([Services.readAppointment(uid), Services.listSite()])
        .then(function(responseAll){
                var data = []
                _.forEach(responseAll[1].data.data, function(site_v, site_i) {
                    data.push({ value: site_v.ID, name: site_v.SiteName })
                })
                this.dataSite = data
                var dataAppointment = responseAll[0].data
                this.dataAppointment['hasGP'] = 'N'
                dataAppointment.RequestDate = moment(dataAppointment.RequestDate).format('DD/MM/YYYY')
                if(dataAppointment.FromTime) {
                    dataAppointment.FromDate = moment(dataAppointment.FromTime).format('DD/MM/YYYY')
                    dataAppointment.FromTime = moment(dataAppointment.FromTime).format('HH:mm')
                }
                _.forEach(dataAppointment, function(appt_v, appt_i){
                    if(appt_i=='Data') {
                       this.dataAppointment['Appointment.Data.Patient.FullName'] = appt_v.Patient.FullName
                       this.dataAppointment['Appointment.Data.Description'] = appt_v.Description
                       if(appt_v &&
                        appt_v.DoctorGP) {
                        this.dataAppointment['Appointment.Data.DoctorGP.FullName'] = appt_v.DoctorGP.FullName
                        this.dataAppointment['hasGP'] = 'Y'
                       }
                    }
                    else {
                        this.dataAppointment['Appointment.' + appt_i] = appt_v
                    }
                }.bind(this))
                this.dataAppointment['Appointment.Data.PreferedDate'] = moment(dataAppointment.Data.PreferedDate, 'YYYY-MM-DD HH:mm:ss Z').format('DD/MM/YYYY')
                this.dataAppointment['Appointment.Data.PreferedTime'] = moment(dataAppointment.Data.PreferedTime, 'HH:mm').format('HH:mm')
                this.forceUpdate()
                App.unblockUI()
        }.bind(this), function(err){
            toastr.error('Load Appointment failed', 'Error')
            App.unblockUI()
        })
    }
    _onChangeTab(val) {
        switch(val) {
            case 'Appointment': 
                this._onTabAppointment()
            break
            case 'Patient':
                this._onTabPatient()
            break
            case 'ReferringPractitioner':
                this._onTabReferringPractitioner()
            break
            default: break
        }
    }
    _onTabAppointment() {
    }
    _onTabPatient() {
        var uid = this._getParam('uid')
        Services.readPatient(uid)
            .then(function(response){
                var dataPatient = response.data
                this.dataPatient['Appointment.Data.Patient.Title'] = dataPatient.Data.Patient.Title
                this.dataPatient['Appointment.Data.Patient.FirstName'] = dataPatient.Data.Patient.FirstName
                this.dataPatient['Appointment.Data.Patient.MiddleName'] = dataPatient.Data.Patient.MiddleName
                this.dataPatient['Appointment.Data.Patient.LastName'] = dataPatient.Data.Patient.LastName
                this.dataPatient['Appointment.Data.Patient.ReferredName'] = dataPatient.Data.Patient.ReferredName
                this.dataPatient['Appointment.Data.Patient.PreviousName'] = dataPatient.Data.Patient.PreviousName
                this.forceUpdate()
            }.bind(this), function(err){
                console.log('err', err)
            })
    }
    _onTabCompany() {

    }
    _onTabReferringPractitioner() {

    }
    render() {
        return (
            <div className="page-content">
                    <div className="portlet light bordered">
                        <div className="portlet-title">
                            <div className="caption">
                                <i className=" icon-list font-blue"></i>
                                <span className="caption-subject font-blue bold uppercase"> Appointment detail
                                </span>
                            </div>
                            <div className="actions">
                                <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                    <i className="icon-cloud-upload"></i>
                                </a>
                                <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                    <i className="icon-wrench"></i>
                                </a>
                                <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                    <i className="icon-trash"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portlet-body form">
                            <form className="form-horizontal">
                                <div className="form-body">
                                    <div className="tab-vertical-custom margin-bottom-10">
                                        {/*Tab left*/}
                                        <TabLefReadAppt onChange={this._onChangeTab.bind(this)}/>
                                        <div className="tab-content">
                                            {/*Appointment*/}
                                            <Appointment data={this.dataAppointment} defaultValue={{dataSite: this.dataSite}} />
                                            {/*Patient*/}
                                            <Patient data={{dataPatient:this.dataPatient}}/>
                                            {/*Company*/}
                                            <Company />
                                            {/*Referral*/}
                                            <Referral />
                                            {/*Clinical*/}
                                            <Clinical />
                                            {/*Treating Practitioner*/}
                                            <TreatingPractitioner />
                                            {/*Medical Image*/}
                                            <MedicalImage />
                                            {/*Referring Practitioner*/}
                                            <ReferringPractitioner />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-actions right">
                                    <button type="button" className="btn btn-default">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
    }
}

render(
    <ReadAppt />,
    document.getElementById('app')
)