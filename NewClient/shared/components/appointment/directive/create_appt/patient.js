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
        this.refs['Appointment.Data.PatientKin']._hide()
        this.refs['Appointment.Data.DoctorGP']._hide()
        this.refs['Appointment.Data.PatientFund[0].Data']._hide()
        this.refs['Appointment.Data.PatientFund[1].Data']._hide()
        this.refs['Appointment.Data.PatientFund[2].Data']._hide()
        this.refs['Appointment.Data.PatientFund[3].Data']._hide()
    }
    _onChangeKin(val) {
        val == 'Y' ? this.refs['Appointment.Data.PatientKin']._show() : this.refs['Appointment.Data.PatientKin']._hide()
    }
    _onChangeGP(val) {
        val == 'Y' ? this.refs['Appointment.Data.DoctorGP']._show() : this.refs['Appointment.Data.DoctorGP']._hide()
    }
    _onChangeFund(val) {
        val == 'Y' ? this.refs['Appointment.Data.PatientFund[0].Data']._show() : this.refs['Appointment.Data.PatientFund[0].Data']._hide()
    }
    _onChangeDVA(val) {
        val == 'Y' ? this.refs['Appointment.Data.PatientFund[1].Data']._show() : this.refs['Appointment.Data.PatientFund[1].Data']._hide()
    }
    _onChangeMedicare(val) {
        val == 'Y' ? this.refs['Appointment.Data.PatientFund[2].Data']._show() : this.refs['Appointment.Data.PatientFund[2].Data']._hide()
    }
    _onChangePension(val) {
        val == 'Y' ? this.refs['Appointment.Data.PatientFund[3].Data']._show() : this.refs['Appointment.Data.PatientFund[3].Data']._hide()
    }
    _getValue() {
        var data = {}
        for(var key in this.refs) {
          if(key &&
            this.refs[key] &&
            this.refs[key]._getValue() &&
            this.refs[key]._getValue() != '') {
            data[key] = this.refs[key]._getValue()
          }
        }
        return data
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
                           ref="Appointment.Data.Patient" />
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
                <KinInfo ref="Appointment.Data.PatientKin" defaultValue={this.props.defaultValue}
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
                <GPInfo ref="Appointment.Data.DoctorGP" defaultValue={this.props.defaultValue}
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
                <PatientFund ref="Appointment.Data.PatientFund[0].Data"/>
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
                <PatientDVA ref="Appointment.Data.PatientFund[1].Data" />
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
                <PatientMedicare ref="Appointment.Data.PatientFund[2].Data" />
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
                <PatientPension ref="Appointment.Data.PatientFund[3].Data" />
            </div>
			)
	}
}
StepPatient.defaultProps = {
    defaultValue: {},
    data: {}
}
export default StepPatient