import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import "./styles/style.scss";
import SingleCountry from './components/singleCountryDetail';
import ThemeContextProvider from './context/themeContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Header
          />
          <Switch>
            <Route path="/country/:country_id" component={SingleCountry} />
            <Route path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}
export default App;
