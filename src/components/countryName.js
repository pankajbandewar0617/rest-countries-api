import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import { Card } from 'antd';

class CountryName extends Component {

    render() {
        const country = this.props.data;
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="country-style">
                        <Link to={`/country/${country.name}`}>
                            <Card cover={<img style={{ objectFit: "cover" }} src={country.flag}
                                width="240px" height="120px" alt="flag missing" />}
                                bordered={false}
                                style={{ backgroundColor: theme.ui, color: theme.textColor }}>
                                <div className="country-name">{country.name}</div>
                                <div className="country-detail"><p>Population: {country.population}</p>
                                    <p>Region: {country.region}</p>
                                    <p>Capital: {country.capital}</p></div>
                            </Card>
                        </Link>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default CountryName;