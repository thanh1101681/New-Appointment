import React, {Component, PropTypes} from 'react'
import Dropdown from '../../../../modules/dropdown'
import Services from '../../../../services/restfulAPI'

class DropdownService extends Component {
	static propTypes = {
		name: PropTypes.string
	}
	constructor() {
		super()
		this.data = []
	}
	componentDidMount(){
		Services.listService()
		.then(function(response){
			if(!_.isEmpty(response) &&
				!_.isEmpty(response.data) &&
				!_.isEmpty(response.data.data)){
				var data = []
				_.forEach(response.data.data, function(service_v, service_i){
					data.push({value: service_v.ID, name: service_v.ServiceName})
				})
				this.data = data
				this.forceUpdate()
			}
			else {
				toastr.error('Load Service failed!', 'Error')
			}
		}.bind(this), function(err){
			toastr.error('Load Service failed!', 'Error')
		})
	}
	render() {
		return (
			<Dropdown data={this.data}
            		  type={2}
            		  label="Service :"
            		  labelWidth="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                      inputWidth="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                     name={this.props.name}/>
			)
	}
}
export default DropdownService