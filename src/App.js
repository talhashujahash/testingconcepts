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

const value = queryString.parse(window.location.href);
const shop = value.shop
const token = "Bearer e8ca54832038db60ede62e44827fc054eabfc2de"

// const gettoken = () => {
//   axios
//     .post(`${process.env.REACT_APP_BACKEND_URL}/get_token`, {
//       domain: "alche-app-development.myshopify.com",
//     })
//     .then((res) => {
//       console.log(res.data.token)
//       token = res.data.token;
//     });
// }

function App() {
  // gettoken()
  console.log(shop)
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
            <Third token={token} shop={value.shop} />
          </Route>
          <Route path="/contactus">
            <Head />
            <Navbar />
            <Contactus token={token} shop={value.shop} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
