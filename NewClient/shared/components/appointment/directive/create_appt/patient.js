import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import BasicInfo from './basic_info'
import ContactInfo from './contact_info'
import SkinInfo from './skin_info'
import GPInfo from './gp_info'
import RadioGroup from '../../../../modules/radio_group'
class StepPatient extends Component {
	constructor() {
		super()
        this.dataYesNo = [{
            value: 'Y',
            name: 'Yes'
        },{
            value: 'N',
            name: 'No'
        }]
	}
	componentDidMount() {

	}
    _onChangeSkin(val) {
        val == 'Y' ? this.refs.skin_info._show() : this.refs.skin_info._hide()
    }
    _onChangeGP(val) {
        val == 'Y' ? this.refs.gp_info._show() : this.refs.gp_info._hide()
    }
	render() {
		return (
			 <div className="tab-pane" id="patient">
                <h3 className="block text-success">Patient information</h3>
                <h4 className="form-section">Basic information</h4>
                {/*Basic infomation*/}
                <BasicInfo />
                <h4 className="form-section">Contact information</h4>
                <ContactInfo />
                <h4 className="form-section">Next of kin</h4>
                <div classNam="row">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="Next of kin available ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangeSkin.bind(this)}
                                         />
                    </div>
                </div>
                <SkinInfo ref="skin_info"/>
                <h4 className="form-section">General Practitioner</h4>
                    <div classNam="row">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="Do you have GP ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangeGP.bind(this)}
                                        ref="GpStatus"
                                         />
                    </div>
                </div>
                <GPInfo ref="gp_info"/>
            </div>
			)
	}
}
export default StepPatient