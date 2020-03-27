import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import SingleCountry from './components/singleCountryDetail';
import "./styles/style.scss"

class App extends Component {
  state = {
    darkMode: false
  }

  switchMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
    const rootID = document.getElementById('root');
    rootID.style.backgroundColor = this.state.darkMode ? "hsl(0, 0%, 90%)" : "hsl(207, 26%, 17%)";
  }

  render() {

    return (
      <div>
        <Router>
          <Header darkMode={this.state.darkMode} changeMode={this.switchMode} />
          <Switch>
            <Route path="/country/:country_id" component={SingleCountry} />
            <Route path="/" component={() => <Homepage darkMode={this.state.darkMode} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
