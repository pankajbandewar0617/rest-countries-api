import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import SingleCountry from './components/singleCountryDetail';
import Header from './components/header';

function App() {
  return (
    <div style={{
      // padding: "0px 30px",
      backgroundColor: "hsl(207, 26%, 17%)",
    }}>
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
