import React, { 
	Component,
	PropTypes
} from 'react';

class PostCardBuilder extends Component {
	static PropTypes = {
		data: PropTypes.string
	}

    render() {
        return (
        	<h1>{this.props.data}</h1>
        );
    }
}

export default PostCardBuilder;
