import React, {Component, PropTypes} from 'react'
import PatientBasic from './patient_basic'
import PatientContact from './patient_contact'
import PatientMedicare from './patient_medicare'
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
                        <PatientBasic />
                        <PatientContact />
                        <PatientMedicare />
                    </div>
                </div>
            </div>
			)
	}
}
export default Patient