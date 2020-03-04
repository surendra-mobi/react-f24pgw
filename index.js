import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Create } from './component/create';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
          <Route path="/about">

                <div>
                  <Hello name={this.state.name} />
                  <p>
                    Start editing to see some magic happen :)
                  </p>
                </div>
        </Route>
        <Route path="/create">

                <div>
                  <Hello name={this.state.name} />
                  <p>
                    Start editing1 to sasdfdsafsadfee some magic happen :)
                  </p>
                  <Create/>
                </div>
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
