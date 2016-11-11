import React, { Component } from 'react';
import { collection } from '../services/cards';

// components
import PostCardBuilder from '../Components/postcard/PostCardBuilder';

class Build extends Component {

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
            	{this.state.collection.map((card, index) => {
                    return (
                    	<PostCardBuilder data={card} key={index} />
                    );
                })}
            </div>
        );
    }
}

export default Build;
