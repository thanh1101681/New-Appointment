import React, {Component, PropTypes} from 'react'
class TreatingPractitioner extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
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
			)
	}
}
export default TreatingPractitioner