import React from "react";
import { Redirect } from "react-router-dom";
import "./_login.scss";
import { FaLock } from "react-icons/fa";
import Axios from "axios";
import { connect } from "react-redux";
import { updateEmail, updateUsername } from "../../Redux/auth/authReducer";
import Background from '../Loading/Background'



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }
  componentDidMount() {
    Axios.get("/auth/user").then(res => {
      if (!res.data.error) {
        this.props.updateUsername(res.data.username);
        this.props.updateEmail(res.data.email);
        this.setState({ redirect: true });
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    Axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      this.props.updateUsername(res.data.username);
      this.props.updateEmail(res.data.email);
      this.setState({ redirect: true });
    });
  };

  // validate(username, email, password) {
  // return {
  //   email: email.length === 0,
  //   username: username.length === 0,
  //   password: password.length === 0
  // }
  //   }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/overview" />;
    }
    return (
      <Background>
      <div className="login-cont">
        <section>
          <h2>Sign In</h2>
          <h4>Welcome back </h4>
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
          />{" "}
          <br />
          <input
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            type="password"
          />
          <br />
          <button onClick={this.handleClick}>
            <FaLock /> Login
          </button>
          <br />
          <p>
            New user? <a href="#register">Register</a> here.
          </p>
        </section>
      </div>
     
      
      </Background>
    );
  }
}

export default connect(
  undefined,
  { updateEmail, updateUsername }
)(Login);
