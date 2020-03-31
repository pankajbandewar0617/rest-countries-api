import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';
class Header extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark, toggleTheme } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="header" style={{ backgroundColor: theme.ui, color: theme.textColor }}>
                <p>Where in the world?</p>
                <p onClick={toggleTheme}>☾ Dark Mode</p>
            </div>
        );
    }
}

export default Header;