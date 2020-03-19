import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleCountry extends Component {
    countryStyle = () => {
        return {
            display: "flex",
            justifyContent: "space-between",
        }
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <button>&#x2190;  Back</button>
                </Link>
                <div style={this.countryStyle()}>
                    <div>country flag</div>
                    <div>
                        <div>country name</div>
                        <div>country detail</div>
                        <div>border countries</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCountry;