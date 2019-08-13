import React, { Component } from "react";
// import Loading from "../Loading/Loading";
import Background from "../Loading/Background";


class Profile extends Component {
  render() {
    return (
      <Background>
      {/* {this.props.expense.loading ? <Loading /> : null} */}
      <section>
          <div className="register-header">
            <h2>Create an account</h2>
            
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
         
          <button onClick={this.handleClick}>
           Register
          </button>
          <br></br>
          Already have an account? <a href='#/'>Login</a>
        </section>
      </Background>
    );
  }
}

export default Profile;
