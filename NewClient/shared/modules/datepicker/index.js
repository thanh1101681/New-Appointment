import React, {Component, PropTypes} from 'react'
class Datepicker extends Component {
	static propTypes = {
		type: PropTypes.number,
		label: PropTypes.string,
		name: PropTypes.string,
		required: PropTypes.bool,
		labelWidth: PropTypes.string,
        inputWidth: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
	}
	getDefaultProps(){
		return {
			type: 1,
			className: "col-lg-3 col-md-3",
            labelWidth: "col-lg-8 col-md-8",
		};
	}
	componentDidMount(){
		var self = this;
		$(this.refs.datepicker).datepicker({
			// rtl: App.isRTL(),
			orientation: "left",
			format:'dd/mm/yyyy',
			startDate: this.props.startDate,
			autoclose: !0,
		}).on("changeDate", function(){
		});

		if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	_setValue(value){
		$(this.refs.datepicker).datepicker("setDate", value);
	}
	_getValue(){
		return $(this.refs.datepicker).val();
	}
	render(){
		var required = this.props.required == true ? <span className="required"> * </span> : '';
		var help_block = this.props.required == true ? <span className="help-block"> Provide your {this.props.label} </span> : '';
		var r0 = 
			<input type="text" 
				name={this.props.name}
				className="form-control" 
				placeholder="dd/mm/yyyy"
				readOnly="true"
				required={this.props.required}
				ref="datepicker"/>;
		var r1 = 
			<div className="form-group">
				<label className="control-label">{this.props.label} {required}</label>
				<input type="text" 
					name={this.props.name}
					className="form-control" 
					ref="datepicker"
					placeholder="dd/mm/yyyy"
					required={this.props.required}
					readOnly="true" /> {help_block}
			</div>;
		var r2 = 
			<div className="form-group">
				<label className="control-label" ref="labelWidth">{this.props.label} {required}</label>
				<div ref="inputWidth">
					<input type="text" 
						name={this.props.name}
						className="form-control" 
						ref="datepicker"
						placeholder="dd/mm/yyyy"
						required={this.props.required}
						readOnly="true" /> {help_block}
				</div>
			</div>;

		if (this.props.type == 2) return r2;
		if (this.props.type == 0) return r0;
		return r1;
	}
}
export default Datepicker