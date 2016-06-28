import React, {Component, PropTypes} from 'react'
class Pagination extends Component {
	constructor(){
		super();
		this.data = {
			activePage:1,
            item : 1,
            maxButtons: 5,
		};
	}
	static propTypes = {
        item : PropTypes.number,
        maxButtons: PropTypes.number,
        activePage: PropTypes.number,
        onChange: PropTypes.func,
	}
    init(obj) {
        if(!_.isEmpty(obj)) {
            this.data = obj;
        }
        var self = this;
        $('#pagination').empty()
        $('#pagination').removeData("twbs-pagination")
        $('#pagination').unbind("page")
        $('#pagination').twbsPagination({
            startPage: this.data.activePage,
            totalPages:this.data.item,
            visiblePages:this.data.maxButtons,
            initiateStartPageClick: false,
			onPageClick: function (event, page) {
				if(typeof self.props.onChange !== 'undefined'){
		            self.props.onChange(page);
		        }
	        }
        });
    }
    componentDidMount() {
    }
	render(){
		return(
            <ul id="pagination" className="pagination-sm"></ul>
        )
	}
}
export default Pagination