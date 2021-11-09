import axios from "axios";
import React, { Component } from "react";
import "./Addsetting.css";
//  import {email,pwd} from '../../Common/Utils'
// import {token } from '../../Common/Utils'
import { Space, Spin } from "antd";
import {shop} from '../../App'
import { Link } from "react-router-dom";
// import { Shop } from "@mui/icons-material";
export default class index extends Component {

  constructor(props) {
    super();
    this.state = {
    token:props.token,
    domain: props.domain,
    is_product_page:false,
    is_checkout:false,
    is_cart:false,
    is_shopify_plus:false,
    loading:true,
    status:'',
    is_assets:''


    }}
    componentDidMount(){
      if(this.state.status==='approved' && this.state.is_assets_installed===false){
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/assets_api`,{
          shop:shop
        })
      }
    }
    componentWillMount() {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/shop_details?shop=${shop}`,
          { headers: { Authorization: process.env.to } }
        )
        .then((res) => {
         console.log(res.data.shop_details[0]);
          this.setState({ is_shopify_plus: res.data.is_shopify_plus })
          this.setState({ is_checkout: res.data.shop_details[0].is_checkout })
          this.setState({ is_cart: res.data.shop_details[0].is_cart })
          this.setState({ is_product_page: res.data.shop_details[0].is_product_page })
          this.setState({ status: res.data.shop_details[0].status })
          this.setState({is_assets: res.data.shop_details[0].is_assets_installed})
          this.setState({ loading: false })
        })
    }
    save = () => {
      console.log(this.state);
      axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/shop_details`,
        { ...this.state,shop:this.state.domain || 'alche-app-development.myshopify.com', },
        {
          headers: {
             Authorization:  process.env.SYNERGIST_TOKEN,
          },
        }
      )
      .then(function (response) {
        console.log(response);
              axios.post(`${process.env.REACT_APP_BACKEND_URL2}/users/login`,{
         email:process.env.SYNERGIST_EMAIL,password:process.env.SYNERGIST_PWD
      }).then((res)=>{
        console.log(res);
          axios
            .put(
              `${process.env.REACT_APP_BACKEND_URL2}/stores/store_setting_for_app?domain=${this.state.domain}`,
              { ...this.state },
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
         })
    };
  render() {
    console.log(this.props.token)
  
    return (
      <div>
      {(this.state.loading)  ? <Space size="middle"><Spin size="large" /></Space> :
      <div>
      {(this.state.status)!=='pending' && (this.state.status)==='approved' ? 
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
              Please select which page types to show the discount offer. If you have any questions please <Link to='/contactus'> contact us </Link>. 
              </div>
            </div>
          </div>
          <div>
            {/* <button className="Addsettingbutton1">Cancel</button> */}
            <button className="Addsettingbutton2" onClick={this.save}>Save</button>
          </div>
        </div>
        <div className="d-flex checkbox">
          <div className="borderstyle custompadding">
            <input type="checkbox" checked={this.state.is_product_page} onChange={() => {
                            this.setState({
                              is_product_page: !this.state.is_product_page,
                            });
                          }} /> <label>Product</label>
            <div>
              <div className="d-flex ">
                Preview{" "}
                <div className=" justify-content">
                <img  alt="" src={'Queryimg.png'}></img>
                </div>
              </div>
              <img className="imgAdsetting" src="Product.png" alt="" />
            </div>
          </div>
          <div className='custompadding'>
            <div >
              <input type="checkbox" checked={this.state.is_cart} onChange={() => {
                            this.setState({
                              is_cart: !this.state.is_cart,
                            });
                          }}/> <label>Shopping Cart</label>
              <div className="d-flex ">
                Preview{" "}
                <div className=" justify-content">
                  
                  <img  alt="" src={'Queryimg.png'}></img>
                  

                </div>
              </div>
              <img className="imgAdsetting" src="CartPage.png" alt="" />
            </div>
          </div>
          {this.state.is_shopify_plus && <div className='custompadding'>
            <input type="checkbox"  checked={this.state.is_checkout} onChange={() => {
                            this.setState({
                              is_checkout: !this.state.is_checkout,
                            });
                          }} />
            <label>Checkout</label>
            <div>
              <div className="d-flex">
                Preview{" "}
                <div className=" justify-content">
                <img  alt="" src={'Queryimg.png'}></img>
                </div>
              </div>
              <img className="imgAdsetting" src="checkout.jpg" alt="" />
            </div>
          </div>}
        </div>
        </div>:<div style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',maxWidth:'409px',maxHeight:'200px',fontSize:'30px',fontWeight:'600px',color:'blueviolet',margin:'auto',marginTop:'10%'}}>{(this.state.status)==='pending' &&  (this.state.status)!=='disapproved'? <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}><center>Wating for Admin Approval</center><center><Space size="large"><Spin size="large" /></Space></center></div>:<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}><center>Admin Disapproved Your Request</center><center><Space size="large"><Spin size="large" /></Space></center></div>}</div>}
      </div>}
       
      </div>
    );
  }
}
