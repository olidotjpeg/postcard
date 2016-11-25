import React, { Component } from 'react';
import { upload } from '../services/upload';

class Upload extends Component {

	constructor() {
		super();

		this.state = {
			recipient: ''
		}
	}

	componentDidMount() {
		return upload().then(function(response) {
		    console.log(response);
		})
	}

	handleSubmit(e) {
		let formData = {
			recipient: this.state.recipient
		}

		console.log(formData);
	}

	handleRecipient(e) {
		this.setState({ 
			recipient: e.target.value
		});
	}

    render() {

    	console.log(this.state);

        return (
            <section>
            	<h1>Upload View</h1>
            	<div>
            		<input type="text" value={this.state.recipient || ''} onChange={this.handleRecipient.bind(this)} />
            		<button onClick={(e) => this.handleSubmit()}>Submit</button>
            	</div>
            </section>
        );
    }
}

export default Upload;
