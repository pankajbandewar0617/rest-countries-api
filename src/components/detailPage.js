import React, { Component } from 'react';
import "../styles/style.scss";
import { ThemeContext } from '../context/themeContext';

class DetailPage extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className="single-country" style={{ backgroundColor: theme.bg, color: theme.textColor }}>
                        <img src={this.props.data.flag}
                            width="400px" height="280px" alt="flag missing" />
                        <div className="single-country-detail" >
                            <h2>{this.props.data.name}</h2>
                            <div className="singleCountry-detail">
                                <div>
                                    <p><strong>Native Name :</strong> {this.props.data.nativeName}</p>
                                    <p><strong> Population:</strong> {this.props.data.population}</p>
                                    <p><strong> Region:</strong> {this.props.data.region}</p>
                                    <p><strong> Sub Region:</strong> {this.props.data.subregion}</p>
                                    <p><strong> Capital:</strong> {this.props.data.capital}</p>
                                </div>
                                <div >
                                    <p><strong>Top Level Domain:</strong> {this.props.data.topLevelDomain}</p>
                                    <p><strong>Currencies: </strong>{this.props.data.currencies.map(name => (<p>{name.name}</p>)
                                    )}</p>
                                    <div><strong>Languages: </strong>{this.props.data.languages.map(name => (<span>{name.name} </span>)
                                    )}</div>
                                </div>
                            </div>
                            <div className="border-details">
                                <p><strong>Border Countries:</strong></p>
                                <div >
                                    {this.props.data.borders.map(country => (<button className="border-name"
                                        style={{ backgroundColor: theme.ui, color: theme.textColor }}
                                        onClick={() => this.props.changeCountry(country)}
                                    >{country}</button>))}</div>
                            </div>
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default DetailPage;