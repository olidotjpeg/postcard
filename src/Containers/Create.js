import React, { Component } from 'react';
import { collection } from '../services/cards';
// Components
import Navigation from '../Components/navigation/navigation';
import PostCardBuilder from '../Components/postcard/PostCardBuilder';

class Create extends Component {

    constructor() {
        super();

        this.state = {
            card: []
        }
    }

    componentDidMount() {
        const me = this;
        return collection().then(function(response) {
        	me.setState({
        		card: response.collection.filter(card => card.id === parseInt(me.props.routeParams.id, 10)).shift()
        	})
        })
    }

    render() {
    	
    	const {card} = this.state;

        return (
            <div>
                <Navigation title="Create" />
                <PostCardBuilder data={card} />
            </div>
        );
    }
}

export default Create;
