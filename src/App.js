import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from "./components/ShopDetail";
import Second from "./components/Terms&Cond";
import Third from "./components/Addsetting";
import Head from "./components/header";
import Navbar from "./components/navbar";
import Contactus from "./components/Contact us";
function App() {
  return (
    <div className="App">
      <Router>
        
          <Route exact path="/">
            <Head />
            <First />
          </Route>
          <Route path="/second">
            <Head />
            <Navbar />
            <Second on={false} />
          </Route>
          <Route path="/third">
            <Head />
            <Navbar />
            <Third />
          </Route>
          <Route path="/Contactus">
            <Head />
            <Navbar />
            <Contactus />
          </Route>
        
      </Router>
    </div>
  );
}

export default App;
