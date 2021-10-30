import React, { Component } from "react";
import "./Addsetting.css";
export default class index extends Component {
  render() {
    return (
      <div className="Addsetting">
        <div className="Addsettinghead">
          <div className="d-flex">
            <svg
              style={{ minWidth: "14px" }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8334 10H4.16669"
                stroke="#828282"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 15.8333L4.16669 9.99999L10 4.16666"
                stroke="#828282"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="Addsettinghead2">
              <div>Ad Settings</div>
              <div className="color555">
                Helping text explaing why we are getting this info will be
                displayed here and question mark at the end will take us to the
                FAQ sectionHelping text explaing why we are getting this info
                will be displayed here and question mark at the end will take us
                to the FAQ sectionHelping text explaing why we are getting this
                info will be displayed here and question mark at the end will
                take us to the FAQ section
              </div>
            </div>
          </div>
          <div>
            <button className="Addsettingbutton1">Cancel</button>
            <button className="Addsettingbutton2">Save</button>
          </div>
        </div>
        <div className="d-flex checkbox">
          <div className="borderstyle">
            <input type="checkbox" /> <label>Product</label>
            <div>
              <div className="d-flex ">
                Preview{" "}
                <div className="queryicon justify-content">
                  <img className="queryico_p3" alt="" src={"vetor.png"}></img>
                  <img className="queryico_p1" alt="" src={"vector.png"}></img>
                  <img
                    className="queryico_p2"
                    alt=""
                    src={"Vector(1).png"}
                  ></img>
                </div>
              </div>
              <img className="imgAdsetting" src="Product.png" alt="" />
            </div>
          </div>
          <div>
            <div>
              <input type="checkbox" /> <label>Shopping Cart</label>
              <div className="d-flex ">
                Preview{" "}
                <div className="queryicon justify-content">
                  <img className="queryico_p3" alt="" src={"vetor.png"}></img>
                  <img className="queryico_p1" alt="" src={"vector.png"}></img>
                  <img
                    className="queryico_p2"
                    alt=""
                    src={"Vector(1).png"}
                  ></img>
                </div>
              </div>
              <img className="imgAdsetting" src="shoppingcart.png" alt="" />
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <label>Checkout</label>
            <div>
              <div className="d-flex">
                Preview{" "}
                <div className="queryicon justify-content">
                  <img className="queryico_p3" alt="" src={"vetor.png"}></img>
                  <img className="queryico_p1" alt="" src={"vector.png"}></img>
                  <img
                    className="queryico_p2"
                    alt=""
                    src={"Vector(1).png"}
                  ></img>
                </div>
              </div>
              <img className="imgAdsetting" src="checkout.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
