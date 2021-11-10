import axios from "axios";
import React, { Component } from "react";
import { Button, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import "./Contactus.css";
export default class index extends Component {
  constructor(props) {
    super();
    this.state = {
      showModalPopup: false,
      shop: props.shop,
      token: '',
      email: "",
      name: "",
      description: "",
      phone: "",
      preference: "",
      query_type: "Information",
    };
  }
  isShowPopup = (status) => {
    this.setState({ showModalPopup: status });
  };
  // checking for empty field and sending requets for Email
  next = () => {
    // checking for empty field 
    if (
      this.state.email !== "" &&
      this.state.preference !== "" &&
      this.state.query_type !== "" &&
      this.state.name !== "" &&
      this.state.description !== "" &&
      this.state.phone !== ""
    ) {

      //      sending requets for Email
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/get_token`, {
          domain: this.state.shop,
        })
        .then((res) => {

          this.setState({ token: res.data.token })

          axios
            .post(
              `${process.env.REACT_APP_BACKEND_URL}/contact_details`,
              { ...this.state, shop: this.state.shop },
              {
                headers: {
                  Authorization: "Token " + this.state.token,
                },
              }
            )
            .then(function (response) {

            });
        });
    }
  };
  // preference for response  Call or Email
  onChangeRadio = (e) => {
    this.setState({ preference: e.target.value });
  };
  render() {
    return (
      <div className="Contactmaindiv">
        <div className="ContactFormContainier">
          <h4>Contact Us</h4>
          <h5>Basic Details</h5>
          <hr style={{ color: "#F2F2F2" }} />
          <div className="contactForm">
            <input
              className="Contactinput"
              placeholder="Name"
              name="name"
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            ></input>
            <input
              className="Contactinput"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            ></input>
            <input
              className="Contactinput"
              placeholder="Phone"
              name="phone"
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            ></input>
            <select
              className="Contactinput"
              name="query_type"
              onChange={(e) => {
                this.setState({ Query_type: e.target.value });
              }}
            >
              <option value="Information">Info</option>
              <option value="Support">Support</option>
            </select>
            <textarea
              className="ContactTextarea"
              rows="4"
              name="description"
              placeholder="Meassge"
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h5>Select your preference </h5>
            <div style={{ display: "flex" }}>
              <h5>
                {" "}
                <input
                  type="radio"
                  name="preference"
                  value="Phone call"
                  onChange={this.onChangeRadio}
                />
                Phone&nbsp;Call
              </h5>
              <h5>
                <input
                  type="radio"
                  name="preference"
                  value="Email_back"
                  onChange={this.onChangeRadio}
                />
                Email&nbsp;back
              </h5>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30%",
              }}
            >
              <button className="contactFormbtn" onClick={() => this.next()}>
                Save
              </button>
              <Link
                to="#"
                onClick={() => {
                  this.isShowPopup(true);
                }}
              >
                Emergency contact
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="contactimg" alt="" src="image 6.png"></img>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.showModalPopup}
          onClose={this.isShowPopup}
        >
          <div className="ContactModalmain">
            <h3>Email: Help@****.com</h3>
            <h3>Cell: 000000000000</h3>
            <Button onClick={() => this.isShowPopup(false)}>oK</Button>
          </div>
        </Modal>
      </div>
    );
  }
}
