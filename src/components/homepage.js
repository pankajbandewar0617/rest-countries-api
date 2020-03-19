import React, { Component } from 'react';
import CountryName from './countryName';

class Homepage extends Component {

    state = {
        countriesData: []
    }

    componentDidMount() {
        this.getAllData();
    }

    getAllData = () => {
        fetch('https://restcountries.eu/rest/v2/all', {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => this.setState({ countriesData: data }))
    }

    homepageStyle = () => {
        return {
            display: "flex",
            backgroundColor: "red",
            justifyContent: "space-between"
        }
    }

    name = () => {
        return {
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            // margin: "20px"
        }
    }



    render() {
        return (
            <div>
                <div style={{ flex: 1, justifyContent: "space-between" }}>
                    <input placeholder=" &#128269; Search for a country..." />
                    <select>
                        <option value="">Filter by Region</option>
                        <option value="Action">Africa</option>
                        <option value="Adventure">Americas</option>
                        <option value="Animation">Asia</option>
                        <option value="Biography">Europe</option>
                        <option value="Comedy">Oceania</option>
                    </select>
                </div>
                <div style={this.name()}>
                    {this.state.countriesData.map((data, index) =>
                        <CountryName
                            data={data} />
                    )}
                </div>
            </div>
        );
    }
}

export default Homepage;