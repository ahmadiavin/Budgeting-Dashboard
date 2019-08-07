import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {updateEmail, updateUsername} from "../../Redux/auth/authReducer";
import "./_register.scss";
import { FaLock } from "react-icons/fa";

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
        email: this.state.username,
        password: this.state.password
      };
      Axios.post("/auth/register", body)
        .then(res => {
          console.log(res);
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
      <div className="register-cont">
        <section>
          <div className="register-header">
            <h2>Create an account</h2>
            <h4>Your account, to acces this site.</h4>
          </div>
         
            <input
              placeholder="Username"
              onChange={this.handleChange}
              name="username"
            />
            <input
              placeholder="Email"
              onChange={this.handleChange}
              name="email"
              type='email'
            />
            <input
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
              type='password'
            />
            <input
              placeholder="Verify Password"
              onChange={this.handleChange}
              name="verifyPassword"
              type='password'
            />
         
          <button onClick={this.handleClick}>
            <FaLock /> Register
          </button>
        </section>
        <br />
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
      </div>
    );
  }
}

export default connect(undefined, {updateEmail, updateUsername}) (Register);
