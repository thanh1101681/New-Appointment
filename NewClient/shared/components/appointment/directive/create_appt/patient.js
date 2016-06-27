import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import BasicInfo from './basic_info'
import ContactInfo from './contact_info'
import KinInfo from './kin_info'
import GPInfo from './gp_info'
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
    }
    _onChangeKin(val) {
        val == 'Y' ? this.refs.kin_info._show() : this.refs.kin_info._hide()
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
                                        ref="hasGP"
                                         />
                    </div>
                </div>
                <GPInfo ref="gp_info" defaultValue={this.props.defaultValue}
                                      data={{dataCountry: this.props.data.dataCountry}}/>
            </div>
			)
	}
}
StepPatient.defaultProps = {
    defaultValue: {},
    data: {}
}
export default StepPatient