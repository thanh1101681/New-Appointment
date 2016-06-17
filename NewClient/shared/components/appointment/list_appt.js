import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import Portlet from '../../modules/portlet'
import TableListAppt from './directive/table_list_appt'
import PaginationListAppt from './directive/pagination_list_appt'
class ListAppt extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Portlet
                    caption_subject="appointment"
                    caption_helper=""
                    caption_icon="icon-list"
                    type="light" color="blue-madison"
                    isCreate="true"
                    isFilter="true">
                        <div>
                            <div className="table-scrollable table-scrollable-borderless table-responsive dt-responsive margin-top-20 margin-bottom-20">
                                <TableListAppt />
                            </div>
                            <PaginationListAppt /> 
                        </div>
                </Portlet>
            </div>
        )
    }
}
render(
    <ListAppt />,
    document.getElementById('app')
)