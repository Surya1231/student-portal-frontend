import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FullScreenError } from './components/common/Error';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import BuySell from './components/BuySell/BuySell';

class App extends Component {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div className="App">
        <Navbar pathname={pathname} />

        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/buysell" component={BuySell} />
          <Route component={FullScreenError} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
