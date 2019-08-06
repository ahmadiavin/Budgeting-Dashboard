import React from "react";
// import axios from 'axios'
import {Redirect} from 'react-router-dom';
import './_login.scss'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })

  }
  handleClick = e => {
      this.setState({
          redirect: true
      })
  }



  render() {
      if (this.state.redirect === true) {
          return <Redirect to='/overview'/>
      }
    return (
      <div className='login-cont'>
          <input
          placeholder='Username'
         onChange={this.handleChange}
          type='text'></input>
          <input
          placeholder='Password'
         onChange={this.handleChange}></input>
        
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default Login;
