import React, {Component, PropTypes} from 'react'
class TabLeftReadAppt extends Component {
	constructor() {
		super()
	}
	componentDidMount(){

	}
	render() {
		return (
			<ul className="nav nav-tabs tabs-left">
                <li className="active">
                    <a data-toggle="tab" href="@#tab_appointment">
                        <i className="fa fa-calendar"></i> 
                        <span>Appointment</span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_patient">
                        <i className="fa fa-bed"></i> 
                        <span>Patient</span> 
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_company">
                        <i className="fa fa-building"></i> 
                        <span>Company </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_referral">
                        <i className="fa fa-file-text-o"></i> 
                        <span>Referral </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_clinical">
                        <i className="fa fa-heartbeat"></i> 
                        <span>Clinical </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_treating">
                        <i className="fa fa-user-md"></i> 
                        <span>Treating practitioner </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_image">
                        <i className="fa fa-image"></i> 
                        <span>Medical image </span>
                    </a>
                </li>
                <li>
                    <a data-toggle="tab" href="@#tab_referring">
                        <i className="fa fa-user-md"></i> 
                        <span>Referring practitioner </span>
                    </a>
                </li>
            </ul>
			)
	}
}
export default TabLeftReadAppt