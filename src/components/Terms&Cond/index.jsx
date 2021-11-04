import React, { Component } from "react";
import axios from "axios";
import "./Terms&Cond.css";
import { Button, Modal } from "@mui/material";
import {token } from '../../Common/Utils'
import Third from '../Addsetting'

export default class index extends Component {
  constructor(props) {
    super();
    this.state = {
      on:props.on,
      token:props.token,
      body:props.body,
      shop:props.shop,
      showModalPopup: false,
      accept: false,
      on:false
    };
  }
  isShowPopup = (status) => {
    this.setState({ showModalPopup: status });
  };
  next = () => {
    console.log(this.state.token);
        axios
          .post(
            `${process.env.REACT_APP_BACKEND_URL}/shop_details`,
            { ...this.state.body,shop:this.state.shop },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then(function (response) {
            console.log(response);
          });
      
  };
  render() {
    return (
      <div className="Termsmaincontainer">
        {this.state.on && <img alt="" src={"image 1.png"}></img>}
        {this.state.on && <p className="color">step 2 OF 3</p>}
        <div className="Termsmaindiv">
          <p>AGREEMENT</p>
          <h1>Terms and Conditions</h1>
          <div className="Termsstyle">
            <p>
              We know it's tempting to skip these Terms of Service, but it's
              important to establish what you can expect from us as you use
              Vantage services, and what we expect from you.
            </p>
            <p>
              These Terms of Service reflect the way Vantage business works, the
              laws that apply to our company, and certain things we've always
              believed to be true. As a result, these Terms of Service help
              define Vantage's relationship with you as you interact with our
              services. For example, these terms include the following topic
              headings:
            </p>
            <div className="subpoints">
              • What you can expect from us, which describes how we provide and
              develop our services
              <br />• What we expect from you, which establishes certain rules
              for using our services <br />• Content in Vantage services, which
              describes the intellectual property rights to the content you find
              in our services - whether that content belongs to you, Vantage, or
              others.
            </div>

            <p>
              In case of problems or disagreements, which describes other legal
              rights you have, and what to expect in case someone violates these
              terms Understanding these terms is important because, to use our
              services, you must accept these terms.
            </p>
            {this.state.on && (
              <h5>
                <input
                  type="checkbox"
                  name="accept"
                  onChange={(e) => {
                    this.setState({ accept: !this.state.accept });
                  }}
                ></input>{" "}
                I agree to the above mentioned terms and conditions
              </h5>
            )}
          </div>
          {this.state.on && (
            <div>
              {console.log(Boolean(this.props.on))}
              <button className="button1">Not right now</button>
              <button
                className="button2"
                disabled={!this.state.accept}
                onClick={() => {
                  this.isShowPopup(true);
                  this.next();
                }}
              >
                I agree with terms
              </button>
            </div>
          )}
        </div>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.showModalPopup}
          onClose={this.isShowPopup}
        >
          <div className="TermModalmain">
            <img alt="" src={"congrat.png"}></img>
            <h3>YOUR REQUEST IS SENT FOR APPROVAL</h3>
            <p>Wait until our CSR reaches you out to provide assistance</p>
            <Button onClick={() => {this.isShowPopup(false)
                this.setState({on:true})  
          }
            }
            >DONE</Button>
           
          </div>
        </Modal>
        {this.state.on && <Third/>}
      </div>
    );
  }
}
