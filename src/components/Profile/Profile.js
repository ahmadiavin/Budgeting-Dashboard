import React, { Component } from "react";
import Loading from "../Loading/Loading";
import Background from "../Loading/Background";


class Profile extends Component {
  render() {
    return (
      <Background>
      <div>
          <Loading/>
          
      </div>
      </Background>
    );
  }
}

export default Profile;
