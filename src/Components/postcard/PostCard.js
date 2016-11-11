import React, { 
    Component,
    PropTypes
} from 'react';
import classNames from 'classnames';

// CSS
import './postcard.css';

class PostCard extends Component {

    static PropTypes = {
        data: PropTypes.object
    }

    constructor() {
        super();

        this.state = {
            renderClass: false
        }
    }
    
    toggleClass = () => {
        const {renderClass} = this.state
        this.setState({renderClass : !renderClass});
    }
    
    render() {
        const toggleClass = this.state.renderClass ? "selected" : "";
        
        return (
            <li onClick={this.toggleClass}>
                <div className={classNames(toggleClass, 'card is-fullwidth')}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.data.url} alt="" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-5">{this.props.data.title}</p>
                            <p className="subtitle is-6">@{this.props.data.author}</p>
                        </div>
                    </div>
                </div>
            </div>
            </li>
        );
    }
}

export default PostCard;
