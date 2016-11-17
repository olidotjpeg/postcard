import React, { 
	Component,
	PropTypes
} from 'react';
import classNames from 'classnames';

// CSS
import postcard from './postcard.css';


class PostCardBuilder extends Component {
	static PropTypes = {
		data: PropTypes.object
	}

	constructor() {
		super();

		this.state = {
			flipped: false
		};
	}

	flipCard() {
		this.setState({
			flipped : !this.state.flipped
		});
	}

    render() {

    	let flippedClass = this.state.flipped ? postcard.flipped : '';

        return (
        	<div className={postcard.container}>
	        	<div className={classNames(flippedClass, postcard.postcard)}>
	        		<div className={postcard.front}>
		        		<img src={this.props.data.url} alt={this.props.data.title} />
		        	</div>
		        	<div className={postcard.back}>
		        		<form className={postcard.form}>
		        			<input type="text" />
		        		</form>
		        		<div className={postcard.information}>
			        		<p>{this.props.data.author}</p>
			        		<p>{this.props.data.title}</p>
		        		</div>
		        	</div>
	        	</div>
	        	<button onClick={() => this.flipCard()}>Flip me</button>
        	</div>
        );
    }
}

export default PostCardBuilder;
