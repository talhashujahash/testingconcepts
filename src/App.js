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
import { token } from './Common/Utils'
import { Component } from "react";
import 'antd/dist/antd.css';


const value = queryString.parse(window.location.href);
export const shop = value.shop
// export const shop = "alche-app-development.myshopify.com"
// alert(shop)




class App extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   token1: ''
    // }
  }
  // token1 = () => {
  //   return 'gg';

  // }
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

  render() {
    return (
      <div className="App">

        <Router>
          <Head />
          <Switch>
            <Route exact path="/">
              <First token={token} shop={shop} />
            </Route>
            <Route path="/termscond">
              <Navbar />
              <Second token={token} shop={shop} on={false} />
            </Route>
            <Route path="/setting">

              <Navbar />
              <Third shop={shop} />
            </Route>
            <Route path="/contactus">

              <Navbar />
              <Contactus shop={shop} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
