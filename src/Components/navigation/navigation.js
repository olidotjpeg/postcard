import React, { 
	Component,
	PropTypes
} from 'react';
import { Link } from 'react-router';

// CSS
import nav from './navigation.css';

class Navigation extends Component {

	static PropTypes = {
		title: PropTypes.string
	}

    render() {
        return (
        	<nav className={nav.mainNavigation}>
        		<Link to={'/user'} className={nav.navLink}>
        			<i className="fa fa-user" aria-hidden="true"></i>
    			</Link>
        		<h1>{this.props.title}</h1>
        		<Link to={'/'} className={nav.navLink}>Logo</Link>
        	</nav>
        );
    }
}

export default Navigation;
