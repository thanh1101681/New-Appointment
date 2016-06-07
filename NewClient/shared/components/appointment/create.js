import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import ModalCreateAppointment from './directive/modal_create_appointment'
import PortletCreateAppointment from './directive/PortletCreateAppointment'
class Create extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <PortletCreateAppointment />
                <ModalCreateAppointment />
            </div>
            )
    }
}
render(
    <Create />,
    document.getElementById('app')
    )