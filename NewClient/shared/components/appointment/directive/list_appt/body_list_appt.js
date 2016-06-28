import React, {Component, PropTypes} from 'react'
import ReferralTracking from './referral_tracking'
class TbodyListAppt extends Component {
    static propTypes = {
        data: PropTypes.array,
        currentPage: PropTypes.number
    }
	constructor() {
		super()
	}
	componentDidMount() {

	}
    _onClick(val) {
        window.location.href = window.location.origin + '/appointment/read?uid=' + val;
    }
	render() {
        var currentItem = (this.props.currentPage - 1) * 10
        var listAppt = this.props.data.map(function(appt_v, appt_i){
            return (
                <tr onClick={this._onClick.bind(this, appt_v.UID)} key={'appt_'+appt_i}>
                    <td>{currentItem + appt_i + 1}</td>
                    <td className="fit">{(appt_v &&
                        appt_v.Data &&
                        appt_v.Data.Patient) ? appt_v.Data.Patient.LastName + ' ' + appt_v.Data.Patient.FirstName : ''}</td>
                    <td className="fit">{(appt_v &&
                        appt_v.Doctor &&
                        appt_v.Doctor[0]) ? appt_v.Doctor[0].LastName + ' ' + appt_v.Doctor[0].FirstName: ''}</td>
                    <td>{moment(appt_v.RequestDate).format('DD/MM/YYYY')}</td>
                    <td>{appt_v.Type}</td>
                    <td>{appt_v.FromTime ? moment(appt_v.FromTime).format('DD/MM/YYYY') : ''}</td>
                    <td>
                        <ReferralTracking active={appt_v.Status}/>
                    </td>
                </tr>
                )
        }.bind(this))
		return (
			<tbody>
                {listAppt}
            </tbody>
			)
	}
}
TbodyListAppt.defaultProps = {
    data: [],
    currentPage: 1
}
export default TbodyListAppt
