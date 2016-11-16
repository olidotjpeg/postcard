import React, { Component } from 'react';
// components
import Navigation from '../Components/navigation/navigation';

class User extends Component {

    render() {

        return (
            <div>
                <Navigation title="Pleb" />
                <div>
                    <div className="user-block">
                        <img className="user-avatar" src="https://pbs.twimg.com/profile_images/785351949172572160/0z-NRaFo.jpg" alt="Username here" />
                        <div className="user-button-group">
                            <button className="button">Edit</button>
                            <button className="button">Options</button>
                        </div>
                    </div>
                    <div className="photograph-block">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <p>You aren’t a photohrapher yet</p>
                        <p>Click on options to become one</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
