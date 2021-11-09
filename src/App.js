import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Setting from "./components/ShopDetail";
import Terms from "./components/Terms&Cond";
import Adsetting from "./components/Addsetting";
import Head from "./components/header";
import Navbar from "./components/navbar";
import Contactus from "./components/Contact us";
import queryString from 'query-string'
import axios from "axios";
import { Component } from "react";
import 'antd/dist/antd.css';



// getting shop url 
const value = queryString.parse(window.location.href);
export const shop = value.shop





class App extends Component {
  constructor(props) {
    super();
    this.state = {
      status: ''
    }
  }

  //getting status for the shop ("Approved or disapproved ") from shopify backend
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
              <Setting status={this.state.status} shop={shop} />
            </Route>
            <Route path="/termscond">
              <Navbar status={this.state.status} />
              <Term shop={shop} on={false} />
            </Route>
            <Route path="/setting">
              <Navbar status={this.state.status} />
              <Adsetting shop={shop} />
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
