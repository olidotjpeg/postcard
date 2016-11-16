import React, { Component } from 'react';
import { browserHistory } from "react-router";
import classNames from 'classnames';
// components
import Navigation from '../Components/navigation/navigation';
// css
import user from '../css/user.css';

class User extends Component {

    logout() {
        localStorage.removeItem('auth');
        browserHistory.push('/login');
    }

    render() {
        return (
            <div>
                <Navigation title="Pleb" />
                <div>
                    <div className={user.userBlock}>
                        <img className={user.userAvatar} src="https://pbs.twimg.com/profile_images/785351949172572160/0z-NRaFo.jpg" alt="Username here" />
                        <div className={user.userButtonGroup}>
                            <button className="button">Edit</button>
                            <button className="button">Options</button>
                            <button className="button" onClick={() => this.logout()}>Logout</button>
                        </div>
                    </div>
                    <div className={user.photographBlock}>
                        <i className={classNames(user.icon, 'fa fa-lock')} aria-hidden="true"></i>
                        <p>You aren’t a photohrapher yet</p>
                        <p>Click on options to become one</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
