import { render } from 'react-dom'
import React, { Component, PropTypes } from 'react'
class Modal extends Component {
    constructor() {
        super()
        this.dataModal = {}
    }
    getInitialState() {
        return {}
    }
    componentDidMount() {}
    render() {
    	return (
    		  <div className="form-horizontal">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Is the referrer the patients usual GP ?</label>
                            <div className="col-lg-9 col-md-9">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="referrer" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="referrer" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">If no, name of patients usual GP</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="name_of_patients_usual_GP"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Contact number</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="contact_number"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Fax number</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="Fax_number"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row margin-top-40">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">If the patient has been reffered to this speciality for the same condition before, do they need to be referred to the same place again ?</label>
                            <div className="col-lg-6 col-md-6">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="reffered_speciality" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="reffered_speciality" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">Is the patient suitable for a telehealth consult ?</label>
                            <div className="col-lg-6 col-md-6">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="suitable_telehealth_consult" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="suitable_telehealth_consult" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">Length of referral ?</label>
                            <div className="col-lg-6 col-md-6">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="length_of_referral" value="3_months" />&nbsp; 3 months
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="length_of_referral" value="12_months" />&nbsp; 12 months
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="length_of_referral" value="indefinite" />&nbsp; Indefinite
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">Is this a renewed referral ?</label>
                            <div className="col-lg-6 col-md-6">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="renewed_referral" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="renewed_referral" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row margin-top-20 margin-bottom-20">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-lg-offset-2 col-md-offset-2">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margin-bottom-10">
                                <a className="btn btn-block green" onClick={this._openModalSkinCancer}>Skin cancer</a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margin-bottom-10">
                                <a className="btn btn-block green" onClick={this._openModalHandCondition}>Hand condition</a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margin-bottom-10">
                                <a className="btn btn-block green" onClick={this._openModalPNS}>PNS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Reason for referral/Presenting Problem</label>
                            <div className="col-lg-8 col-md-8">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                        <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20 margin-bottom-20">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr className="uppercase">
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <a className="btn green">Select document</a>&nbsp;
                        <a className="btn green">Select images</a>&nbsp;
                        <a className="btn red">Remove all</a>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">History of previous skin cancers and treatmens</label>
                            <div className="col-lg-9 col-md-9">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="history_of_previous_skin_cancers_and_treatmens" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="history_of_previous_skin_cancers_and_treatmens" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Reason for referral/Presenting Problem</label>
                            <div className="col-lg-8 col-md-8">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                        <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20 margin-bottom-20">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr className="uppercase">
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>assets/global/images/hand.jpg</td>
                                        <td>13 kbyte</td>
                                        <td>20/08/2016</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>assets/global/images/head.jpg</td>
                                        <td>23 kbyte</td>
                                        <td>20/08/2016</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a className="btn green">Select document</a>&nbsp;
                        <a className="btn green">Select images</a>&nbsp;
                        <a className="btn red">Remove all</a>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">History of previous hand surgery</label>
                            <div className="col-lg-9 col-md-9">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="history_of_previous_hand_surgery" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="history_of_previous_hand_surgery" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Reason for referral/Presenting Problem</label>
                            <div className="col-lg-8 col-md-8">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                        <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20 margin-bottom-20">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr className="uppercase">
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <a className="btn green">Select document</a>&nbsp;
                        <a className="btn green">Select images</a>&nbsp;
                        <a className="btn red">Remove all</a>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Pathology provider</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="pathology_provider"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Radiology provider</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="Radiology_provider"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Other notes</label>
                            <div className="col-lg-8 col-md-8">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    		)
    }
}
export default Modal
