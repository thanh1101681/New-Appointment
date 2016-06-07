import React, {Component, PropTypes} from 'react'
import InputText from '../../../modules/inputText'
import RadioGroup from '../../../modules/radioGroup'
import Dropdown from '../../../modules/dropdown'
import Datepicker from '../../../modules/datepicker'
import CheckboxGroup from '../../../modules/checkboxGroup'
import Checkbox_icheck from '../../../modules/checkbox_icheck'
import FileInput from '../../../modules/fileinput'
class TabBasic extends Component {
	constructor(){
        super();
        this.data = {}
        this.info = {}
        this.arr  = ['UserName','Email','PhoneNumber','Enable','Active'];
        this.requireArray = ['FirstName','LastName','DOB','Gender','Title'];
    }
    getInitialState(){
        return {
        };
    }
    componentDidMount(){
    }
    _Validate(refName, regExp, message, labelRef, labelMsg) {
        $(labelRef).removeClass('has-error');
        $(labelMsg).addClass('hide-element');
        var regexp = regExp ? new RegExp(regExp) : null;
        var value;
        if(this.arr.indexOf(refName) == -1){
            this.info[refName] = this.data[refName]._getValue() ? this.data[refName]._getValue() : null;
            value = this.info[refName];
        }
        else {
            this.info['UserAccount'][refName] = this.data[refName]._getValue() ? this.data[refName]._getValue() : null;
            value = this.info['UserAccount'][refName];
        }
        if(regexp != null && value != null && value != '') {
            if(!regexp.test(value)) {
                $(labelRef).addClass('has-error');
                if($(labelMsg).is(':empty'))
                    $(labelMsg).append(message);
                $(labelMsg).removeClass('hide-element');
            }
        }
    }
    _setValue(value){
        if(!_.isEmpty(value)){
            for(var key in this.data) {
                if(value[key]){
                    this.data[key]._setValue(value[key]);
                }
                else
                    this.data[key]._setValue(value['UserAccount'][key]);
            }
        }
        this._getValue();
    }
    _getValue(){
        this.info.UserAccount = {};
        for(var key in this.data) {
            var temp = this.arr.filter(item =>{
                return item == key;
            });
            if(temp.length == 0){
                this.info[key] = this.data[key]._getValue() == '' ? null : this.data[key]._getValue();
            }
            else {
                this.info['UserAccount'][key] = this.data[key]._getValue() == '' ? null : this.data[key]._getValue();
            }
        }
        return this.info;
    }
    _requireData(){
        var returnArr = [];
        var p   = new Promise((resolve, reject) =>{
            for(var i = 0; i < this.requireArray.length; i++) {
                var isrequire = true;
                for(var key in this.info) {
                    if(typeof this.info[key] === 'object') {
                        for(var userKey in this.info[key]) {
                            if(this.requireArray[i] == userKey && this.info[key][userKey] != null && this.info[key][userKey] != '')
                                isrequire = false;
                        }
                    }
                    else {
                        if(this.requireArray[i] == key && this.info[key] != null && this.info[key] != '')
                            isrequire = false;
                    }
                }
                if(isrequire == true) {
                    returnArr.push(this.requireArray[i]);
                }
            }
            if(returnArr.length > 0) {
                for(var i = 0; i < returnArr.length; i++) {
                    $(this.data[returnArr[i]].refs.formGroup).addClass('has-error');
                }
                reject({message:"error",data:returnArr});
            } else {
                resolve({message:"success"});
            }
        });
        return p;
    }
    render() {
    	return (
    		<div className="tab-pane active" id="tab_basic" ref="tab_basic">
                <h4 className="form-section"></h4>
                <div className="form-group">
                    <FileInput ref="input" />
                    <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-1">&nbsp;</label>
                </div>
                <h4 className="form-section">Basic Information</h4>
                <Dropdown label="Title :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    data={[
                        {value:'',name:'Select title'},
                        {value:'mr',name:'Mr'},
                        {value:'mrs',name:'Mrs'},
                        {value:'miss',name:'Miss'},
                        {value:'dr',name:'Dr'},
                        {value:'master',name:'Master'},
                    ]}
                    ref={Title => {this.data.Title = Title}} 
                    onChange={this._Validate.bind(this,
                        'Title',
                        '^[a-zA-Z\\s0-9]{0,50}$',
                        'Title is invalid'
                    )} />
                <InputText label="First Name :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    className="error"
                    ref={FirstName => {this.data.FirstName = FirstName}}
                    onChange={this._Validate.bind(this,
                        'FirstName',
                        '^[a-zA-Z\\s0-9]{0,50}$',
                        'First Name is invalid. First Name is a string from the ordinary'
                    )} />
                <InputText label="Middle Name :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={MiddleName => {this.data.MiddleName = MiddleName}}
                    onChange={this._Validate.bind(this,
                        'MiddleName',
                        '^[a-zA-Z\\s0-9]{0,50}$',
                        'Middle Name is invalid. Middle Name is a string from the ordinary'
                    )} />
                <InputText label="Last Name :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={LastName => {this.data.LastName = LastName}}
                    onChange={this._Validate.bind(this,
                        'LastName',
                        '^[a-zA-Z\\s0-9]{0,50}$',
                        'Last Name is invalid. Last Name is a string from the ordinary'
                    )} />
                <Datepicker label="Date of birth :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={DOB => {this.data.DOB = DOB}} />
                <RadioGroup label="Gender:" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    data={[
                        {label:'Male', value:'male'},
                        {label:'Female', value:'female'},
                    ]}
                    ref={Gender => {this.data.Gender = Gender}} />
                <InputText label="Occupation :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={Occupation => {this.data.Occupation = Occupation}} 
                    onChange={this._Validate.bind(this,
                        'Occupation',
                        '^[a-zA-Z\\s0-9]{0,50}$',
                        'Occupation is invalid. Occupation is a string from the ordinary'
                    )} /> 
                
                <h4 className="form-section">User Account</h4> 
                <InputText label="User Name :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={UserName => {this.data.UserName = UserName}} 
                    onChange={this._Validate.bind(this,
                        'UserName',
                        '^[a-zA-Z\\s0-9]{0,50}$',
                        'User Name is invalid. User Name is a string from the ordinary'
                    )} />    
                <InputText label="Email :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={Email => {this.data.Email = Email}} 
                    onChange={this._Validate.bind(this,
                        'Email',
                        '^\\w+([a-zA-Z0-9\\.-]?\\w+)*@\\w+([a-z][\\.-]?\\w+)*([a-z]\\.\\w{2,4})+$',
                        'Email is invalid. ex: abc@gmail.com'
                    )} /> 
                <InputText label="Phone Number :" 
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8"
                    ref={PhoneNumber => {this.data.PhoneNumber = PhoneNumber}} 
                    onChange={this._Validate.bind(this,
                        'PhoneNumber',
                        '^(\\+61|0061|0)?4[0-9]{8}$',
                        'Phone Number is invalid. Phone Number is a 10 digits number. Eg: 04 xxxx xxxx'
                    )} />   
                <div className="row margin-bottom-20 margin-top-20">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-4"></div>
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
                        <a className="btn btn-outline blue margin-right-5">Generate password</a>
                        <a className="btn btn-outline red">Forget password</a>
                    </div>
                </div>
                <CheckboxGroup label=""
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8">
                        <Checkbox_icheck label="Enable" ref={Enable => {this.data.Enable = Enable}}/> 
                </CheckboxGroup>
                <CheckboxGroup label=""
                    type={2}
                    labelWidth="col-lg-3 col-md-4 col-sm-4 col-xs-4 text-right"
                    inputWidth="col-lg-8 col-md-7 col-sm-7 col-xs-8">
                        <Checkbox_icheck label="Activated" ref={Active => {this.data.Active = Active}} /> 
                </CheckboxGroup>                      
            </div>
    	)
    }
}
export default TabBasic