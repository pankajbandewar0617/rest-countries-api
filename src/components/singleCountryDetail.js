import React, { Component } from 'react';
import "../App.css";

class SingleCountry extends Component {


    ckk = (country) => {
        console.log("cccc", country)
        this.props.switchCountry(country)
    }
    render() {
        return (
            <div style={{ margin: "0px 50px" }}>
                <button onClick={this.props.detail}
                    className="back-button">&#x2190;  Back</button>
                <div className="single-country">
                    <img src={this.props.data.flag}
                        width="400px" height="280px" alt="flag missing" />
                    <div style={{ width: "400px" }}>
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
                                    onClick={() => this.ckk(country)}>{country}</button>))}</div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SingleCountry;