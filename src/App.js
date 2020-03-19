import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import SingleCountry from './components/singleCountryDetail';

function App() {
  return (
    <div>
      <Router>
        <h1>Where in the world?</h1>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/country" component={SingleCountry} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
