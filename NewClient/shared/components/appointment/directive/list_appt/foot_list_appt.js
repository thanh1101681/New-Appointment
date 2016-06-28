import React, {Component, PropTypes} from 'react'
import Pagination from '../../../../modules/pagination'
class TfootListAppt extends Component {
    static propTypes = {
        data: PropTypes.object,
        onChange: PropTypes.func
    }
    constructor() {
        super()
    }
    componentDidMount() {
        this.refs.pagination.init(this.props.data)
    }
    _init(obj) {
       this.refs.pagination.init(obj)
    }
    _onChange(page) {
        if(this.props.onChange != 'undefined') {
            this.props.onChange(page)
        }
    }
    render() {
        return (
            <tfoot>
                <tr>
                    <th colSpan="11">
                        <Pagination ref="pagination" onChange={this._onChange.bind(this)}/>
                        <div className="dataTables_info" id="sample_3_info" role="status" aria-live="polite">{"Total: " + this.props.data.totalPage}</div>
                    </th>
                </tr>
            </tfoot>
            )
    }
}
TfootListAppt.defaultProps = {
    data: {}
}
export default TfootListAppt
