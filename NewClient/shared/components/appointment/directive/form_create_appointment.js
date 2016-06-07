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
    		  <form name="form" className="form" id="submit_form" method="POST" noValidate="true" onSubmit={this._onSubmit}>
                <div className="form-wizard">
                    <div className="form-body">     
                        <ul className="nav nav-pills nav-justified steps">
                            <li>
                                <a href="#tab_practitioner" data-toggle="tab" className="step">
                                    <span className="number">1</span>
                                    <span className="desc"><i className="fa fa-check"></i> Practitioners detail </span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab_patient" data-toggle="tab" className="step">
                                    <span className="number"> 2 </span>
                                    <span className="desc"><i className="fa fa-check"></i> Patient details </span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab_referral" data-toggle="tab" className="step active">
                                    <span className="number"> 3 </span>
                                    <span className="desc"><i className="fa fa-check"></i> Referral details </span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab_confirm" data-toggle="tab" className="step">
                                    <span className="number"> 4 </span>
                                    <span className="desc"><i className="fa fa-check"></i> Confirm </span>
                                </a>
                            </li>
                        </ul>
                        <div id="bar" className="progress progress-striped" role="progressbar">
                            <div className="progress-bar progress-bar-success"> </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tab_practitioner">{tab_practitioner}</div>
                            <div className="tab-pane active" id="tab_patient">{tab_patient}</div>
                            <div className="tab-pane active" id="tab_referral">{tab_referral}</div>
                            <div className="tab-pane active" id="tab_confirm">{tab_confirm}</div>
                        </div>
                    </div>
                    <div className="form-actions" style={{"textAlign":"right"}}>
                        <button type="button" className="btn btn-lg btn-outline default button-previous">
                            <i className="glyphicon glyphicon-arrow-left"></i> Back</button>
                        <button type="button" className="btn btn-lg btn-outline green button-next">
                            <i className="glyphicon glyphicon-arrow-right"></i> Continue</button>
                        <button type="submit" className="btn btn-lg btn-outline green button-submit">
                            Submit <i className="glyphicon glyphicon-save"></i></button>
                    </div>
                </div>
            </form>
    		)
    }
}
export default Modal
