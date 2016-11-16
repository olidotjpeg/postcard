import React, { 
    Component,
    PropTypes
} from 'react';
// CSS
import card from './card.css';

class Card extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    handleClick(id) {
        console.log(id);
    }

    render() {
        return (
            <div className={card.card}>
                <div className={card.cardImage}>
                    <figure className="image is-4by3">
                        <img src={this.props.data.url} alt="" />
                    </figure>
                </div>
                <div className={card.cardContent}>
                    <p>{this.props.data.title}</p>
                    <p>@{this.props.data.author}</p>
                </div>
            </div>
        );
    }
}

export default Card;
