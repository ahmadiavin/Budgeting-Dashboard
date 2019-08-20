import React from "react";
import "./_nav.scss";
import axios from "axios";
import {clearExpenses} from '../../Redux/expenseReducer'
import {logoutUser} from '../../Redux/auth/authReducer'
import {connect} from 'react-redux'
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "hidden"
    };

    this.logout = this.logout.bind(this);
  }
toggleMenu = () => {
    if(this.state.menuStatus === 'hidden-open') {
      this.setState({menuStatus: 'hidden-close'});
    } else {
      this.setState({menuStatus: 'hidden-open'});
    }
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
        <div className="nav-logo"><p>Minty </p></div>
        
        <section>
          <div className="link-container">
            <ul>
              <li>
                <a href="#Overview">Expenditures</a>
              </li>
              <li>
                <a href="#Budget">Budget</a>
              </li>
              <li>
                <a href="#stock">Investments</a>
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

// micro modal for profile maybe later
/* <MicroModal
trigger={handleOpen => <a onClick={handleOpen}>Profile</a>}
children={handleClose => (
  <div className='modal' style={styles}>
    <button onClick={handleClose} />
  </div>
)}
/> */