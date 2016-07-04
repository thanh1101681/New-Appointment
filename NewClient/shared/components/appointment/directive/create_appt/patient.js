import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import BasicInfo from './basic_info'
import ContactInfo from './contact_info'
import KinInfo from './kin_info'
import GPInfo from './gp_info'
import PatientDVA from './patient_dva'
import PatientFund from './patient_fund'
import PatientMedicare from './patient_medicare'
import PatientPension from './patient_pension'
import RadioGroup from '../../../../modules/radio_group'
class StepPatient extends Component {
    static propTypes = {
        defaultValue: PropTypes.object,
        data: PropTypes.object
    }
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
    componentDidUpdate() {
        //set value default
        for(var keyObj in this.refs){
            if(keyObj &&
                this.props.defaultValue[keyObj] &&
                this.refs[keyObj]){
                this.refs[keyObj]._setValue(this.props.defaultValue[keyObj])
            }
        }
        //hidden default
        this.refs.kin_info._hide()
        this.refs.gp_info._hide()
        this.refs.patient_fund._hide()
        this.refs.patient_dva._hide()
        this.refs.patient_medicare._hide()
        this.refs.patient_pension._hide()
    }
    _onChangeKin(val) {
        val == 'Y' ? this.refs.kin_info._show() : this.refs.kin_info._hide()
    }
    _onChangeGP(val) {
        val == 'Y' ? this.refs.gp_info._show() : this.refs.gp_info._hide()
    }
    _onChangeFund(val) {
        val == 'Y' ? this.refs.patient_fund._show() : this.refs.patient_fund._hide()
    }
    _onChangeDVA(val) {
        val == 'Y' ? this.refs.patient_dva._show() : this.refs.patient_dva._hide()
    }
    _onChangeMedicare(val) {
        val == 'Y' ? this.refs.patient_medicare._show() : this.refs.patient_medicare._hide()
    }
    _onChangePension(val) {
        val == 'Y' ? this.refs.patient_pension._show() : this.refs.patient_pension._hide()
    }
	render() {
		return (
			 <div className="tab-pane" id="patient">
                <h3 className="block text-success">Patient information</h3>
                <h4 className="form-section">Basic information</h4>
                {/*Basic infomation*/}
                <BasicInfo defaultValue={this.props.defaultValue}
                           data={{dataCountry: this.props.data.dataCountry, 
                           dataLanguage: this.props.data.dataLanguage}}
                           ref="basic_info" />
                <h4 className="form-section">Contact information</h4>
                <ContactInfo defaultValue={this.props.defaultValue}/>
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
                                        onChange={this._onChangeKin.bind(this)}
                                        ref="hasKin"
                                         />
                    </div>
                </div>
                <KinInfo ref="kin_info" defaultValue={this.props.defaultValue}
                                        data={{dataCountry: this.props.data.dataCountry}}/>
                <h4 className="form-section">General Practitioner</h4>
                    <div className="row">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="Do you have GP ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangeGP.bind(this)}
                                        ref="hasGP"
                                         />
                    </div>
                </div>
                <GPInfo ref="gp_info" defaultValue={this.props.defaultValue}
                                      data={{dataCountry: this.props.data.dataCountry}}/>
                 <h4 className="form-section">Patient Fund</h4>
                <div className="row">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="Fund ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangeFund.bind(this)}
                                        ref="hasFund"
                                         />
                    </div>
                </div>
                <PatientFund ref="patient_fund"/>
                <div className="row margin-top-20">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="DVA ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangeDVA.bind(this)}
                                        ref="hasDVA"
                                         />
                    </div>
                </div>
                <PatientDVA ref="patient_dva" />
                <div className="row margin-top-20">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="Medicare ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangeMedicare.bind(this)}
                                        ref="hasMedicare"
                                         />
                    </div>
                </div>
                <PatientMedicare ref="patient_medicare" />
                <div className="row margin-top-20">
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <RadioGroup     nameGroup="Pension ?"
                                        classLabelGroup="control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3"
                                        classInputGroup="col-lg-8 col-md-8 col-sm-8 col-xs-8"
                                        classRadioList="btn-group"
                                        classLabel="btn btn-sm btn-default"
                                        classInput="toggle"
                                        data={this.dataYesNo}
                                        onChange={this._onChangePension.bind(this)}
                                        ref="hasPension"
                                         />
                    </div>
                </div>
                <PatientPension ref="patient_pension" />
            </div>
			)
	}
}
StepPatient.defaultProps = {
    defaultValue: {},
    data: {}
}
export default StepPatient