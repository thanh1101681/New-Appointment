import React, {Component, PropTypes} from 'react'
import * as ReactDOM from 'react-dom'
class Form extends Component {
	static propTypes = {
		id: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object,
		onSubmit: PropTypes.func 
	}
	constructor() {
		super()
		this.$root = null
		this.serializedObject = null
	}
	componentDidMount() {
		this.$root = $(ReactDOM.findDOMNode(this))
	}
	_onSubmit(e) {
		e.preventDefault()
		if(!_.isUndefined(this.props.onSubmit)) {
			this.serializedObject = this.$root.serializeObject()
			this.props.onSubmit()
		}
	}
	_getSerializedObject() {
		return this.serializedObject
	}
	_setValue(data) {
		
	}
	render() {
		return (
			<form onSubmit={this._onSubmit.bind(this)} 
			      className={this.props.className} 
			      style={this.props.style}
			      id={this.props.id} 
			      noValidate>
			      {this.props.children}
			</form>
			)
	}
}
export default Form