import React, { 
	Component,
	PropTypes
} from 'react';
import classNames from 'classnames';

// CSS
import './postcard.css';


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

    	let flippedClass = this.state.flipped ? 'flipped' : '';

        return (
        	<div className={classNames(flippedClass, 'postcard')}>
        		<div className="front" onClick={() => this.flipCard()}>
	        		<img src={this.props.data.url} alt={this.props.data.title} />
	        	</div>
	        	<div className="back">
	        		<form className="form">
	        			<input type="text" />
	        		</form>
	        		<div className="information">
		        		<p>{this.props.data.author}</p>
		        		<p>{this.props.data.title}</p>
	        		</div>
	        	</div>
        	</div>
        );
    }
}

export default PostCardBuilder;
