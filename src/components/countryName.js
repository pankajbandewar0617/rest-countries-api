import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryName extends Component {
    state = {}

    moviestyle = () => {
        return {
            border: "4px solid",
            width: "200px",
            margin: "50px",
            backgroundColor: "rgb(58, 57, 57)",
            color: "white",
            fontSize: "14px",
            lineHeight: "16px",
        }
    }
    render() {
        return (
            <div style={this.moviestyle()}>
                <Link to="/country">
                    <img src={this.props.data.flag} width="200px" />
                    <div style={{ padding: '20px' }}>
                        <p>{this.props.data.name}</p>
                        <p>Population: {this.props.data.population}</p>
                        <p>Region: {this.props.data.region}</p>
                        <p>Capital: {this.props.data.capital}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CountryName;