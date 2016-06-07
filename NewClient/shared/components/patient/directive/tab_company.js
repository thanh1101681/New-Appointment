import React, {Component, PropTypes} from 'react'
import InputText from '../../../modules/inputText'
import InputTextarea from '../../../modules/inputTextarea'
class TabCompany extends Component {
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
            <div className="tab-pane" id="tab_company" ref="tab_company">
                <h4 className="form-section">Company information <a className="btn red">Link company</a></h4>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margin-bottom-40">
                        <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive ">
                            <table className="table table-light">
                                <thead>
                                    <tr className="uppercase">
                                        <th width="1">#</th>
                                        <th>Company name</th>
                                        <th className="text-center">Active</th>
                                        <th width="1"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><a className="primary-link">Meditek Ltd.</a></td>
                                        <td className="text-center"><i className="fa fa-check font-green-jungle"></i></td>
                                        <td><a className="btn btn-icon-only btn-primary"><i className="fa fa-wrench"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><a className="primary-link">Redimed Ltd.</a></td>
                                        <td className="text-center"><i className="fa fa-remove font-red"></i></td>
                                        <td><a className="btn btn-icon-only btn-primary"><i className="fa fa-wrench"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 border-left">
                        <InputText label="Company name:" 
                            type={2}
                            labelWidth="col-lg-4 col-md-6 col-sm-6 col-xs-4 text-right"
                            inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-8"
                            ref="company_name"/>
                        <InputTextarea label="Description:" 
                            type={2}
                            labelWidth="col-lg-4 col-md-6 col-sm-6 col-xs-4 text-right"
                            inputWidth="col-lg-8 col-md-6 col-sm-6 col-xs-8"
                            ref="description"/>
                        <hr/>
                        <h4 className="form-section">Site information</h4>
                        <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20">
                            <table className="table table-hover table-light">
                                <thead>
                                    <tr className="uppercase">
                                        <th width="1">#</th>
                                        <th>Site name</th>
                                        <th className="text-center">Address</th>
                                        <th>Contact name</th>
                                        <th>Contact number</th>
                                        <th width="1">Enable</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><a className="primary-link">Meditek Ltd.</a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center"><i className="fa fa-check font-green-jungle"></i></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><a className="primary-link">Meditek Ltd.</a></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center"><i className="fa fa-remove font-red"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    	)
    }
}
export default TabCompany