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
                <h3 className="form-section">Basic information</h3>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">First name <span className="required"> * </span></label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" name="firstname" className="form-control" ref="firstname"/>
                                <span className="help-block"> Provide your first name </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Family name <span className="required"> * </span></label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" name="familyname" className="form-control" ref="familyname"/>
                                <span className="help-block"> Provide your family name </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Preferred name</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" name="preferredname" className="form-control" ref="preferredname"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Previous name</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" name="previousname" className="form-control" ref="previousname"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Title</label>
                            <div className="col-lg-8 col-md-8">
                                <select className="form-control" name="title" ref="title">
                                    <option value="">Choose title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Marital status</label>
                            <div className="col-lg-8 col-md-8">
                                <select className="form-control" name="marital_status" ref="marital_status">
                                    <option value="">Choose marital status</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Country of birth</label>
                            <div className="col-lg-8 col-md-8">
                                <select className="form-control" name="cob" ref="cob">
                                    <option value="">Choose country of birth</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Date of birth</label>
                            <div className="col-lg-8 col-md-8">
                                <select className="form-control" name="dob" ref="dob">
                                    <option value="">Choose date of birth</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Gender</label>
                            <div className="col-lg-9 col-md-9">
                                <div className="radio-list">
                                    <label className="radio">
                                        <input type="radio" name="gender" className="icheck" value="male"/> Male
                                    </label> 
                                    <label className="radio">
                                        <input type="radio" name="gender" className="icheck" value="female"/> Female
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="gender" className="icheck" value="other"/> Other

                                    </label>   
                                </div>
                                <input type="text" className="form-control" placeholder="Other" ref="gender_other"
                                    style={{"width":"50%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Indigenous status</label>
                            <div className="col-lg-9 col-md-9">
                                <div className="radio-list">
                                    <label className="radio">
                                        <input type="radio" className="icheck" name="indigenous_status" value="aboriginal"/>&nbsp; Aboriginal
                                    </label> 
                                    <label className="radio">
                                        <input type="radio" className="icheck" name="indigenous_status" value="torres strait islander"/>&nbsp; Torres strait islander
                                    </label>
                                    <label className="radio">
                                        <input type="radio" className="icheck" name="indigenous_status" value="none"/>&nbsp; None
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="form-section">Contact information</h3>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Address1</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="address1"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Address2</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="address2"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Suburb</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="suburb"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Postcode</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="postcode"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">State</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="state"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Contact number(M)</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" name="mobile" ref="mobile"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Contact number(H)</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="homephone"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Fax number</label>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" ref="fax"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="form-section">Other information</h3>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Interpreter</label>
                            <div className="col-lg-9 col-md-9">
                                <div className="radio-list">
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="interpreter" value="Y" />&nbsp; Yes
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" className="regular-radio" name="interpreter" value="N" />&nbsp; No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Other special needs</label>
                            <div className="col-lg-8 col-md-8">
                                <textarea className="form-control" ref="other_special_need"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    		)
    }
}
export default Modal
