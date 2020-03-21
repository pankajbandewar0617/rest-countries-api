import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import SingleCountry from './components/singleCountryDetail';

function App() {
  return (
    <div>
      <Router>
        <h1>Where in the world?</h1>
        <button>Dark Mode</button>
        <Switch>
          <Route path="/country" component={SingleCountry} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
