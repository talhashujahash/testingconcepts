import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TermsandCons from "../Terms&Cond";
import Third from "../Addsetting";
import "./ShopDetail.css";
import { shop } from '../../App'
import { email, pwd } from '../../Common/Utils'
import { token } from '../../Common/Utils'
import { Space, Spin } from "antd";
//const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default class index extends Component {
  constructor(props) {
    super();
    this.state = {
      shop_url: props.shop,
      shop_name: "",
      shop_email: "",
      shop_number: "",
      alcoholic_check: false,
      drugs_check: false,
      step: false,
      loading: true,
      data: [],
      is_shopify_plus: false,
      collections: []
    };
  }
  // ${this.state.shop}

  componentWillMount() {
    // alert(this.state.shop)
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/shop_details?shop=${shop}`,
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data.shop_details })
        this.setState({ is_shopify_plus: res.data.is_shopify_plus })
        this.setState({ collections: res.data.collections })
        this.setState({ loading: false })

      })

    axios.post(`${process.env.REACT_APP_BACKEND_URL2}/users/login`, {
      email: email, password: pwd
    }).then((res) => {
      console.log(res);


      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL2}/notifications/notification`,
          {
            headers: {
              Authorization: "Token " + res.data.token,
            },
          }
        )
        .then(function (response) {
          console.log(response);

        });
    })

  }

  next = (body) => {
    if (

      this.state.shop_email !== "" &&
      this.state.shop_name !== "" &&
      this.state.shop_number !== "" &&
      this.state.shop_url !== ""
    ) { this.setState({ step: true }) }
    else {
      console.log(body);
    }
  };
  render() {
    const { step, shop_name, shop_url, shop_number, shop_email, alcoholic_check, drugs_check, is_shopify_plus, collections } = this.state;
    let requestdata = { name: shop_name, domain: shop_url, phone: shop_number, collections: collections, email: shop_email, status: 'pending', is_drug: drugs_check, is_alcoholic: alcoholic_check, is_shopify_plus: is_shopify_plus }
    return (
      <div>
        {(this.state.loading) ? <Space size="middle"><Spin size="large" /></Space> :
          this.state.data[0]?.name == null || '' ? (
            <div>
              {step && <TermsandCons body={requestdata} on={true} token={token} />}
              {!step && (
                <div className="ShopD_style">
                  <img alt="" src={"image 1.png"} />
                  <div>step 1 OF 3</div>
                  <div>
                    <h4 className="color_blue"> ADD SHOP DETAILS </h4>{" "}
                  </div>
                  <div>

                    <p className='ShopD_style_p'>
                      {" "}
                      Thank you for selecting Synergist to improve your conversion rate. Please provide some information about you so we can set up your account and contact you if need be. We will also review your information shortly to ensure your site meets our bank partner requirements. We will not share your contact information with any third parties
                      {/* <Link to="#"> Read more </Link> */}
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
                        onBlur={this.validateEmailAddress}
                        onChange={(e) => {
                          console.log([e.target.name])
                          this.setState({ [e.target.name]: e.target.value });
                        }}
                      ></input>
                    </div>{" "}{this.state.firstNameError && (
                      <div className="errorMsg">{this.state.firstNameError}</div>
                    )}
                    <div className="fieldstyle">
                      <label className="color_blue"> Phone number </label>{" "}
                      <input
                        className="shopDetaildropdown"
                        placeholder="number"
                        name="shop_number"
                        required="true"
                        type="text"
                        onChange={(e) => {
                          this.setState({ [e.target.name]: e.target.value });
                        }}
                      ></input>
                    </div>{" "}
                    <div className="fieldstyle">
                      <label className="color_blue"> Store URL</label>{" "}
                      <input
                        className="shopDetaildropdown"
                        placeholder={shop_url}
                        name="shop_url"
                        type="url"
                        required="true"
                        readOnly='true'
                      // onChange={(e) => {
                      //   this.setState({ [e.target.name]: e.target.value });
                      // }}
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
                    <button onClick={() => {
                      this.next(this.state.shop_details)
                    }}>Next</button>
                  </div>
                </div>
              )}
            </div>
          ) : <Third token={token} shop={this.state.shop} />}

      </div>
    );
  }
}
