import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryName extends Component {

    name = () => {
        const name = this.props.data.name;
        this.props.country(name);
    }

    changeStyle = () => {
        return {
            backgroundColor: this.props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            color: this.props.darkMode ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
        }
    }

    render() {
        return (
            <div className="country-style" onClick={this.name} style={this.changeStyle()}>
                {/* <Link to={`/country/${this.props.data.name}`}> */}
                <img style={{ objectFit: "cover" }} src={this.props.data.flag}
                    width="240px" height="120px" alt="flag missing" />
                {/* </Link> */}
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