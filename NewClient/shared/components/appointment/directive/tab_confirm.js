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
                <h3 className="block">Practitioners detail</h3>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-4">Speciality</label>
                            <div className="col-lg-6 col-md-7">
                                <p className="form-control-static" data-display="">Plastic surgeons</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-4">Name of Specialist</label>
                            <div className="col-lg-6 col-md-7">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-4">Site</label>
                            <div className="col-lg-6 col-md-7">
                                <p className="form-control-static" data-display="">Belmont</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h3 className="block">Patient details</h3>
                <h4 className="form-section">Basic information</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">First name</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Family name</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Preferred name</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Previous name</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Title</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Marital status</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Country of birth</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Date of birth</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Gender</label>
                            <div className="col-lg-9 col-md-9">
                                <p className="form-control-static" data-display="">Male</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Indigenous status</label>
                            <div className="col-lg-9 col-md-9">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="form-section">Contact information</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Address1</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Address2</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Suburb</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Postcode</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">State</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Contact number(M)</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Contact number(H)</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Fax number</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="form-section">Other information</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Interpreter</label>
                            <div className="col-lg-9 col-md-9">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Other special needs</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h3 className="block">Referral details</h3>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Is the referrer the patients usual GP ?</label>
                            <div className="col-lg-9 col-md-9">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">If no, name of patients usual GP</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Contact number</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Fax number</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row margin-top-40">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">If the patient has been reffered to this speciality for the same condition before, do they need to be referred to the same place again ?</label>
                            <div className="col-lg-6 col-md-6">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">Is the patient suitable for a telehealth consult ?</label>
                            <div className="col-lg-6 col-md-6">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">Length of referral ?</label>
                            <div className="col-lg-6 col-md-6">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-6 col-md-6">Is this a renewed referral ?</label>
                            <div className="col-lg-6 col-md-6">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row margin-top-20 margin-bottom-20">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Skin cancer</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Hand condition</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">PNS</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Reason for referral/Presenting Problem</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">History of previous skin cancers and treatmens</label>
                            <div className="col-lg-9 col-md-9">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Reason for referral/Presenting Problem</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">History of previous hand surgery</label>
                            <div className="col-lg-9 col-md-9">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Reason for referral/Presenting Problem</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Pathology provider</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Radiology provider</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="control-label col-lg-3 col-md-3">Other notes</label>
                            <div className="col-lg-8 col-md-8">
                                <p className="form-control-static" data-display="">...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    		)
    }
}
export default Modal
