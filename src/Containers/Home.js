import React, { Component } from 'react';
import { collection } from '../services/cards';
import { Link } from 'react-router';
import app from '../css/app.css';

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
                <Navigation title="Home" />
                <div className={app.section}>
                    <div className={app.container}>
                        {this.state.collection.map((card, index) => {
                            return (
                                <Link key={index} to={{ pathname: '/create/{card.id}'}}>
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

export default Home;
