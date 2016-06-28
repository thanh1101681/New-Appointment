import React, {Component, PropTypes} from 'react'
import Dropdown2 from '../../../../modules/dropdown2'

class Referral extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div id="tab_referral" className="tab-pane">
                <div className="tabbable-custom">
                    <ul className="nav nav-tabs ">
                        <li className="active">
                            <a href="#tab_referral_info" data-toggle="tab"> Referral information</a>
                        </li>
                        <li>
                            <a href="#tab_referral_ex" data-toggle="tab"> Extra information </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab_referral_info">
                            <h4 className="form-section font-blue-madison">Referral information</h4>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-7">Has the referral been discussed with a registrar or consultant?</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-5">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="referral_discussed" value="yes" className="toggle"/> yes
                                        </label>
                                        <label className="btn btn-sm btn-primary">
                                            <input type="radio" name="referral_discussed" value="no" className="toggle"/> no
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Clinical name :</label>
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
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Referral advice given :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group margin-bottom-40 margin-top-40">
                                <label className="control-label text-right col-lg-3 col-md-2 col-sm-5 col-xs-1"></label>
                                <div className="col-lg-8 col-md-10 col-sm-6 col-xs-11">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="motor_work" value="motor_vehicle_accident" className="toggle"/> Motor vehicle accident
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="motor_work" value="work_injury" className="toggle"/> Work injury
                                        </label>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Patient usual GP :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="patient_usual_gp" value="yes" className="toggle"/> yes
                                        </label>
                                        <label className="btn btn-sm btn-primary">
                                            <input type="radio" name="patient_usual_gp" value="no" className="toggle"/> no
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Name of patients usual GP :</label>
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
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Fax number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-7 col-sm-5 col-xs-5">Need to be referred to the same place again :</label>
                                <div className="col-lg-8 col-md-5 col-sm-7 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="referred_to_the_same_place_again" value="yes" className="toggle"/> Yes
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="referred_to_the_same_place_again" value="no" className="toggle"/> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Suitable for a telehealth consult :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="suitable_for_a_telehealth_consult" value="yes" className="toggle"/> Yes
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="suitable_for_a_telehealth_consult" value="no" className="toggle"/> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-4 col-sm-4">Length of referral :</label>
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-primary">
                                            <input type="radio" name="length_of_referral" value="3_months" className="toggle"/> 3 months
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="length_of_referral" value="12_months" className="toggle"/> 12 months
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="length_of_referral" value="indefinite" className="toggle"/> Indefinite
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Is this renewed referral?</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <div className="btn-group" data-toggle="buttons">
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="renewed_referral" value="yes" className="toggle"/> Yes
                                        </label>
                                        <label className="btn btn-sm btn-default">
                                            <input type="radio" name="renewed_referral" value="no" className="toggle"/> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab_referral_ex">
                            <h4 className="form-section font-blue-madison">&nbsp;</h4> 
                            <div className="form-group">
                                <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Reason for referral/Presenting Problem :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                    <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr className="uppercase">
                                                    <th width="1">#</th>
                                                    <th>file name</th>
                                                    <th width="1">view</th>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td><Dropdown2 data={[{value: 1, name: "23232"},{value: 2, name: "dsdsds"},]}/></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td> 
                                                    <td className="primary-link">assetes/global/images/head.jpg</td>
                                                    <td><a className="btn btn-xs btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td> 
                                                    <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                    <td><a className="btn btn-xs btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <label className="margin-top-40 margin-bottom-20">Skin cancer :</label>
                            <div className="row">

                                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
                                    <div className="form-group">
                                        <div className="col-lg-12 ">
                                            <div className="btn-group-vertical btn-block" data-toggle="buttons">
                                                <label className="btn btn-md btn-primary">
                                                    <input type="checkbox" className="toggle"/> BCC
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="checkbox" className="toggle"/> SCC
                                                </label>
                                                <label className="btn btn-md btn-primary">
                                                    <input type="checkbox" className="toggle"/> Melanoma
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="checkbox" className="toggle"/> Merkel`s
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="checkbox" className="toggle"/> Others
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-9 col-xs-8">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_bcc" value="0_1cm" className="toggle"/> 0-1 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_bcc" value="0_1cm" className="toggle"/> 1-2 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_bcc" value="0_1cm" className="toggle"/> > 2cm
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_scc" value="0_1cm" className="toggle"/> 0-1 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_scc" value="0_1cm" className="toggle"/> 1-2 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_scc" value="0_1cm" className="toggle"/> > 2cm
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_melanoma" value="0_1cm" className="toggle"/> 0-1 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_melanoma" value="0_1cm" className="toggle"/> 1-2 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_melanoma" value="0_1cm" className="toggle"/> > 2cm
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <div className="btn-group" data-toggle="buttons">
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_merkels" value="0_1cm" className="toggle"/> 0-1 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_merkels" value="0_1cm" className="toggle"/> 1-2 cm
                                                </label>
                                                <label className="btn btn-md btn-default">
                                                    <input type="radio" name="site_merkels" value="0_1cm" className="toggle"/> > 2cm
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <input type="text" className="form-control" placeholder="Others"/>
                                        </div>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div> 
            </div>
			)
	}
}
export default Referral