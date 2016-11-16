import React, { 
	Component,
	PropTypes
} from 'react';
import { Link } from 'react-router';

// CSS
import './navigation.css';

class Navigation extends Component {

	static PropTypes = {
		title: PropTypes.string
	}

    render() {
        return (
        	<nav className="main-navigation">
        		<Link to={'/user'} className="nav-link">
        			<i className="fa fa-user" aria-hidden="true"></i>
    			</Link>
        		<h1>{this.props.title}</h1>
        		<Link to={'/'} className="nav-link">Logo</Link>
        	</nav>
        );
    }
}

export default Navigation;
