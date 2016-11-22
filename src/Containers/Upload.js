import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Upload extends Component {

	constructor() {
		super();

		this.state = {
			files: [],
			test: ''
		};
	}

	onDrop(acceptedFiles) {
		this.setState({
        	files: acceptedFiles,
        	test: 'fixed'
      	});
    }

    render() {

    	console.log(this.state);

        return (
            <section>
            	<h1>Upload View</h1>
            	<Dropzone onDrop={this.onDrop} multiple={false}>
              		<div>Try dropping some files here, or click to select files to upload.</div>
	            </Dropzone>
	            <div>
	            	{this.state.files.map((file, index) => {
	            	    return (
	            	        <img src={file.preview} alt="asd" />
	            	    );
	            	})}
            	</div>
            </section>
        );
    }
}

export default Upload;
