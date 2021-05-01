import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Gallery from './pages/Gallery';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Route exact={true} path="/" component={Landing} />
            <Route path="/Gallery" component={Gallery} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
