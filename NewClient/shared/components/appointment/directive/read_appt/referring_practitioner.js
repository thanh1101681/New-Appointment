import React, {Component, PropTypes} from 'react'
class ReferringPractitioner extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div id="tab_referring" className="tab-pane">
                <div className="box">
                    <h4 className="form-section font-blue-madison">Referring practitioner</h4>   
                    <div className="form-group">
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Healthlink ID :</label>
                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Provider number :</label>
                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                            <input type="text" className="form-control"/>
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
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Work phone :</label>
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
            </div>
			)
	}
}
export default ReferringPractitioner