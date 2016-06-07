import React, {Component, PropTypes} from 'react'
class InputTextarea extends Component {
	static propTypes = {
		type: PropTypes.number,
		label: PropTypes.string,
		name: PropTypes.string,
		rows: PropTypes.number,
		placeholder: PropTypes.string,
		disabled: PropTypes.bool,
		readOnly: PropTypes.bool,
		required: PropTypes.bool,
		hide: PropTypes.bool,
		labelWidth: PropTypes.string,
        inputWidth: PropTypes.string,
	}
	getDefaultProps(){
		return {
			type: 1,
			hide: false,
			className: "col-lg-3 col-md-3",
            labelWidth: "col-lg-8 col-md-8",
		};
	}
	componentDidMount(){
		if(this.props.hide == true)
			$(this.refs.textarea).hide();
		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	_setValue(value){
		$(this.refs.textarea).val(value);
	}
	_getValue(){
		return $(this.refs.textarea).val();
	}
	_onChange() {
	}
	_show(){
		$(this.refs.formGroup).show();
	}
	_hide(){
		$(this.refs.formGroup).hide();
	}
	render(){
		var required = this.props.required == true ? <span className="required"> * </span> : '';
		var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';
		var r1 = 
			<div className="form-group" ref="formGroup">
				<label className="control-label">{this.props.label} {required}</label>
				<textarea
					name={this.props.name} 
					rows={this.props.rows}
					disabled={this.props.disabled}
					required={this.props.required}
					readOnly={this.props.readOnly}
					className="form-control" 
					ref="textarea" 
					onChange={this.onChange}
					placeholder={this.props.placeholder} >
				</textarea> {help_block}
			</div>;
		var r2 = 
			<div className="form-group" ref="formGroup">
				<label className="control-label" ref="labelWidth">{this.props.label} {required}</label>
				<div ref="inputWidth">
					<textarea
						name={this.props.name}
						rows={this.props.rows}
						disabled={this.props.disabled}
						required={this.props.required}
						readOnly={this.props.readOnly} 
						className="form-control" 
						ref="textarea" 
						onChange={this.onChange}
						placeholder={this.props.placeholder} >
					</textarea> {help_block}
				</div>
			</div>;
		var r = this.props.type == 2 ? r2 : r1;
		return <div>{r}</div>;
	}
}
export default InputTextarea