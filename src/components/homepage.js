import React, { Component } from 'react';
import CountryName from './countryName';
import SingleCountry from './singleCountryDetail';

class Homepage extends Component {

    state = {
        countriesData: [],
    }

    componentDidMount() {
        this.getAllData();
    }

    getAllData = () => {
        console.log("ddddds")
        fetch('https://restcountries.eu/rest/v2/all', {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => this.setState({ countriesData: data, homepageShow: true }))
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
        region ? this.getDataByRegion(region) : this.getAllData()
    }

    getDataByRegion = (region) => {

        fetch(`https://restcountries.eu/rest/v2/region/${region}`, {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => this.setState({ countriesData: data }))
    }


    singleCountry = (name) => {
        console.log("ffff", name)
        const filterData = this.state.countriesData.filter(data => data.name === name);
        // console.log(filterData)
        this.setState({
            countriesData: filterData,
            homepageShow: false
        })
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                {this.state.homepageShow ? (<div style={this.name()}>
                    {this.state.countriesData.map((data, index) =>
                        <CountryName
                            data={data}
                            key={index}
                            country={this.singleCountry} />
                    )}
                </div>)
                    :
                    (<div>
                        {this.state.countriesData.map(data =>
                            <SingleCountry
                                data={data}
                                detail={this.getAllData} />
                        )
                        }
                    </div>)}
            </div>
        );
    }
}

export default Homepage;