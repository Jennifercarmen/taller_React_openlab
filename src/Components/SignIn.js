import React, { Component } from 'react';

class SignIn extends Component {
  emailRef = React.createRef();
  passRef = React.createRef();

  user ={}
  asingUser = (props) => {
    const emailValue=this.emailRef.current.value;
    const passValue =this.passRef.current.value
    this.user = {
      email:emailValue,
      password:passValue
    }
    props.setNameandPassword(this.user);
  }
  render() {
    return (
      <div>
         <span>Correo Electronico</span>
    <input type="email" ref={this.emailRef}/>
    <br/>
    <span>Contraseña</span>
    <input type="password" ref={this.passRef}/>
    <br/>
    <button onClick={()=> {
      this.asingUser(this.props)
    }}>Cambiar name</button>
      </div>
    );
  }
}

export default SignIn;