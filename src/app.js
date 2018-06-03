import React from 'react'
import { render } from 'react-dom'
import { SignIn } from './Components/SignIn'

class App extends React.Component{
    state = {
        name: 'Joseph'
    }
    changeName = () => {
        this.setState({
            name:'OpenLab'
        })
    }
    render() {
        return(
            <SignIn name={this.state.name} changeName={this.changeName}/>
        )
    }
}

const mountDiv = document.querySelector('#app')
render(
    <App/>, mountDiv
)