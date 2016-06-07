import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Portlet from '../../modules/portlet'
var List = React.createClass({
	propTypes: {
		title: React.PropTypes.object,
		data: React.PropTypes.array,
		link: React.PropTypes.string,
	},
    componentDidMount: function(){
    },
    _goDetail: function(element){
        console.log('element', element);
        window.location.href = '/appointment/detail?UID='+element.UID;
        // history.push('/appointment/detail/'+element.id);

    },
	render: function(){
		var self = this;
        var data = [
                {
                    ID: 1,
                    UID:'asdasdasdasdasdasdasdas',
                    patient: 'John Cena1', 
                    imgPatient: "/assets/pages/media/users/avatar4.jpg", 
                    treatingPractitioner: 'Mr Thanh Internal',
                    imgTreatingPractitioner: "/assets/pages/media/users/avatar5.jpg",
                    submitDate: '29/02/2016',
                    referralTracking: 'Received',
                    appointmentType: 'telehealth',
                    appointmentDate: '29/02/2016 13:31',
                    correspondence: 'Y',
                },
                {
                    ID: 2,
                    UID:'asdasdasdasdasasd',
                    patient: 'Rey Misterial1', 
                    imgPatient: "/assets/pages/media/users/avatar6.jpg", 
                    treatingPractitioner: 'Miss Rosalina',
                    imgTreatingPractitioner: "/assets/pages/media/users/avatar7.jpg",
                    submitDate: '29/02/2016',
                    referralTracking: 'Finish',
                    appointmentType: 'On Site',
                    appointmentDate: '29/02/2016 13:31',
                    correspondence: 'N',
                },
        ];
		var tbody = data.map(function(d, index){
    		return (
    			<tr key={index} onClick={self._goDetail.bind(self, d)}>
                    <td>{index+1}</td>
                    <td className="fit"><img className="user-pic" src={d.imgPatient} /></td>
                    <td><a href="javascript:;" className="primary-link">{d.patient}</a></td>
                    <td className="fit"><img className="user-pic" src={d.imgTreatingPractitioner} /></td>
                    <td><a href="javascript:;" className="primary-link">{d.treatingPractitioner}</a></td>
                    <td>{d.submitDate}</td>
                    <td>
                    	<label className={d.referralTracking==="Received"?'label label-primary':'label label-default'}>Received</label>
                    	<i className="glyphicon glyphicon-arrow-right"></i>
                    	<label className={d.referralTracking==="Appoint_Pendding"?'label label-primary':'label label-default'}>Appoint_Pendding</label>
                    	<i className="glyphicon glyphicon-arrow-right"></i>
                    	<label className={d.referralTracking==="Appoint_Time"?'label label-primary':'label label-default'}>Appoint_Time</label>
                    	<i className="glyphicon glyphicon-arrow-right"></i>
                    	<label className={d.referralTracking==="Attended"?'label label-primary':'label label-default'}>Attended</label>
                    	<i className="glyphicon glyphicon-arrow-right"></i>
                    	<label className={d.referralTracking==="Wait_List_Surgery"?'label label-primary':'label label-default'}>Wait_List_Surgery</label>
                    	<i className="glyphicon glyphicon-arrow-right"></i>
                		<label className={d.referralTracking==="Finish"?'label label-primary':'label label-default'}>Finish</label>
                    </td>
                    <td>{d.appointmentType}</td>
                    <td>{d.appointmentDate}</td>
                    <td className="text-center">
                    	<span className="bold theme-font primary-link">
	                    	<i className={d.correspondence==="Y" 
	                    		? "glyphicon glyphicon-ok text-primary" 
	                    		: "glyphicon glyphicon-remove text-default"}>
	                    	</i>
                    	</span>
                    </td>
                    <td>
                    	<span className="bold theme-font primary-link">
                    		<a to={self.props.link+d.id}><i className="glyphicon glyphicon-search"></i></a>
                    	</span>
                    </td>
                </tr>
    		);
    	});
        var table =
            <table className="table table-hover table-light">
                <thead>
                    <tr className="uppercase">
                        <th width="1">#</th>
                        <th colSpan="2">Patient</th>
                        <th colSpan="2">Treating Practitioner</th>
                        <th>Submit Date</th>
                        <th style={{"minWidth": "550px"}}>Referral Tracking</th>
                        <th>Appointment Type</th>
                        <th>Appointment Date</th>
                        <th width="1">Correspondence</th>
                        <th width="1">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>; 
        var pagination = 
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <div className="dataTables_info" id="sample_1_info" role="status" aria-live="polite">
                        Showing 1 to 2 of 2 entries
                    </div>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className="dataTables_paginate paging_bootstrap_number text-right" id="sample_1_paginate" >
                        <ul className="pagination" style={{"visibility": "visible"}}>
                            <li className="prev disabled"><a href="#" title="Prev"><i className="fa fa-angle-left"></i></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li className="next disabled"><a href="#" title="Next"><i className="fa fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>;
		return (
            <div>
                <Portlet
                    caption_subject="appointment"
                    caption_helper=""
                    caption_icon="icon-list"
                    type="light" color="blue-madison"
                    isCreate="true"
                    isFilter="true">
                        <button onClick={this._testOnClick}>ddddd</button>
                        <div>
                            <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20 margin-bottom-20">
                                {table} 
                            </div>
                            {pagination} 
                        </div>
                </Portlet>
            </div>
		);

	},
});

render(
    <List />,
    document.getElementById('app')
)