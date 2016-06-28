import React, {Component, PropTypes} from 'react'
class Patient extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div id="tab_patient" className="tab-pane">
                <div className="tabbable-custom">
                    <ul className="nav nav-tabs ">
                        <li className="active">
                            <a href="#tab_basic" data-toggle="tab"> Basic info </a>
                        </li>
                        <li>
                            <a href="#tab_contact" data-toggle="tab"> Contact info </a>
                        </li>
                        <li>
                            <a href="#tab_medicare" data-toggle="tab"> Medicare info </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab_basic">
                            <h4 className="form-section font-blue-madison">Basic information</h4> 
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Title :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <select className="form-control">
                                        <option value="">Select title</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Master">Master</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">First name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Middle name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Last name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Preferred name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Previous name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Country of birth :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Date of birth :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control date-picker" data-date-format="dd/mm/yyyy" placeholder="dd/mm/yyyy" readOnly="true"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Marital status :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Gender :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-7">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="gender" value="male" className="toggle"/> male
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="gender" value="female" className="toggle"/> female
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="other" value="female" className="toggle"/> other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Other gender:</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-7">
                                    <input type="text" className="form-control" placeholder="Other" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-4 col-sm-4">Indigenous status :</label>
                                <div className="col-lg-8 col-md-8 col-sm-8 ">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="indigenous_status" value="none" className="toggle"/> None
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="indigenous_status" value="aboriginal" className="toggle"/> Aboriginal
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="indigenous_status" value="torres_strait_islander" className="toggle"/> Torres Strait Islander
                                        </label>
                                    </div>
                                </div>
                            </div>  
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Interpreter required :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="interpreter_required" value="yes" className="toggle"/> Yes
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="interpreter_required" value="no" className="toggle"/> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Other special needs :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div> 
                        </div>
                        <div className="tab-pane" id="tab_contact">
                            <h4 className="form-section font-blue-madison">Contact information</h4> 
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Mobile :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Home phone :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Work phone :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Email :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Fax :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Address1 :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Address2 :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Suburb :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Postcode :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">State :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Country :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab_medicare">
                            <h4 className="form-section font-blue-madison">Medicare information</h4>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">First name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Last name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Relationship :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div> 
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Medicare eligible :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="medical_eligible" value="yes" className="toggle"/> Yes
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="medical_eligible" value="no" className="toggle"/> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Medicare number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Medicare reference number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Expiry date :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control date-picker" data-date-format="dd/mm/yyyy" placeholder="dd/mm/yyyy" readOnly="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			)
	}
}
export default Patient