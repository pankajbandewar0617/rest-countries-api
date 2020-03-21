import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleCountry extends Component {
    countryStyle = () => {
        return {
            display: "flex",
            justifyContent: "space-around",
        }
    }


    ckk = (country) => {
        console.log("cccc", country)
        this.props.switchCountry(country)
    }
    render() {
        return (
            <div>
                {/* <Link to="/"> */}
                <button onClick={this.props.detail}>&#x2190;  Back</button>
                {/* </Link> */}
                <div style={this.countryStyle()}>
                    {console.log(this.props.data)}
                    <img src={this.props.data.flag} width="200px" height="120px" alt="flag missing" />
                    <div>
                        <h3>{this.props.data.name}</h3>
                        <p>Native Name : {this.props.data.nativeName}</p>
                        <p> Top Level Domain: {this.props.data.topLevelDomain}</p>
                        <p> Population: {this.props.data.population}</p>
                        <p> Currencies: {this.props.data.currencies.map(name => (<p>{name.name}</p>)
                        )}</p>
                        <p> Region: {this.props.data.region}</p>
                        <p> Languages: {this.props.data.languages.map(name => (<p>{name.name}</p>)
                        )}</p>
                        <p> Sub Region: {this.props.data.subregion}</p>
                        <p> Capital: {this.props.data.capital}</p>
                        <p>Border Countries: {this.props.data.borders.map(country => (<button onClick={() => this.ckk(country)}>{country}</button>))}</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default SingleCountry;