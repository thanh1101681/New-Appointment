import React, {Component, PropTypes} from 'react'
class Company extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div id="tab_company" className="tab-pane">
                <div className="box">
                    <h4 className="form-section font-blue-madison">Company information</h4>   
                    <div className="form-group">
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Company name :</label>
                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Description :</label>
                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Site name :</label>
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
                    <div className="form-group">
                        <label className="control-label text-right col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact name :</label>
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
                </div>                               
            </div>
			)
	}
}
export default Company