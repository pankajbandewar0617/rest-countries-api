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

    select = (e) => {
        const region = e.target.value;
        console.log("select", region)
        this.getDataByRegion(region)
    }

    getDataByRegion = (region) => {
        console.log(region)
        fetch(`https://restcountries.eu/rest/v2/region/${region}`, {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => this.setState({ countriesData: data }))
    }


    render() {
        return (
            <div>
                <div style={{ flex: 1, justifyContent: "space-between" }}>
                    <input placeholder=" &#128269; Search for a country..." />
                    <select onChange={(e) => this.select(e)}>
                        <option value="">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
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