import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Gallery from './pages/Gallery';

import './App.css';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Route exact={true} path="/" component={Landing}/>
            <Route path="/Gallery" component={Gallery} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
