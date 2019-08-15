import React, { Component } from "react";
// import Loading from "../Loading/Loading";
import Background from "../Loading/Background";
import "./_profile.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      image_url: "",

      age: ""
    };
  }

  render() {
    return (
      <Background>
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
                    <label>First Name</label>
                    <input type="text" />
                  </li>
                  <li className="first-input">
                    <label> Last Name</label>
                    <input type="text" />
                  </li>

                  <li>
                    <label className="age">Age</label>
                    <input type="number" />
                  </li>
                  <label className="picture">Add a profile picture</label>
                  <input type="file" onChange={this.handleFileChange} />
                </ul>
                <div className="submit">
                  <button className="user-submit" onClick={this.handleUpdate}>
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

export default Profile;
