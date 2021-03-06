import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import News from './News';
import Home from './Home';
class App extends Component {
  state = {
    test:'about props 123123123',
  }
  render() {
    const {test} = this.state;
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About data={test}/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
