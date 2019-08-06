import React from "react";
import "./_nav.scss";

function Nav(props) {
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
              <a href="#Settings">Settings</a>
            </li>
            <li>
              <a href="#Profile">Profile</a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
