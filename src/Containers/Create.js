import React, { Component } from 'react';
import { collection } from '../services/cards';

// Components
import Navigation from '../Components/navigation/navigation'
import Card from '../Components/card/Card';

class Create extends Component {

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

    createHandler(card, index) {
        console.log(card)
    }

    render() {
        return (
            <div>
                <Navigation title="Create" />
                <div className="section">
                    <div className="container">
                        <form>
                            <input type="text" placeholder="Text for PostCard" />
                            <input type="submit" value="Create" />
                            <ul>
                                {this.state.collection.map((card, index) => {
                                    return (
                                        <li key={index} onClick={() => this.createHandler(card, index)}>
                                            <Card data={card} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
