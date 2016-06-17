import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import StepMenuCreateAppt from './directive/create_appt/step_menu'
import StepAppointment from './directive/create_appt/appointment'
import StepPatient from './directive/create_appt/patient'
import Form from '../../modules/form'
import DataObjectParser from 'dataobject-parser'
import ValidateCreateAppt from './directive/create_appt/validate'
class CreateAppt extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        FormWizard.init({
            validate: ValidateCreateAppt
        })
    }
    _onSubmit() {
        //replace all charater "find" by "replace"
        function replaceAll(str, find, replace) {
             return str.replace(new RegExp(find, 'g'), replace)
        }
        //parse data string to json with DataObjectParser
        var daOP = new DataObjectParser()
        var serializedObject = this.refs.formSubmit._getSerializedObject()
       _.forEach(serializedObject, function(val, key){
            var keyTemp = replaceAll(key,'_','.')
            daOP.set(keyTemp, val)
        })
       console.log(daOP._data)
    }
    render() {
        return (
                <div className="page-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portlet light bordered" id="form_wizard_1">
                                <div className="portlet-title">
                                    <div className="caption">
                                        <i className=" icon-layers font-red"></i>
                                        <span className="caption-subject font-red bold uppercase"> Create new appointment -
                                            <span className="step-title"> Step 1 of 5 </span>
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
                                    <Form ref="formSubmit" onSubmit={this._onSubmit.bind(this)} className="form-horizontal" id="submit_form">
                                        <div className="form-wizard">
                                            <div className="form-body">
                                        {/*menu*/}
                                               <StepMenuCreateAppt />
                                                <div id="bar" className="progress progress-striped" role="progressbar">
                                                    <div className="progress-bar progress-bar-success"> 
                                                    </div>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="alert alert-danger display-none">
                                                        <a className="close" data-dismiss="alert"></a> 
                                                        You have some form errors. Please check below. 
                                                    </div>
                                                    <div className="alert alert-success display-none">
                                                        <a className="close" data-dismiss="alert"></a> 
                                                        Your form validation is successful! 
                                                    </div>
                                                {/*Appointment infomation*/}
                                                    <StepAppointment />
                                                {/*Patient infomation*/}
                                                    <StepPatient />
                                                    <div className="tab-pane" id="consent">
                                                        <h3 className="block text-success">Consent</h3>
                                                    </div>
                                                    <div className="tab-pane" id="referral">
                                                        <h3 className="block text-success">Referral forms</h3>
                                                    </div>
                                                    <div className="tab-pane" id="summary">
                                                        <h3 className="block text-success">Summary</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-actions right">
                                                <a href="javascript:;" className="btn default button-previous">
                                                    <i className="fa fa-angle-left"></i> Back </a>
                                                <a type="submit" href="javascript:;" className="btn btn-outline green button-next"> Continue
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                                <button type="submit" href="javascript:;" className="btn green button-submit"> Submit
                                                    <i className="fa fa-check"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}
render(
    <CreateAppt />,
    document.getElementById('app')
    )