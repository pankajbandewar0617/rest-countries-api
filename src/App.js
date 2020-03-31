import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import "./styles/style.scss";
import SingleCountry from './components/singleCountryDetail';
// import { ThemeContext, themes } from './theme-context';


class App extends Component {
  constructor(props) {
    super(props);

    // this.toggleTheme = () => {
    //   console.log("wwwww", this.state)
    //   this.setState(state => ({
    //     theme:
    //       state.theme === themes.dark
    //         ? themes.light
    //         : themes.dark,
    //   }));
    // };

    // state = {
    //   darkMode: false
    // }

    // switchMode = () => {
    //   this.setState({ darkMode: !this.state.darkMode })
    //   const rootID = document.getElementById('root');
    //   rootID.style.backgroundColor = this.state.darkMode ? "hsl(0, 0%, 90%)" : "hsl(207, 26%, 17%)";
    // }
    // this.state = {
    //   theme: themes.light,
    //   toggleTheme: this.toggleTheme,
    // };
  }

  render() {

    return (
      // <ThemeContext.Provider value={this.state}>
      <div>
        <BrowserRouter>
          <div >
            <Header
            // changeTheme={this.toggleTheme}
            // style={this.state.theme}
            // darkMode={this.state.darkMode} changeMode={this.switchMode}
            />
          </div>
          <Switch>
            <Route path="/country/:country_id" component={SingleCountry} />
            <Route path="/" component={() => <Homepage
            //  darkMode={this.state.darkMode} 
            // style={this.state.theme}

            />} />
          </Switch>
        </BrowserRouter>
      </div>
      // </ThemeContext.Provider>
    );
  }
}
export default App;
