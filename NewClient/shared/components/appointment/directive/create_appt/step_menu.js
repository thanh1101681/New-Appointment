import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
class StepMenuCreateAppt extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<ul className="nav nav-pills nav-justified steps">
                <li>
                    <a href="#appointment" data-toggle="tab" className="step">
                        <span className="number"> 1 </span>
                        <span className="desc">
                            <i className="fa fa-check"></i> Appointment 
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#patient" data-toggle="tab" className="step">
                        <span className="number"> 2 </span>
                        <span className="desc">
                            <i className="fa fa-check"></i> Patient 
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#consent" data-toggle="tab" className="step active">
                        <span className="number"> 3 </span>
                        <span className="desc">
                            <i className="fa fa-check"></i> Consent 
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#referral" data-toggle="tab" className="step">
                        <span className="number"> 4 </span>
                        <span className="desc">
                            <i className="fa fa-check"></i> Referral 
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#summary" data-toggle="tab" className="step">
                        <span className="number"> 5 </span>
                        <span className="desc">
                            <i className="fa fa-check"></i> Summary 
                        </span>
                    </a>
                </li>
            </ul>
			)
	}
}
export default StepMenuCreateAppt