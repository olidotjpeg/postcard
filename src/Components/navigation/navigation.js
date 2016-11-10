import React, { Component } from 'react';
import { Link } from 'react-router';

// CSS
import './navigation.css';

class Navigation extends Component {

    constructor() {
        super();

        this.state = {
            offCanvasState: false
        }
    }

	superFunction() {
		let something = this.state.offCanvasState = !this.state.offCanvasState;

		console.log(something);
	}

    render() {

        return (
        	<div className="container">
	        	<nav className="main-menu">
	        		<button onClick={() => this.superFunction()}>A</button>
	        	</nav>
	        	<div className="off-canvas">
	        		<ul>
	        			<li>
	        				<Link to={'/create'}>Create</Link>
	        			</li>
	        		</ul>
	        	</div>
        	</div>
        );
    }
}

export default Navigation;
