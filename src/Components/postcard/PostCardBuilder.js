import React, { 
	Component,
	PropTypes
} from 'react';
import classNames from 'classnames';
import Hammer from 'react-hammerjs';

// CSS
import postcard from './postcard.css';


class PostCardBuilder extends Component {
	static PropTypes = {
		data: PropTypes.object
	}

	constructor() {
		super();

		this.state = {
			flipped: true,
			value: ''
		};
	}

	flipCard() {
		this.setState({
			flipped : !this.state.flipped
		});
	}

	handleSwipe() {
		this.setState({
			flipped : !this.state.flipped
		});
	}

	pogChamp() {
		console.log('elegiggle')
		event.preventDefault();
	}

	handleRecipient(event) {
		console.log(event);
	}

	handleAddress() {

	}

	handleCountry() {

	}

    render() {

    	let flippedClass = this.state.flipped ? postcard.flipped : '';

        return (
        	<div className={postcard.container}>
        		<div className={postcard.section}>
		        	<Hammer onSwipe={() => this.handleSwipe()}>
			        	<div className={classNames(flippedClass, postcard.postcard)}>
			        		<div className={postcard.front}>
				        		<img src={this.props.data.url} alt={this.props.data.title} />
				        	</div>
				        	<form onSubmit={() => this.pogChamp()} className={postcard.back}>
				        		<div className={postcard.form}>
				        			<textarea className={postcard.textarea}></textarea>
				        		</div>
				        		<div className={postcard.information}>
				        			<div className={postcard.logo}>logo</div>
				        			<input type="text" className={postcard.input} value={this.state.value} onChange={() => this.handleRecipient(event)} />
				        			<input type="text" className={postcard.input} onChange={() => this.handleAddress(this)} />
				        			<input type="text" className={postcard.input} onChange={() => this.handleCountry(this)} />
					        		<div className={postcard.core}>
						        		<p>{this.props.data.author}</p>
						        		<p>{this.props.data.title}</p>
					        		</div>
					        		<input type="submit" />
				        		</div>
				        	</form>
			        	</div>
		        	</Hammer>
	        	</div>
	        	<div className={postcard.buttonGroup}>
		        	<button className={postcard.button} onClick={() => this.flipCard()}>
		        		<span className={classNames(postcard.meta, postcard.large)}>
		        			Flip me
	        			</span>
		        		<span className={postcard.meta}>
		        			or just swipe to see the other side
		        		</span>
	        		</button>
        		</div>
        	</div>
        );
    }
}

export default PostCardBuilder;
