import React, { Component } from 'react';
import { render } from 'react-dom';
import { SignIn } from './components/SignIn';

class App extends Component {
    state = {
        name: 'Jessica',
        email: '',
        password: ''
    }

    changeName = () => {
        this.setState({
            name: 'Mabeth'
        })
    }
    setNameAndPassword = (user) => {
        this.setState({
            email: user.email,
            password: user.password
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.email}</h3>
                <h3>{this.state.password}</h3>
                <SignIn 
                name={this.name}
                changeName={this.changeName}
                setNameAndPassword={this.setNameAndPassword}
                />
            </div>
        );
    }
}
const mount = document.getElementById('app')
render(< App />, mount)