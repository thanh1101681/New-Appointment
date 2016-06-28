import React, {Component, PropTypes} from 'react'
class Dropdown2 extends Component {
	static propTypes = {
		type: React.PropTypes.number,
		label: React.PropTypes.string,
		name: React.PropTypes.string,
		data: React.PropTypes.array,
		className: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		multiple: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		required: React.PropTypes.bool,
		size: React.PropTypes.number
	}
	constructor() {
		super()
	}
	componentDidMount(){
		var self = this;
		$(this.refs.select).select2({
            width: null,
            placeholder: 'Select...'
        })
        .on("change", function(e){
        	console.log('change',e);
        });
        var multiple = this.props.multiple == true ? "select2-multiple" : "select2";
        $(this.refs.select).addClass(multiple);

        if (this.props.type == 2) {
            $(this.refs.labelWidth).addClass(this.props.labelWidth);
            $(this.refs.inputWidth).addClass(this.props.inputWidth);
        }
	}
	render(){
		var option = this.props.data.map(function(d, index){
			return <option key={index} value={d.value}>{d.name}</option>;
		});
		var r0 = 
			<select className="form-control" 
				name={this.props.name} ref="select" 
				multiple={this.props.multiple} 
				disabled={this.props.disabled}
				required={this.props.required}
				size={this.props.size}
				defaultValue={this.props.defaultValue}>
					{option}
			</select>
		var r1 = 
			<div className="form-group">
				<label className="control-label">{this.props.label}</label>
				<select className="form-control" 
					name={this.props.name} ref="select" 
					multiple={this.props.multiple} 
					disabled={this.props.disabled}
					required={this.props.required}
					size={this.props.size}
					defaultValue={this.props.defaultValue}>
						{option}
				</select>
			</div>;
		var r2 =
			<div className="form-group">
				<label className="control-label" ref="labelWidth">{this.props.label}</label>
				<div ref="inputWidth">
					<select className="form-control" 
						name={this.props.name} ref="select" 
						multiple={this.props.multiple} 
						disabled={this.props.disabled}
						required={this.props.required}
						size={this.props.size}
						defaultValue={this.props.defaultValue}>
							{option}
					</select>
				</div>
			</div>;
		if (this.props.type == 2) return r2;
		if (this.props.type == 0) return r0;
		return r1;
	}
}
Dropdown2.defaultProps = {
			className: "",
			defaultValue: "",
			multiple: false,
			disabled: false,
			required: false,
			size: 1,
			data: [],
			className: "col-lg-3 col-md-3",
            labelWidth: "col-lg-8 col-md-8"
}
export default Dropdown2