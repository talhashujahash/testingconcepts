import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from "./components/ShopDetail";
import Second from "./components/Terms&Cond";
import Third from "./components/Addsetting";
import Head from "./components/header";
import Navbar from "./components/navbar";
import Contactus from "./components/Contact us";
import queryString from 'query-string'
import axios from "axios";
// import { token } from './Common/Utils'
import { Component } from "react";
import 'antd/dist/antd.css';


const value = queryString.parse(window.location.href);
export const shop = value.shop
// export const shop = "alche-app-development.myshopify.com"
// alert(shop)




class App extends Component {
  constructor(props) {
    super();
    this.state = {
      status: ''
    }
  }

  // componentWillMount() {
  //   axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/get_token`, {
  //       domain: shop,
  //     })
  //     .then((res) => {
  //       console.log(res.data.token)
  //       this.setState({ token1: 'res.data.token' })
  //     });
  // }
  componentWillMount() {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/shop_details?shop=${shop}`,
        { headers: { Authorization: process.env.REACT_APP_TOKEN } }
      )
      .then((res) => {
        console.log(res.data.shop_details[0]);
        if (res.data.shop_details[0]?.status !== undefined) {
          this.setState({ status: res.data.shop_details[0]?.status })
        }
      })
  }
  render() {
    return (
      <div className="App">

        <Router>
          <Head />
          <Switch>
            <Route exact path="/">
              <First status={this.state.status} shop={shop} />
            </Route>
            <Route path="/termscond">
              <Navbar status={this.state.status} />
              <Second shop={shop} on={false} />
            </Route>
            <Route path="/setting">
              <Navbar status={this.state.status} />
              <Third shop={shop} />
            </Route>
            <Route path="/contactus">

              <Navbar status={this.state.status} />
              <Contactus shop={shop} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
