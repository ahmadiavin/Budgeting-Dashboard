import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {updateEmail, updateUsername} from "../../Redux/auth/authReducer";
import "./_register.scss";
import { FaLock } from "react-icons/fa";
import Background from '../Loading/Background'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      verifyPassword: "",
      email: "",
      badLogin: false,
      usernameTaken: false,
      redirect: false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    if (this.state.password !== this.state.verifyPassword) {
      this.setState({ badLogin: true });
    } else {
      let body = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      Axios.post("/auth/register", body)
        .then(res => {
          console.log(body.username,body.email, "40");
          this.props.updateEmail(res.data.email);
          this.props.updateUsername(res.data.username)
          this.setState({redirect:true})
        })
        .catch(err => {
          if (err.req.status === 406 && err.res.data.err === "Username Taken") {
            this.setState({ usernameTaken: true });
           
          }
        });
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/overview" />;
    }
    return (
      <Background>
      <div className="register-cont">
        <section>
          <div className="register-header">
            <h2>Create an account</h2>
            <h4>Your account, to access your own personal budgeting dashboard.</h4>
          </div>
         
            <input
              placeholder="Username"
              onChange={this.handleChange}
              name="username"
            /><br/>
            <input
              placeholder="Email"
              onChange={this.handleChange}
              name="email"
              type='email'
            /><br/>
            <input
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
              type='password'
            /><br/>
            <input
              placeholder="Verify Password"
              onChange={this.handleChange}
              name="verifyPassword"
              type='password'
            /><br/>
         
          <button className='registerBtn' onClick={this.handleClick}>
            <FaLock /> Register
          </button>
          <br></br>
          Already have an account? <a href='#/'>Login</a>
        </section>
        
        <br />
        
      
        
      </div>
      <div className='bad-login'>
        {this.state.badLogin === true ? (
          <h3>
            Your passwords did not match. Please enter two matching passwords
          </h3>
        ) : null}
        {this.state.usernameTaken === true ? (
          <h3>Username taken. Please choose another. </h3>
        ) : null}
        </div>
      <br/>
      </Background>
    );
  }
}

export default connect(undefined, {updateEmail, updateUsername}) (Register);
