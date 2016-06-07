import { render } from 'react-dom'
import React, { Component, PropTypes } from 'react'
class Modal extends Component {
    constructor() {
        super()
        this.dataModal = {}
    }
    getInitialState() {
        return {}
    }
    componentDidMount() {}
    render() {
    	return (
    		 <div className="form-horizontal margin-top-30">
                <div className="form-group">
                    <label className="control-label col-lg-3 col-md-4">Speciality</label>
                    <div className="col-lg-6 col-md-7">
                        <select className="form-control">
                            <option value="plastic_surgeons">Plastic surgeons</option>
                            <option value="orthopaedic_surgeons">Orthopaedic surgeons</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-lg-3 col-md-4">Name of specialist (if required)</label>
                    <div className="col-lg-6 col-md-7">
                        <select className="form-control">
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-lg-3 col-md-4">Site</label>
                    <div className="col-lg-6 col-md-7">
                        <select className="form-control">
                            <option value="joondalup">Joondalup</option>
                            <option value="belmont">Belmont</option>
                            <option value="rockingham">Rockingham</option>
                        </select>
                    </div>
                </div>
            </div>
    		)
    }
}
export default Modal
