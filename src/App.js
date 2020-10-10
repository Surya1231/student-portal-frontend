import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FullScreenError } from './components/common/Error';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route component={FullScreenError} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
