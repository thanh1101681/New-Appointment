import React, {Component, PropTypes} from 'react'
import Service from '../../services/restfulAPI'
class FileInput extends Component {
	static propTypes = {
		label: PropTypes.string,
		image: PropTypes.string,
		defaultImage: PropTypes.string,
		name: PropTypes.string,
		id:PropTypes.str
	}
	getDefaultProps(){
		return {
			label: '',
			defaultImage: "assets/global/images/no_person.jpg",
		};
	}
	componentDidMount(){
	 //    var c = $(this.refs.canvas);
	 //    var ctx = c[0].getContext("2d");
	 //    var img = $(this.refs.canvas);
	 //    ctx.drawImage(img[0], 10, 10);
		// $('.fileinput').fileinput();
	}
	_onAddFile(){
		$(this.refs.inputFile).change(e => {
			if($(this.refs.inputFile).prop('files')[0]) {
				var fileData = new FormData();
				fileData.append('uploadFile',$(this.refs.inputFile).prop('files')[0]);
				Service.uploadFile(fileData)
				.then(function(response) {
					console.log("response ",response);
				}, function(err) {
					console.log("err ",err)
				})
			}
		})
	}
	_uploadFile() {
		if($(this.refs.inputFile).prop('files')[0]) {
			var fileData = new FormData();
			fileData.append('uploadFile',$(this.refs.inputFile).prop('files')[0]);
			Service.uploadFile(fileData)
			.then(function(response) {
				console.log("response ",response);
			}, function(err) {
				console.log("err ",err)
			})
		}
	}
	render(){
		return (
			<div className="form-group" ref="file">
                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-1">&nbsp;</label>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-10">
                    <div className="fileinput fileinput-new" data-provides="fileinput">
                        <div className="fileinput-new thumbnail" style={{"width": "200px", "height": "150px"}}>
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" /> </div>
                        <div className="fileinput-preview fileinput-exists thumbnail" style={{"maxWidth": "200px", "maxHeight":"150px"}}> </div>
                        <div>
                            <span className="btn default btn-file">
                                <span className="fileinput-new"> Select image </span>
                                <span className="fileinput-exists"> Change </span>
                                <input type="file" name="input" id="input" ref="inputFile" /> 
                            </span>
                            <a href="javascript:;" className="btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
export default FileInput