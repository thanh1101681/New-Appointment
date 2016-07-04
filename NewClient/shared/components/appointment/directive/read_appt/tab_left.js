import React, {Component, PropTypes} from 'react'
class TabLeftReadAppt extends Component {
    static propTypes = {
        onChange: PropTypes.func
    }
	constructor() {
		super()
	}
	componentDidMount(){
	}
    _onClick(val){
        if(this.props.onChange !=  undefined) {
            this.props.onChange(val)
        }
    }
	render() {
		return (
			<ul className="nav nav-tabs tabs-left">
                <li className="active">
                    <a data-toggle="tab" href="@#tab_appointment" onClick={this._onClick.bind(this, 'Appointment')}>
                        <i className="fa fa-calendar"></i> 
                        <span>Appointment</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_patient" onClick={this._onClick.bind(this, 'Patient')}>
                        <i className="fa fa-bed"></i> 
                        <span>Patient</span> 
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_company" onClick={this._onClick.bind(this, 'Company')}>
                        <i className="fa fa-building"></i> 
                        <span>Company </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_referral" onClick={this._onClick.bind(this, 'Referral')}>
                        <i className="fa fa-file-text-o"></i> 
                        <span>Referral </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_clinical" onClick={this._onClick.bind(this, 'Clinical')}>
                        <i className="fa fa-heartbeat"></i> 
                        <span>Clinical </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_treating" onClick={this._onClick.bind(this, 'TreatingPractitioner')}>
                        <i className="fa fa-user-md"></i> 
                        <span>Treating practitioner </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_image" onClick={this._onClick.bind(this, 'MedicalImage')}>
                        <i className="fa fa-image"></i> 
                        <span>Medical image </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_referring" onClick={this._onClick.bind(this, 'ReferringPractitioner')}>
                        <i className="fa fa-user-md"></i> 
                        <span>Referring practitioner </span>
                    </a>
                </li>
            </ul>
			)
	}
}
export default TabLeftReadAppt