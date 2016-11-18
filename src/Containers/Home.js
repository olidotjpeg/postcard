import React, { Component } from 'react';
import { collection } from '../services/cards';
import { Link } from 'react-router';
import { connect } from "react-redux";

// Components
import Navigation from '../Components/navigation/navigation'
import Card from '../Components/card/Card';

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
                <div className="section">
                    <div className="container">
                        {this.state.collection.map((card, index) => {
                            return (
                                <Link key={index} to={{ pathname: `/create/${card.id}`}}>
                                    <Card data={card} />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Home);
