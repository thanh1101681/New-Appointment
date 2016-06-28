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
    }
    componentDidMount() {
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
        Services.readAppointment(qs['uid'])
            .then(function(response){
                this.dataAppointment = response.data
                this.forceUpdate()
            }.bind(this), function(err){
                toastr.error('Load Appointment failed', 'Error')
            })
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
                                        <TabLefReadAppt />
                                        <div className="tab-content">
                                            {/*Appointment*/}
                                            <Appointment data={this.dataAppointment} />
                                            {/*Patient*/}
                                            <Patient />
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