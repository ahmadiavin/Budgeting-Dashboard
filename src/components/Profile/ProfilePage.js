import React, { Component } from "react";
import Background from "../Loading/Background";
import "./_profile.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getProfile, editProfile } from "../../Redux/profileReducer";
import Loading from "../Loading/Loading";

// import axios from "axios";
class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      age: "",
      image_url: "",
      imageArr: []
    };

    this.uploadWidget = this.uploadWidget.bind(this);
  }

  componentDidMount() {
    this.props.getProfile();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "aliavin",
        upload_preset: "imageProfiles",
        sources: ["local", "url", "facebook", "instagram"]
      },
      (error, result) => {
        // console.log(result)
        this.setState({ image_url: result[0].secure_url });
      }
    );
  };

  render() {
    // console.log(this.state)

    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }

    const { profile } = this.props.profile;
    // const {username} = this.props.auth

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
            <form>
              <fieldset>
                <ul>
                  <li className="first-input">
                    <label> First Name: {profile.first_name}</label>
                    <input
                      onChange={this.handleChange}
                      name="first_name"
                      type="text"
                    />
                  </li>
                  <li className="first-input">
                    <label> Last Name: {profile.last_name}</label>

                    <input
                      name="last_name"
                      onChange={this.handleChange}
                      type="text"
                    />
                  </li>

                  <li>
                    <label className="age"> Age: {profile.age}</label>
                    <input
                      name="age"
                      onChange={this.handleChange}
                      type="number"
                    />
                  </li>
                  <label className="picture">Add a profile picture <img src={this.state.image_url}  /></label>
                  
                  <button onClick={this.uploadWidget}>Add</button>
                  
                </ul>
                <div className="submit">
                  <button
                    className="user-submit"
                    onClick={e =>
                      this.props.editProfile(
                        e,
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
  };
}
export default connect(
  mapStateToProps,
  { getProfile, editProfile }
)(ProfilePage);
