import React, {Component, PropTypes} from 'react'
class Pagination extends Component {
	constructor(){
		super();
		this.data = {
			activePage:1,
            item : 10,
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
        $('#pagination').twbsPagination({
            totalPages:this.data.item,
            visiblePages:this.data.maxButtons,
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