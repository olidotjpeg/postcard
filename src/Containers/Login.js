import React, { Component } from 'react';

class Login extends Component {

    render() {

        return (
            <div className="login">
            	<img className="login-logo" src="http://placehold.it/350x350" alt=""/>
            	<form className="login-form">
            		<input type="text" placeholder="Username" />
            		<input type="password" placeholder="Password" />
            		<input className="login-button" type="Submit" defaultValue="Login" />
            	</form>
            </div>
        );
    }
}

export default Login;
