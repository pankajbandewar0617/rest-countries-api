import React, { Component } from 'react';
import CountryName from './countryName';
import SingleCountry from './singleCountryDetail';

class Homepage extends Component {

    state = {
        countriesData: [],
        filterCountriesData: [],
        singleCountryData: [],
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
        }).then(data => this.setState({
            countriesData: data,
            filterCountriesData: data,
            homepageShow: true
        }))
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
            justifyContent: "space-around",
            margin: "20px"
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
            singleCountryData: filterData,
            homepageShow: false
        })
    }

    nextCountry = (name) => {
        console.log("code", name);
        const filterData = this.state.countriesData.filter(data => data.alpha3Code === name);
        this.setState({
            singleCountryData: filterData,
            homepageShow: false
        })
    }

    filter = (e) => {
        const countryName = e.target.value;
        if (countryName.length > 0) {
            console.log(countryName);
            const filterCountry = this.state.countriesData.filter(data =>
                data.name.toLowerCase().includes(countryName.toLowerCase()))
            this.setState({
                filterCountriesData: filterCountry
            })
        } else {
            this.getAllData()
        }
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                {this.state.homepageShow ?
                    (<div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input placeholder=" &#128269; Search for a country..." onChange={(e) => this.filter(e)} />
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
                            {this.state.filterCountriesData.map((data, index) =>
                                <CountryName
                                    data={data}
                                    key={index}
                                    country={this.singleCountry} />
                            )}
                        </div>
                    </div>)
                    :
                    (<div>
                        {this.state.singleCountryData.map(data =>
                            <SingleCountry
                                data={data}
                                detail={this.getAllData}
                                switchCountry={this.nextCountry} />
                        )
                        }
                    </div>)}
            </div>
        );
    }
}

export default Homepage;