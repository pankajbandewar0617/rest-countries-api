import React, { Component } from 'react';

class CountryName extends Component {
    state = {}

    moviestyle = () => {
        return {
            // border: "4px solid blue",
            // borderRadius: "2px",
            width: "200px",
            margin: "30px",
            backgroundColor: "hsl(209, 23%, 22%)",
            color: "hsl(0, 0%, 100%)",
            fontSize: "14px",
        }
    }

    name = () => {
        const name = this.props.data.name;
        this.props.country(name);
    }

    render() {
        return (
            <div style={this.moviestyle()} onClick={this.name}>
                <img style={{ objectFit: "cover" }} src={this.props.data.flag} width="200px" height="100px" alt="flag missing" />
                <div style={{ margin: "16px 16px 30px 16px" }}>
                    <div style={{ fontWeight: "bold" }}>{this.props.data.name}</div>
                    <div style={{ lineHeight: "8px", fontSize: "10px" }}>
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