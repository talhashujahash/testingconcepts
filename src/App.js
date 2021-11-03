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
const shop = value.shop




class App extends Component {
  constructor(props) {
    super();
    this.state = {
      token1: ''
    }
  }
  token1 = () => {
    return 'gg';

  }
  componentWillMount() {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/get_token`, {
        domain: "alche-app-development.myshopify.com",
      })
      .then((res) => {
        console.log(res.data.token)
        this.setState({ token1: 'res.data.token' })
      });
  }

  render() {
    return (
      <div className="App">

        <Router>
          <Switch>
            <Route exact path="/">
              <Head />
              <First token={token} shop={value.shop} />
            </Route>
            <Route path="/second">
              <Head />
              <Navbar />
              <Second token={token} shop={value.shop} on={false} />
            </Route>
            <Route path="/setting">
              <Head />
              <Navbar />
              <Third token={this.state.token1} shop={value.shop} />
            </Route>
            <Route path="/contactus">
              <Head />
              <Navbar />
              <Contactus token={this.state.token1} shop={value.shop} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
