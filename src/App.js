import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from 'components/Home';

import './App.css';
import './fonts.css';

class App extends Component {
  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/Home">Home</Link>
            </div>
          </Route>

          <Route exact path="/Home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
