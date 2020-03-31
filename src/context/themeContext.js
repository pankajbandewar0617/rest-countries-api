import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {
            textColor: 'hsl(200, 15%, 8%)',
            ui: 'hsl(0, 0%, 100%)',
            bg: 'hsl(0, 0%, 90%)'
        },
        dark: {
            textColor: "hsl(0, 0%, 100%)",
            ui: "hsl(209, 23%, 22%)",
            bg: "hsl(207, 26%, 17%)"
        }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;