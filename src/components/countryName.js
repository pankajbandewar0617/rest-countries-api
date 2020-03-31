import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';

class CountryName extends Component {

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="country-style"
                        style={{ backgroundColor: theme.ui, color: theme.textColor }}>
                        <Link to={`/country/${this.props.data.name}`}>
                            <img style={{ objectFit: "cover" }} src={this.props.data.flag}
                                width="240px" height="120px" alt="flag missing" />
                        </Link>
                        <div style={{ margin: "16px 16px 30px 16px" }}>
                            <div className="country-name">{this.props.data.name}</div>
                            <div className="country-detail">
                                <p>Population: {this.props.data.population}</p>
                                <p>Region: {this.props.data.region}</p>
                                <p>Capital: {this.props.data.capital}</p>
                            </div>
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default CountryName;