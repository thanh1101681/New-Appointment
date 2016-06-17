import React, {Component, PropTypes} from 'react'
import RadioGroup from '../../../../modules/radio_group'
import Services from '../../../../services/restfulAPI'

class RadioSite extends Component {
	static propTypes= {
		name: PropTypes.string
	}
	constructor() {
		super()
		this.data = []
	}
	componentDidMount(){
		Services.listSite()
		.then(function(response){
			if(!_.isEmpty(response) &&
				!_.isEmpty(response.data) &&
				!_.isEmpty(response.data.data)){
				var data = []
				_.forEach(response.data.data, function(site_v, site_i){
					data.push({value: site_v.ID, name: site_v.SiteName})
				})
				this.data = data
				this.forceUpdate()
			}
			else {
				toastr.error('Load Site failed!', 'Error')
			}
		}.bind(this), function(err){
			toastr.error('Load Site failed!', 'Error')
		})
	}
	render() {
		return (
			<RadioGroup classGroup="row margin-bottom-20" 
                            nameGroup="Service: "
                            classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                            classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                            classRadioList="btn-group"
                            classLabel="btn btn-sm btn-default"
                            classInput="toggle"
                            data={this.data}
                            name={this.props.name}
                             />
			)
	}
}
export default RadioSite