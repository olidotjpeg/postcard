import React, { Component } from 'react';
import { collection } from '../services/cards';
import './App.css';

// Components
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
            <div className="section">
                <nav></nav>
                <div className="container">
                    {this.state.collection.map((card, index) => {
                        return (
                            <Card data={card} key={index} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;
