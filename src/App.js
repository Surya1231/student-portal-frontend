import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FullScreenError } from './components/common/Error';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route component={FullScreenError} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
