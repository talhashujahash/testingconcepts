import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TermsandCons from "../Terms&Cond";

import "./ShopDetail.css";
let data = "";
axios
  .post("https://825a-119-73-120-105.ngrok.io/get_token", {
    domain: "sikander-learning.myshopify.com",
  })
  .then((res) => {
    console.log(res);
    axios
      .get(
        "https://825a-119-73-120-105.ngrok.io/shop_details?shop=sikander-learning.myshopify.com",
        { headers: { Authorization: "Token " + res.data.token } }
      )
      .then((res) => {
        console.log(res.data);
        data = res.data.shop_details;
      });
  });
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      shop: "sikander-learning.myshopify.com",
      shop_name: "",
      shop_email: "",
      shop_number: "",
      shop_url: "",
      alcoholic_check: false,
      drugs_check: false,
      step: false,
    };
  }

  next = (body) => {
    if (
      this.state.shop_email === "" &&
      this.state.shop_name === "" &&
      this.state.shop_number === "" &&
      this.state.shop_url === ""
    ) {
    } else {
      console.log(body);
      this.setState({ step: true });
    }
  };
  render() {
    const { step } = this.state;
    return (
      <div>
        {data[0]?.shop_name === "" && (
          <div>
            {step && <TermsandCons body={this.state} on={true} />}
            {!step && (
              <div className="ShopD_style">
                <img alt="" src={"image 1.png"} />
                <div>step 1 OF 3</div>
                <div>
                  <h4 className="color_blue"> ADD SHOP DETAILS </h4>{" "}
                </div>
                <div>
                  <p>
                    {" "}
                    Helping text explaing why we are getting this info will be
                    displayed here and question mark at the end will take us to
                    the FAQ section <Link to="#"> Read more </Link>
                  </p>
                </div>

                <div className="formstyle">
                  <div className="fieldstyle">
                    <label className="color_blue"> Shop name </label>{" "}
                    <input
                      className="shopDetaildropdown"
                      name="shop_name"
                      placeholder="Shop Name"
                      required="true"
                      onChange={(e) => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    ></input>
                  </div>{" "}
                  <div className="fieldstyle">
                    <label className="color_blue"> Shop email </label>{" "}
                    <input
                      className="shopDetaildropdown"
                      placeholder="email"
                      name="shop_email"
                      type="email"
                      required="true"
                      onChange={(e) => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    ></input>
                  </div>{" "}
                  <div className="fieldstyle">
                    <label className="color_blue"> Phone number </label>{" "}
                    <input
                      className="shopDetaildropdown"
                      placeholder="number"
                      name="shop_number"
                      required="true"
                      type="number"
                      onChange={(e) => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    ></input>
                  </div>{" "}
                  <div className="fieldstyle">
                    <label className="color_blue"> Store URL</label>{" "}
                    <input
                      className="shopDetaildropdown"
                      placeholder="Url"
                      name="shop_url"
                      type="url"
                      required="true"
                      onChange={(e) => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    ></input>
                  </div>{" "}
                  <div className="fieldstyle">
                    <label className="color_blue">
                      {" "}
                      Do you sale any of these products
                    </label>{" "}
                    <div>
                      <input
                        id="c1"
                        name="alcoholic_check"
                        type="checkbox"
                        defaultChecked={this.state.alcoholic_check}
                        onChange={() => {
                          this.setState({
                            alcoholic_check: !this.state.alcoholic_check,
                          });
                        }}
                      />
                      <label for="c1">Alcoholic</label>

                      <input
                        id="c1"
                        name="drugs_check"
                        type="checkbox"
                        defaultChecked={this.state.drugs_check}
                        onChange={() => {
                          this.setState({
                            drugs_check: !this.state.drugs_check,
                          });
                        }}
                      />
                      <label>Drugs</label>
                    </div>
                  </div>{" "}
                </div>

                <div className="shopDetailsubmit">
                  <button onClick={() => this.next(this.state)}>Next</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
