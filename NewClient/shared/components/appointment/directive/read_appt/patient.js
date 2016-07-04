import React, {Component, PropTypes} from 'react'
import PatientBasic from './patient_basic'
import PatientContact from './patient_contact'
import PatientMedicare from './patient_medicare'
class Patient extends Component {
    static propTypes = {
        data: PropTypes.object
    }
	constructor() {
		super()
	}
	componentDidMount() {
	}
    componentDidUpdate() {
        //set value default
         for (var keyObj in this.refs) {
             if (keyObj &&
                 this.props.data[keyObj] &&
                 this.refs[keyObj]) {
                 this.refs[keyObj]._setValue(this.props.data[keyObj])
             }
         }
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
                        <PatientBasic data={this.props.data.patientData}/>
                        <PatientContact data={this.props.data.patientData}/>
                        <PatientMedicare data={this.props.data.patientData}/>
                    </div>
                </div>
            </div>
			)
	}
}
Patient.defaultProps = {
    data: {
        patientData: {}
    }
}
export default Patient