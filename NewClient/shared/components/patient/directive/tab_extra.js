import React, {Component, PropTypes} from 'react'
import InputText from '../../../modules/inputText'
import Dropdown from '../../../modules/dropdown'
class TabExtra extends Component {
	constructor(){
        super();
        this.data = {}
        this.info = {}
    }
    getInitialState(){
        return {
        };
    }
    componentDidMount(){
    }
    render() {
    	return (
            <div className="tab-pane" id="tab_extra" ref="tab_extra">
                <h4 className="form-section">Extra information</h4>
                <Dropdown label="Marital status:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    data={[
                        {value:'', name: 'Select marital status'}
                    ]}
                    ref="marital_status"/>
                <Dropdown label="Language:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    data={[
                        {value:'', name: 'Select language'}
                    ]}
                    ref="language"/>
                <InputText label="Gradute:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="gradute"/>
            </div>
    	)
    }
}
export default TabExtra