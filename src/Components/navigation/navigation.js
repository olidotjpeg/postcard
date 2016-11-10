import React, { 
	Component,
	PropTypes
} from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// CSS
import './navigation.css';

class Navigation extends Component {

	static PropTypes = {
		title: PropTypes.string
	}

    constructor() {
        super();

        this.state = {
            offCanvasState: false
        }
    }

	offCanvasHandler() {
		if (this.state.offCanvasState) {
			this.setState({
				offCanvasState: false
			})
		} else {
			this.setState({
				offCanvasState: true
			})
		}
	}

    render() {

    	let menuStateClass = this.state.offCanvasState ? 'open' : '';

        return (
        	<div className="container">
	        	<nav className="main-menu">
	        		<button onClick={() => this.offCanvasHandler()}>A</button>
	        		<h1>{this.props.title}</h1>
	        	</nav>
	        	<div className={classNames(menuStateClass, 'off-canvas')}>
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
