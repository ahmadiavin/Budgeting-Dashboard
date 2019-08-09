import React from "react";
import "./_nav.scss";
import axios from "axios";
import {clearExpenses} from '../../Redux/expenseReducer'
import {logoutUser} from '../../Redux/auth/authReducer'
import {connect} from 'react-redux'
class Nav extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    axios
      .get("/auth/logout")
      .then(() => {
        
        this.props.logoutUser();
        this.props.clearExpenses();
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <nav className="nav-cont">
        <div className="nav-logo" />
        <section>
          <div className="link-container">
            <ul>
              <li>
                <a href="#Overview">Overview</a>
              </li>
              <li>
                <a href="#Budget">Budget</a>
              </li>

              <li>
                <a href="#Profile">Profile</a>
              </li>
              <li>
                <a href="#/" onClick={this.logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    );
  }
}

export default connect(undefined, {logoutUser,clearExpenses})(Nav);
