import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Portlet from '../../modules/portlet'
import InputText from '../../modules/inputText'
import InputTextarea from '../../modules/inputTextarea'
import Dropdown from '../../modules/dropdown'
import Datepicker from '../../modules/datepicker'
import Timepicker from '../../modules/timepicker'
import Radio from '../../modules/radio'
import CheckboxGroup from '../../modules/checkboxGroup'
import Checkbox_icheck from '../../modules/checkbox_icheck'

var Detail = React.createClass({
    getInitialState: function(){
        return {
        }
    },
    componentDidMount: function(){
        $('#js-grid-lightbox-gallery3').cubeportfolio({
            filters: '#js-filters-lightbox-gallery1, #js-filters-lightbox-gallery2',
            loadMore: '#js-loadMore-lightbox-gallery',
            loadMoreAction: 'click',
            layoutMode: 'grid',
            mediaQueries: [{
                width: 1500,
                cols: 5
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 800,
                cols: 3
            }, {
                width: 480,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            defaultFilter: '*',
            animationType: 'rotateSides',
            gapHorizontal: 10,
            gapVertical: 10,
            gridAdjustment: 'responsive',
            caption: 'zoom',
            displayType: 'sequentially',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            // singlePageInline
            singlePageInlineDelegate: '.cbp-singlePageInline',
            singlePageInlinePosition: 'below',
            singlePageInlineInFocus: true,
            singlePageInlineCallback: function(url, element) {
                // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
                var t = this;

                $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html',
                        timeout: 10000
                    })
                    .done(function(result) {

                        t.updateSinglePageInline(result);

                    })
                    .fail(function() {
                        t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                    });
            },
        });
    },
    _testOnClick: function(){
        // history.push('/appointment/create');
    },
    _onToggleMenu: function(){
        if($(this.refs.content).hasClass("col-lg-9 col-md-8")){
             $(this.refs.menu).hide();
            $(this.refs.content).removeAttr("class");
        } else {
            $(this.refs.menu).show();
            $(this.refs.content).addClass("col-lg-9 col-md-8");
        }
    },
    _onSubmit: function(){
    },
    _onCancel: function(){
    },
    render: function(){
        
        var tab = 
            <div className="tab-vertical-custom margin-bottom-10">
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
                <div className="tab-content">
                    <div id="tab_appointment" className="tab-pane active">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="box">
                                    <h4 className="form-section font-blue-madison">
                                        Appointment: AK5D
                                        <a className="btn red margin-left-40">Booking</a>
                                    </h4>                                    
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Status :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="status" value="cancelled" className="icheck"/> Cancelled
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="received" className="icheck"/> Received
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="pendding" className="icheck"/> Pendding
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="appointment_time" className="icheck"/> Appointment time
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="attended" className="icheck"/> Attended
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="wait_list_surgery" className="icheck"/> Wait list surgery
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="finished" className="icheck"/> Finished
                                                </label>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Appointment date :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control date-picker" data-date-format="dd/mm/yyyy" placeholder="dd/mm/yyyy" readOnly="true"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Appointment time :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control timepicker timepicker-24" data-date-format="HH:MM" placeholder="HH:MM" readOnly="true"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Request date :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control date-picker" data-date-format="dd/mm/yyyy" placeholder="dd/mm/yyyy" readOnly="true"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Patient :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Referring practitioner :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Fund type :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Fund :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Has GP referral :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="has_gp_referral" value="Y" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="has_gp_referral" value="N" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Type of treament :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="status" value="Physiotherapy" className="icheck"/> Physiotherapy
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="exercise_rehab" className="icheck"/> Exercise Rehab
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="status" value="hand_therapy" className="icheck"/> Hand Therapy
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <h4 className="form-section font-blue-madison">Referral to</h4> 
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Speciality :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Name of speciality (if required) :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Site :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Description :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab_patient" className="tab-pane">
                        <div className="tabbable-custom">
                            <ul className="nav nav-tabs ">
                                <li className="active">
                                    <a href="#tab_basic" data-toggle="tab"> Basic info </a>
                                </li>
                                <li>
                                    <a href="#tab_contact" data-toggle="tab"> Contact info </a>
                                </li>
                                <li>
                                    <a href="#tab_medicare" data-toggle="tab"> Medicare info </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab_basic">
                                    <h4 className="form-section font-blue-madison">Basic information</h4> 
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Title :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">First name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Middle name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Last name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Preferred name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Previous name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Country of birth :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Date of birth :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control date-picker" data-date-format="dd/mm/yyyy" placeholder="dd/mm/yyyy" readOnly="true"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Marital status :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Gender :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="gender" value="male" className="icheck"/> Male
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="gender" value="female" className="icheck"/> Female
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="gender" value="other" className="icheck"/> Other
                                                </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Other"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Indigenous status :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="indigenous_status" value="aboriginal" className="icheck"/> Aboriginal
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="indigenous_status" value="torres_strait_islander" className="icheck"/> Torres Strait Islander
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="indigenous_status" value="none" className="icheck"/> None
                                                </label>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Interpreter required :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="interpreter_required" value="yes" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="interpreter_required" value="no" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Other special needs :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div> 
                                </div>
                                <div className="tab-pane" id="tab_contact">
                                    <h4 className="form-section font-blue-madison">Contact information</h4> 
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Mobile :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Home phone :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Work phone :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Email :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Fax :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Address1 :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Address2 :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Suburb :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Postcode :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">State :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Country :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab_medicare">
                                    <h4 className="form-section font-blue-madison">Medicare information</h4>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">First name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Last name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Relationship :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact number :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div> 
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Medicare eligible :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="medical_eligible" value="yes" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="medical_eligible" value="no" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Medicare number :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Medicare reference number :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Expiry date :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control date-picker" data-date-format="dd/mm/yyyy" placeholder="dd/mm/yyyy" readOnly="true"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab_company" className="tab-pane">
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Company</h4>   
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Company name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Description :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Site name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Address1 :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Address2 :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Suburb :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Postcode :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">State :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Country :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>                               
                    </div>
                    <div id="tab_referral" className="tab-pane">
                        <div className="tabbable-custom">
                            <ul className="nav nav-tabs ">
                                <li className="active">
                                    <a href="#tab_referral_info" data-toggle="tab"> Referral information</a>
                                </li>
                                <li>
                                    <a href="#tab_referral_ex" data-toggle="tab"> Extra information </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab_referral_info">
                                    <h4 className="form-section font-blue-madison">Referral information</h4>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Has the referral been discussed with a registrar or consultant? :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="referral_discussed" value="Y" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="referral_discussed" value="N" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Clinical name :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Site :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact number :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Referral advice given :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">&nbsp;</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="motor_work" value="motor_vehicle_accident" className="icheck"/> Motor vehicle accident
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="motor_work" value="work_injury" className="icheck"/> Work injury
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Patient usual GP</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="patient_usual_gp" value="Y" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="patient_usual_gp" value="N" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Name of patients usual GP :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Contact number :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Fax number :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Need to be referred to the same place again :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="referred_to_the_same_place_again" value="Y" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="referred_to_the_same_place_again" value="N" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Suitable for a telehealth consult :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="suitable_for_a_telehealth_consult" value="Y" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="suitable_for_a_telehealth_consult" value="N" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Length of referral :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="length_of_referral" value="3_months" className="icheck"/> 3 months
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="length_of_referral" value="12_months" className="icheck"/> 12 months
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="length_of_referral" value="indefinite" className="icheck"/> Indefinite
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Is this renewed referral ?</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <div className="radio-list">
                                                <label className="">
                                                    <input type="radio" name="renewed_referral" value="Y" className="icheck"/> Yes
                                                </label>
                                                <label className="">
                                                    <input type="radio" name="renewed_referral" value="N" className="icheck"/> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab_referral_ex">
                                    <h4 className="form-section font-blue-madison">&nbsp;</h4> 
                                    <div className="form-group">
                                        <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Reason for referral/Presenting Problem :</label>
                                        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                            <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                                <table className="table table-hover table-light">
                                                    <thead>
                                                        <tr className="uppercase">
                                                            <th width="1">#</th>
                                                            <th>file name</th>
                                                            <th width="1">view</th>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td><Dropdown data={[{value: 1, name: "23232"},{value: 2, name: "dsdsds"},]}/></td>
                                                            <td></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td> 
                                                            <td className="primary-link">assetes/global/images/head.jpg</td>
                                                            <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td> 
                                                            <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                            <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <label className="margin-top-40 margin-bottom-20">Skin cancer :</label>
                                    <div className="row">

                                        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
                                            <div className="form-group">
                                                <div className="col-lg-12 ">
                                                    <div className="checkbox-list">
                                                        <label className="">
                                                            <input type="checkbox" className="icheck"/> BCC
                                                        </label>
                                                        <label className="">
                                                            <input type="checkbox" className="icheck"/> SCC
                                                        </label>
                                                        <label className="">
                                                            <input type="checkbox" className="icheck"/> Melanoma
                                                        </label>
                                                        <label className="">
                                                            <input type="checkbox" className="icheck"/> Merkel`s
                                                        </label>
                                                        <label className="">
                                                            <input type="checkbox" className="icheck"/> Others
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-sm-9 col-xs-8">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_bcc" value="0_1cm" className="toggle"/> 0-1 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_bcc" value="0_1cm" className="toggle"/> 1-2 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_bcc" value="0_1cm" className="toggle"/> larger 2cm
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-12">
                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_scc" value="0_1cm" className="toggle"/> 0-1 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_scc" value="0_1cm" className="toggle"/> 1-2 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_scc" value="0_1cm" className="toggle"/> larger 2cm
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-12">
                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_melanoma" value="0_1cm" className="toggle"/> 0-1 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_melanoma" value="0_1cm" className="toggle"/> 1-2 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_melanoma" value="0_1cm" className="toggle"/> larger 2cm
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-12">
                                                    <div className="btn-group" data-toggle="buttons">
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_merkels" value="0_1cm" className="toggle"/> 0-1 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_merkels" value="0_1cm" className="toggle"/> 1-2 cm
                                                        </label>
                                                        <label className="btn btn-xs btn-default">
                                                            <input type="radio" name="site_merkels" value="0_1cm" className="toggle"/> larger 2cm
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-lg-12">
                                                    <input type="text" className="form-control" placeholder="Others"/>
                                                </div>
                                            </div> 
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                    </div>
                    <div id="tab_clinical" className="tab-pane">
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Clinical information</h4> 
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Relevant past medical history :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                    <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr className="uppercase">
                                                    <th width="1">#</th>
                                                    <th>file name</th>
                                                    <th width="1">view</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td> 
                                                    <td className="primary-link">assetes/global/images/head.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td> 
                                                    <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Relevant social factors :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                    <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr className="uppercase">
                                                    <th width="1">#</th>
                                                    <th>file name</th>
                                                    <th width="1">view</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td> 
                                                    <td className="primary-link">assetes/global/images/head.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td> 
                                                    <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Allergies :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                    <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr className="uppercase">
                                                    <th width="1">#</th>
                                                    <th>file name</th>
                                                    <th width="1">view</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td> 
                                                    <td className="primary-link">assetes/global/images/head.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td> 
                                                    <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Current medication :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                    <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr className="uppercase">
                                                    <th width="1">#</th>
                                                    <th>file name</th>
                                                    <th width="1">view</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td> 
                                                    <td className="primary-link">assetes/global/images/head.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td> 
                                                    <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Relevant investigation and tests (please attach results) :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1">
                                    <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                                        <table className="table table-hover table-light">
                                            <thead>
                                                <tr className="uppercase">
                                                    <th width="1">#</th>
                                                    <th>file name</th>
                                                    <th width="1">view</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td> 
                                                    <td className="primary-link">assetes/global/images/head.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td> 
                                                    <td className="primary-link">assetes/global/images/hand.jpg</td>
                                                    <td><a className="btn btn-default"><i className="glyphicon glyphicon-search"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Pathology provider :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Radiology provider :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Other notes :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab_treating" className="tab-pane">
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Doctor list</h4> 
                            <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-10 margin-bottom-10">
                                <table className="table table-hover table-light">
                                    <thead>
                                        <tr className="uppercase">
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Department</th>
                                            <th>Contact Number</th>
                                            <th width="1"></th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Terry</td>
                                            <td>Bodgard</td>
                                            <td>Check item</td>
                                            <td>097 39 40 41</td>
                                            <td><input type="checkbox" className="regular-checkbox regular-no-lable"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <div className="dataTables_info" id="sample_1_info" role="status" aria-live="polite">
                                        Showing 1 to 2 of 2 entries
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="dataTables_paginate paging_bootstrap_number text-right" id="sample_1_paginate" >
                                        <ul className="pagination" style={{"visibility":"visible"}}>
                                            <li className="prev disabled"><a href="#" title="Prev"><i className="fa fa-angle-left"></i></a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li className="next disabled"><a href="#" title="Next"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Group doctor</h4> 
                            <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-10 margin-bottom-10">
                                <table className="table table-hover table-light">
                                    <thead>
                                        <tr className="uppercase">
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Doctors</th>
                                            <th width="1"></th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td><input type="text" className="form-control"/></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className="primary-link">Meditek</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry</td>
                                            <td>Thanh, Minh, Chiến, Kiệt</td>
                                            <td><input type="checkbox" className="regular-checkbox regular-no-lable"/></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className="primary-link">Medical</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry</td>
                                            <td>Thanh, Minh, Chiến, Kiệt</td>
                                            <td><input type="checkbox" className="regular-checkbox regular-no-lable"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <div className="dataTables_info" id="sample_1_info" role="status" aria-live="polite">
                                        Showing 1 to 2 of 2 entries
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="dataTables_paginate paging_bootstrap_number text-right" id="sample_1_paginate" >
                                        <ul className="pagination" style={{"visibility":"visible"}}>
                                            <li className="prev disabled"><a href="#" title="Prev"><i className="fa fa-angle-left"></i></a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li className="next disabled"><a href="#" title="Next"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab_image" className="tab-pane">
                            <div className="portfolio-content portfolio-3">
                                <div className="clearfix">
                                    <div id="js-filters-lightbox-gallery2" className="cbp-l-filters-button cbp-l-filters-left">
                                        <div data-filter="*" className="cbp-filter-item-active cbp-filter-item btn blue btn-outline uppercase">All</div>
                                        <div data-filter=".graphic" className="cbp-filter-item btn blue btn-outline uppercase">Graphic</div>
                                        <div data-filter=".logos" className="cbp-filter-item btn blue btn-outline uppercase">Logo</div>
                                        <div data-filter=".motion" className="cbp-filter-item btn blue btn-outline uppercase">Motion</div>
                                    </div>
                                </div>
                                <div id="js-grid-lightbox-gallery" className="cbp">
                                    <div className="cbp-item web-design graphic print motion">
                                        <a href="theme/assets/global/plugins/cubeportfolio/ajax/project3.html" className="cbp-caption cbp-singlePageInline" data-title="World Clock Widget<br>by Paul Flavius Nechita" rel="nofollow">
                                            <div className="cbp-caption-defaultWrap">
                                                <img src="/assets/global/img/portfolio/600x600/01.jpg" alt=""/> </div>
                                            <div className="cbp-caption-activeWrap">
                                                <div className="cbp-l-caption-alignLeft">
                                                    <div className="cbp-l-caption-body">
                                                        <div className="cbp-l-caption-title">World Clock Widget</div>
                                                        <div className="cbp-l-caption-desc">by Paul Flavius Nechita</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="cbp-item web-design logos identity graphic">
                                        <a href="../assets/global/plugins/cubeportfolio/ajax/project4.html" className="cbp-caption cbp-singlePageInline" data-title="Bolt UI<br>by Tiberiu Neamu" rel="nofollow">
                                            <div className="cbp-caption-defaultWrap">
                                                <img src="/assets/global/img/portfolio/600x600/1.jpg" alt=""/> </div>
                                            <div className="cbp-caption-activeWrap">
                                                <div className="cbp-l-caption-alignLeft">
                                                    <div className="cbp-l-caption-body">
                                                        <div className="cbp-l-caption-title">Bolt UI</div>
                                                        <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div id="tab_referring" className="tab-pane">
                        <div className="box">
                            <h4 className="form-section font-blue-madison">Referring practitioner</h4>   
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Healthlink ID :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Provider number :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">First name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Middle name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Last name :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Work phone :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Home phone :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Fax :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Address1 :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Address2 :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Suburb :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Postcode :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">State :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-lg-3 col-md-5 col-sm-5 col-xs-5">Country :</label>
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        var form =
            <form className="form-horizontal" onSubmit={this._onSubmit}>
                <div className="form-body">{tab}</div>
                <div className="form-actions right">
                    <button type="button" className="btn btn-default" onClick={this._onCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        var portlet = 
            <div>
                <Portlet
                    caption_subject="appointment detail"
                    caption_helper=""
                    caption_icon="icon-list"
                    form="form"
                    type="light" 
                    color="blue-madison"
                    isToggleMenu={true}
                    onToggleMenu={this._onToggleMenu}>
                        {form}
                </Portlet>
            </div>;
        return portlet;
    },
});

render(
    <Detail />,
    document.getElementById('app')
)