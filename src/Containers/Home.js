import React, { Component } from 'react';
import { collection } from '../services/cards';
import { Link } from 'react-router';
import { connect } from "react-redux";

// Components
import Navigation from '../Components/navigation/navigation'
import Card from '../Components/card/Card';

// Css
import App from '../css/app.css';

const mapState = state => ({
    data: state.test.data
});

class Home extends Component {

    constructor() {
        super();

        this.state = {
            collection: []
        }
    }

    componentDidMount() {
        const me = this;
        return collection().then(function(response) {
            me.setState({
                collection: response.collection
            })
        })
    }

    render() {
        return (
            <div>
                <Navigation title="Home" />
                <div className={App.section}>
                    <div className={App.container}>
                        {(() => {
                            // @NOTE We don't want to mount if there is no images in the feed
                            if (this.state.collection.length !== 0) {
                                return (
                                    this.state.collection.map((card, index) => {
                                        return (
                                            <Link key={index} to={{ pathname: `/create/${card.id}`}}>
                                                <Card data={card} />
                                            </Link>
                                        );
                                    })
                                )
                            } else {
                                return (
                                    <h2 className={App.noImage}>Lol no images</h2>
                                );
                            }
                        })()}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Home);
