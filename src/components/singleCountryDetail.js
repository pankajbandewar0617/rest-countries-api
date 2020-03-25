import React, { Component } from 'react';
import "../App.css";

class SingleCountry extends Component {

    changeStyle = () => {
        return {
            backgroundColor: this.props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            color: this.props.darkMode ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)"
        }
    }

    changeBackgroundStyle = () => {
        return {
            backgroundColor: this.props.darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 90%)",
            color: this.props.darkMode ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)"
        }
    }

    changeCountry = (country) => {
        this.props.switchCountry(country)
    }
    render() {
        return (
            <div style={{ margin: "0px 50px" }}>
                <button onClick={this.props.detail}
                    className="back-button"
                    style={this.changeStyle()}>&#x2190;  Back</button>
                <div className="single-country" style={this.changeBackgroundStyle()}>
                    <img src={this.props.data.flag}
                        width="400px" height="280px" alt="flag missing" />
                    <div className="single-country-detail" style={this.changeBackgroundStyle()}>
                        <h2>{this.props.data.name}</h2>
                        <div className="singleCountry-detail">
                            <div>
                                <p>Native Name : {this.props.data.nativeName}</p>
                                <p> Population: {this.props.data.population}</p>
                                <p> Region: {this.props.data.region}</p>
                                <p> Sub Region: {this.props.data.subregion}</p>
                                <p> Capital: {this.props.data.capital}</p>
                            </div>
                            <div >
                                <p> Top Level Domain: {this.props.data.topLevelDomain}</p>
                                <p> Currencies: {this.props.data.currencies.map(name => (<p>{name.name}</p>)
                                )}</p>
                                <div> Languages: {this.props.data.languages.map(name => (<span>{name.name}</span>)
                                )}</div>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Border Countries:</p>
                            <div >
                                {this.props.data.borders.map(country => (<button className="border-name"
                                    style={this.changeStyle()} onClick={() => this.changeCountry(country)}>{country}</button>))}</div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SingleCountry;