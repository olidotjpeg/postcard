import React, { Component } from 'react';
import { collection } from '../services/cards';
import './App.css';

// Components
import Navigation from '../Components/navigation/navigation'
import Card from '../Components/card/Card';

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
                <Navigation />
                <div className="section">
                    <div className="container">
                        {this.state.collection.map((card, index) => {
                            return (
                                <Card data={card} key={index} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
