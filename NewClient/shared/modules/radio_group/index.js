import React, {Component, PropTypes} from 'react'
import * as ReactDom from 'react-dom'
class RadioGroup extends Component {
	static propsType = {
		classGroup: PropTypes.string,
		nameGroup: PropTypes.string,
		name: PropTypes.string,
		classLabelGroup: PropTypes.string,
		classInputGroup: PropTypes.string,
		classRadioList: PropTypes.string,
		classLabel: PropTypes.string,
		classInput: PropTypes.string,
		data: PropTypes.array,
		onChange: PropTypes.func
	}
	constructor() {
		super()
	}
	componentDidMount() {
	}
	_onClick(val) {
		var currentRadio = null
		this.props.data.map(function(radio_v, radio_i){
			if(radio_v.value==val){
				//set css selected
				currentRadio = val
			}
			else {
				//remove css selected
				this._inactive(radio_v.value)
			}
			//call props onChange
		}.bind(this))
		this._active(currentRadio)
		this.props.onChange(val);
	}
	_active(val) {
		var $radio = $(this.refs['radio_'+val])
		$radio.addClass('btn-primary')
		$radio.removeClass('active')
	}
	_inactive(val) {
		var $radio = $(this.refs['radio_'+val])
		$radio.removeClass('btn-primary')
		$radio.removeClass('active')
	}
	_setValue(val) {
		this._active(val)
		var $radio = $(':radio[value="' + val + '"]')
		 $radio.attr('checked', 'checked');
	}
	render() {
		var radioList = this.props.data.map(function(radio_v, radio_i){
			return (
                    <div className={this.props.classRadioList} 
                    	 data-toggle="buttons" 
                    	 key={radio_i+'-group'} 
                    	 onClick={this._onClick.bind(this,radio_v.value)}>
                        <label className={this.props.classLabel} 
                        key={radio_i+'-label'} 
                        ref={"radio_" + radio_v.value}>
                            <input type="radio"
                            	   name={this.props.name} 
                            	   value={radio_v.value} 
                            	   className={this.props.classInput}
                            	   key={radio_i+'-input'}  
                            	    />{radio_v.name}
                        </label>
                    </div>
				)
		}.bind(this))
		return (
			<div className={this.props.classGroup}>
				<label className={this.props.classLabelGroup}>{this.props.nameGroup}</label>
	            <div className={this.props.classInputGroup}>
	            	{radioList}
	            </div>
	        </div>
			)
	}
}
RadioGroup.defaultProps = {
	nameGroup: '',
    classLabelGroup: 'control-label text-right col-lg-3 col-md-3 col-sm-3 col-xs-3',
    classInputGroup:'col-lg-8 col-md-8 col-sm-8 col-xs-8',
    classRadioList:'btn-group',
	data: [],
}
export default RadioGroup