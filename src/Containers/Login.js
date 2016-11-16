import React, { Component } from 'react';
import { browserHistory } from "react-router";
// css
import login from '../css/login.css';

class Login extends Component {

    submitForm() {
        localStorage.setItem('auth', 'vanilla');
        browserHistory.push('/');
    }

    render() {
        return (
            <div className={login.login}>
            	<img className={login.loginLogo} src="http://placehold.it/350x350" alt=""/>
            	<form className={login.loginForm} onSubmit={() => this.submitForm()}>
            		<input className={login.input} type="text" placeholder="Username" />
            		<input className={login.input} type="password" placeholder="Password" />
            		<input className={login.loginButton} type="Submit" defaultValue="Login" />
            	</form>
            </div>
        );
    }
}

export default Login;
