import React, { Component } from 'react';
import "../App.css";

class CountryName extends Component {

    name = () => {
        const name = this.props.data.name;
        this.props.country(name);
    }

    render() {
        return (
            <div className="country-style" onClick={this.name}>
                <img style={{ objectFit: "cover" }} src={this.props.data.flag}
                    width="200px" height="100px" alt="flag missing" />
                <div style={{ margin: "16px 16px 30px 16px" }}>
                    <div className="country-name">{this.props.data.name}</div>
                    <div className="country-detail">
                        <p>Population: {this.props.data.population}</p>
                        <p>Region: {this.props.data.region}</p>
                        <p>Capital: {this.props.data.capital}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryName;