import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import TabBasic from './directive/tab_basic'
import TabCompany from './directive/tab_company'
import TabContact from './directive/tab_contact'
import TabExtra from './directive/tab_extra'
import Portlet from '../../modules/portlet'
import Config from '../../config/index'
import patientService from '../../services/restfulAPI'
class HomePage extends Component{
    constructor(){
        super();
        this.patientUID = '';
        this.usedTab = ['tab_basic'];// default define tab active
    }
    _loadData(index) {
        console.log("index ",index);
    }
    _init(patientUID){
        patientService.detailPatient({patientUID:patientUID})
        .then(response => {
            this.refs.tab_basic._setValue(response.data);
        }, err => {
            console.log("err ", err);
            toastr.error('Server Error.');
        })
    }
    _Submit(){
        // console.log("oh yea ",this.refs.basic._getValue());
        // console.log($(this.refs.detail).find('.has-error'));
        var checkArray = $(this.refs.detail).find('.has-error');
        if(checkArray.length != 0) {
            toastr.error("Please check data again.");
        }
        else {
            this._updateInfo();
        }

    }
    _getData(data, name){
        var p = new Promise((resolve, reject) => {
            if(this.refs[name]) {
                this.refs[name]._requireData()
                .then(required => {
                    var obj = this.refs[name]._getValue();
                    for(var key in obj) {
                        data[key] = obj[key];
                        resolve();
                    }
                }, err => {
                    reject(err);
                    // toastr.error("Please fill require data.");
                })
            }
        });
        return p;
    }
    _updateInfo(){
        var isRequire = false;
        var data = {};
        var error;
        data.whereClause = {};
        data.whereClause.UID = this.patientUID;
        data.Patient = {};
        if(this.usedTab.length != 0) {
            for(var i = 0; i < this.usedTab.length; i++) {
                var item = this.usedTab[i];
                if(this.refs[item]) {
                    this._getData(data.Patient, item)
                    .then(success => {
                        console.log("success");
                    }, err => {
                        error = err;
                        isRequire = true;
                    })
                }
            }
            setTimeout(()=>{
                if(isRequire == false) {
                    patientService.updatePatient(data)
                    .then(response => {
                        console.log('response ',response);
                        if(response.data.message == 'success') {
                            toastr.success('success');
                        }
                    }, err => {
                        console.log('err ',err);
                        toastr.error(err);
                    })
                }
                else {
                    var msg = '';
                    for(var i = 0; i < error.data.length; i++) {
                        msg += error.data[i] + ',';
                        if((i+1) == error.data.length){
                            msg =  msg.substr(0, msg.length-1);
                            msg += ' must be required';
                        }
                    }
                    toastr.error(msg);
                }
            },10);
            
        }

    }
    componentDidMount(){
        var locationParams = Config.parseQueryString(window.location.href);
        this.patientUID = locationParams.patientUID;
        this._init(this.patientUID);
    }
    _handleUsedTab(refName){
        if(this.usedTab.indexOf(refName) == -1) {
            this.usedTab.push(refName);
        }
    }
    render() {
        var form_body = 
            <div className="tab-vertical-custom margin-bottom-10">
                <ul className="nav nav-tabs tabs-left">
                    <li className="active" id="basic" onClick={this._handleUsedTab.bind(this, 'tab_basic')}>
                        <a href="index.html#tab_basic" data-toggle="tab">
                            <i className="fa fa-cube"></i>
                            <span>Basic</span> 
                        </a>
                    </li>
                    <li id="contact" onClick={this._handleUsedTab.bind(this, 'tab_contact')}>
                        <a href="index.html#tab_contact" data-toggle="tab">
                            <i className="fa fa-map"></i>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li id="extra">
                        <a href="index.html#tab_extra" data-toggle="tab" onClick={this._handleUsedTab.bind(this, 'tab_extra')}>
                            <i className="fa fa-cubes"></i>
                            <span>Extra</span>
                        </a>
                    </li>
                    <li id="fun">
                        <a href="index.html#tab_fun" data-toggle="tab">
                            <i className="fa fa-dollar"></i>
                            <span>Fund/Payment</span>
                        </a>
                    </li>
                    <li id="kin">
                        <a href="index.html#tab_kin" data-toggle="tab">
                            <i className="fa fa-users"></i>
                            <span>Kin/ Guardian/ Family members</span>
                        </a>
                    </li>
                    <li id="gp">
                        <a href="index.html#tab_gp" data-toggle="tab">
                            <i className="fa fa-heartbeat"></i>
                            <span>GP/ Clinical</span>
                        </a>
                    </li>
                    <li id="company">
                        <a href="index.html#tab_company" data-toggle="tab" onClick={this._handleUsedTab.bind(this, 'tab_company')}>
                            <i className="fa fa-building"></i>
                            <span>Company</span>
                        </a>
                    </li>
                    <li id="eform">
                        <a href="index.html#tab_eform" data-toggle="tab">
                            <i className="fa fa-file"></i>
                            <span>E-Form</span>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <TabBasic ref="tab_basic" />
                    <TabContact ref="tab_contact" />
                    <TabExtra ref="tab_extra" />
                    <div className="tab-pane" id="tab_fun">
                    </div>
                    <div className="tab-pane" id="tab_kin">
                    </div>
                    <div className="tab-pane" id="tab_gp">
                    </div>
                    <TabCompany ref="tab_company" />
                    <div className="tab-pane" id="tab_eform">
                    </div>
                </div>
            </div>
        var form =
            <form className="form-horizontal">
                <div className="form-body">
                    {form_body}
                </div>
                <div className="form-actions right">
                    <a className="btn btn-outline btn-primary" onClick={this._Submit.bind(this)}>
                        Submit
                    </a>
                </div>
            </form>;
        var profileSidebar = 
            
                <div className="portlet light bordered">
                    <div className="profile-userpic">
                        <img src="theme/assets/pages/media/profile/profile_user.jpg" className="img-responsive" alt=""/> </div>
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name"> Marcus Doe </div>
                        <div className="profile-usertitle-job"> Male </div>
                    </div>
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-circle green btn-sm">Call</button>
                    </div>
                    <div className="profile-usermenu">
                    </div>
                </div>
        var profileContent = 
            <Portlet
                caption_subject="Patient detail"
                caption_helper=""
                caption_icon="icon-list"
                form="form"
                type="light" color="blue-madison"> 
                    {form}      
            </Portlet>;
        
        return (
            
                <div>
                  <div className="row" ref="detail">
                      <div className="col-xs-5">
                          
                      </div>
                      <div className="col-xs-12">
                          {profileContent}
                      </div>
                  </div>
                </div>
            
        );
    }
}

render(
    <HomePage/>,
    document.getElementById('app')
)