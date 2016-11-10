import React, { 
    Component,
    PropTypes
} from 'react';

class Card extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <div className="card is-fullwidth">
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
        );
    }
}

export default Card;
