import React, {Component, PropTypes} from 'react'
import InputText from '../../../modules/inputText'
import Dropdown from '../../../modules/dropdown'
import InputTextarea from '../../../modules/inputTextarea'
class TabContact extends Component {
	constructor(){
        super();
        this.data = {}
        this.info = {}
    }
    getInitialState(){
        return {
        };
    }
    _requireData(){
        var returnArr = [];
        var p   = new Promise((resolve, reject) =>{
            resolve({message:"success"});
        });
        return p;
    }
    _getValue(){
        var a ={};
        a.b ="oi con ga";
        return a;
    }
    componentDidMount(){
    }
    render() {
    	return (
            <div className="tab-pane" id="tab_contact" ref="tab_contact">
                <h4 className="form-section">Contact information</h4>
                <InputText label="Email:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="email"/>
                <InputText label="Workphone:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="workphone"/>
                <InputText label="Homephone:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="homephone"/>
                <InputText label="Mobile:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="mobile"/>
                <InputTextarea label="Address1:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="address1"/>
                <InputTextarea label="Address2:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="address2"/>
                <InputText label="Suburb:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="suburb"/>
                <InputText label="Postcode:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref="postcode"/>
                <Dropdown label="State:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    data={[
                        {value:'', name: 'Select state'}
                    ]}
                    ref="state"/>
                <Dropdown label="Country:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    data={[
                        {value:'', name: 'Select country'}
                    ]}
                    ref="country"/>
            </div>
    	)
    }
}
export default TabContact