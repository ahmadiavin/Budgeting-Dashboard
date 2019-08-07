import React from "react";
import { Redirect } from "react-router-dom";
import "./_login.scss";
import { FaLock } from "react-icons/fa";
import Axios from "axios";
import { connect } from "react-redux";
import { updateEmail, updateUsername } from "../../Redux/auth/authReducer";

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

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/overview" />;
    }
    return (
      <div className="login-cont">
        <section>
          <h2>Please Login</h2>
          <h4>You can log in using the input fields</h4>
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
          />
          <input
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            type="password"
          />

          <button onClick={this.handleClick}>
            <FaLock /> Login
          </button>
          
        </section>
      </div>
    );
  }
}

export default connect(
  undefined,
  { updateEmail, updateUsername }
)(Login);
