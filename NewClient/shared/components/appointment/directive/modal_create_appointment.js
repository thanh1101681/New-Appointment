import { render } from 'react-dom'
import React, { Component, PropTypes } from 'react'
import Modal from '../../../modules/modal'

class ModalCreateAppointment extends Component {
    constructor() {
        super()
    }
    componentDidMount() {}
    _openModalSkinCancer() {
        this.refs.modalSkinCancer._show()
    }
    _openModalHandCondition() {
        this.refs.modalHandCondition._show()
    }
    _openModalPNS() {
        this.refs.modalPNS._show()
    }
    render() {
        return (
        	<div>
                <Modal  title="Skin cancer" ref="modalSkinCancer">
                    <div className="checkbox-list">
                        <label><input type="checkbox" className="icheck"/> BCC</label>
                        <label><input type="checkbox" className="icheck"/> SCC</label>
                        <label><input type="checkbox" className="icheck"/> Melanoma</label>
                        <label><input type="checkbox" className="icheck"/> Merkel`s</label>
                        <label><input type="checkbox" className="icheck"/> Others</label>
                    </div>
                </Modal>
                <Modal  title="Hand condition" ref="modalHandCondition">
                    <div className="checkbox-list">
                        <label><input type="checkbox" className="regular-checkbox"/> Ganglion</label>
                        <label><input type="checkbox" className="regular-checkbox"/> Arthritis</label>
                        <label><input type="checkbox" className="regular-checkbox"/> DeQuervains/Trigger</label>
                        <label><input type="checkbox" className="regular-checkbox"/> Contracture</label>
                    </div>
                </Modal>
                <Modal  title="PNS" ref="modalPNS">
                    <div className="checkbox-list">
                        <label><input type="checkbox" className="regular-checkbox"/> Carpal Tunnel</label>
                        <label><input type="checkbox" className="regular-checkbox"/> Cubital Tunnel</label>
                        <label><input type="checkbox" className="regular-checkbox"/> Complex Reconstructive Case</label>
                        <label><input type="checkbox" className="regular-checkbox"/> Other</label>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default ModalCreateAppointment
