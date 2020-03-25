import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import SingleCountry from './components/singleCountryDetail';
import Header from './components/header';
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
