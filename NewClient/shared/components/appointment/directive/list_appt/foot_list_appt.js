import React, {Component, PropTypes} from 'react'
import Pagination from '../../../../modules/pagination'
class TfootListAppt extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
                this.refs.pagination.init()
    }
    render() {
        return (
            <tfoot>
                <tr>
                    <th colSpan="11">
                        <Pagination ref="pagination" maxButtons={5} item={5} activePage={1} />
                        <div className="dataTables_info" id="sample_3_info" role="status" aria-live="polite">Showing 1 to 10 of 43 entries</div>
                    </th>
                </tr>
            </tfoot>
            )
    }
}
export default TfootListAppt
