import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/navbar/navbar"
import Search from "./pages/search"
import Saved from "./pages/saved"
import Header from "./components/header/header"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
