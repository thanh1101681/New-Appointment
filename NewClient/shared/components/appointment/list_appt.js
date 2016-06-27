import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import HeadListAppt from './directive/list_appt/head_list_appt'
import BodyListAppt from './directive/list_appt/body_list_appt'
import FootListAppt from './directive/list_appt/foot_list_appt'
import Services from '../../services/restfulAPI'

class ListAppt extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this._getListAppointment({
            data: {
                Limit: 20
            }
        })
    }
    _onFilter(dataFilter) {
        this._getListAppointment({
            data: dataFilter
        })
    }
    _getListAppointment(data) {
        Services.listAppointment(data)
            .then(function(apptList){
                this.pagination = apptList.data.count
                this.dataAppointment = apptList.data.rows
                this.forceUpdate()
            }.bind(this), function(err){
                console.log('err', err)
            })
    }
    render() {
        return (
            <div className="page-content">
                    <div className="portlet light bordered">
                        <div className="portlet-title">
                            <div className="caption">
                                <i className=" icon-list font-blue"></i>
                                <span className="caption-subject font-blue bold uppercase"> List of appointment
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
                        <div className="portlet-body">
                            <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20 margin-bottom-20">
                                <table className="table table-hover table-light">
                                    <HeadListAppt onFilter={this._onFilter.bind(this)}/>
                                    <BodyListAppt data={this.dataAppointment}/>
                                    <FootListAppt />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
render(
    <ListAppt />,
    document.getElementById('app')
)