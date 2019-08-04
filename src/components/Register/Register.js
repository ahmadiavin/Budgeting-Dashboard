import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      verifypassword: "",
      email: ""
    };
  }

  render() {
    return (
      <h1>Register</h1>
    );
  }
}

export default Register;
