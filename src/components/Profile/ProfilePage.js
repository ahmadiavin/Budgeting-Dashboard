import React, { Component } from "react";
// import Loading from "../Loading/Loading";
import Background from "../Loading/Background";
import "./_profile.scss";
// import Axios from "axios";
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";
import {getProfile, editProfile} from '../../Redux/profileReducer'
import Loading from '../Loading/Loading'
class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      image_url: "",

      age: ""
    };
  }

  componentDidMount(){
    this.props.getProfile()
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  

  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }

    const {profile} = this.props.profile;
    // const {username} = this.props.auth
    console.log(profile)
    return (
     
      <Background>
          {this.props.profile.loading ? <Loading /> : null}
        <div className="container">
          <header className="profile-header">
            <h3>Profile Settings</h3>
          </header>
          <div className="modal-form">
            <h1> About Me</h1>
            <p>
              Tell us about yourself so we can improve the financial advice we
              provide
            </p>
            {/* <h2>About Me</h2> */}
            <form>
              <fieldset>
                <ul>
                  <li className="first-input">
                    <label>{profile.first_name}</label>
                    <input
                      onChange={this.handleChange}
                      name="first_name"
                      type="text"
                    />
                  </li>
                  <li className="first-input">
                  <label> Last Name: </label> <br/>
                    <label>  {profile.last_name}</label>
                    
                    <input
                      name="last_name"
                      onChange={this.handleChange}
                      type="text"
                    />
                  </li>

                  <li>
                    <label className="age">{profile.age}</label>
                    <input
                      name="age"
                      onChange={this.handleChange}
                      type="number"
                    />
                  </li>
                  <label className="picture">Add a profile picture</label>
                  <input type="file" onChange={this.handleFileChange} />
                </ul>
                <div className="submit">
                  <button
                    className="user-submit"
                    onClick={(e) =>
                      this.props.editProfile(e,
                        this.props.auth.username,
                        this.state.first_name,
                        this.state.last_name,
                        this.state.age
                      )
                    }
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
              <img className="preview-image" src={this.image_url} alt="#" />
            </form>
          </div>
        </div>
      </Background>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    profile: state.profile
  }
}
export default connect(mapStateToProps, {getProfile, editProfile}) (ProfilePage);
