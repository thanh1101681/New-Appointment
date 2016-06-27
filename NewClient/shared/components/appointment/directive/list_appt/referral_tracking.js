import React, {Component, PropTypes} from 'react'
class ReferralTracking extends Component {
	static propTypes = {
		active: PropTypes.string
	}
	constructor() {
		super()
		this.data = [
	{ name: 'Received', classLabel: 'label label-blue' },
    { name: 'Appoint pendding', classLabel: 'label label-purple' },
    { name: 'Appoint time', classLabel: 'label label-red' },
    { name: 'Attended', classLabel: 'label label-orange' },
    { name: 'Wait list surgery', classLabel: 'label label-yellow' },
    { name: 'Finished', classLabel: 'label label-green' },
    {name: 'Canceled', classLabel: 'label label-black' }
    ]
	}
	componentDidMount() {
	}
	render() {
		var referralTracking = this.data.map(function(rt_v, rt_i){
				if(this.props.active == rt_v.name) {
				return (
					<label key={'referral_tracking_' + rt_i} className={rt_v.classLabel}>
						{rt_v.name}
					</label>
					)
				}
			}.bind(this))
		return (
			<div>
				{referralTracking}
			</div>
			)
	}
}
export default ReferralTracking