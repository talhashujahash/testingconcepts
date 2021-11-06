import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#4939B5",
          minHeight: "50px",
          paddingTop: "15px",
          display: "grid",
          gridTemplateColumns: "6fr 3fr ",
          color: "#ffffff",
        }}
      >
        <div>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "300px",
              justifyContent: "space-around",
            }}
          >
            <li>Dashboard </li>
            <Link to="/setting" style={{ color: "white" }}>
              <li>Setting</li>
            </Link>
            <Link to="/Contactus" style={{ color: "white" }}>
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              maxWidth: "300px",
              flexWrap: "wrap",
              marginRight: "7px",
              justifyContent: "space-around",
            }}
          >
            <Link to="/second">
              <li style={{ color: "white" }}>Terms&nbsp;and&nbsp;Conditions</li>
            </Link>
            <li>Privacy&nbsp;Policy</li>
          </ul>
        </div>
      </div>
    );
  }
}
