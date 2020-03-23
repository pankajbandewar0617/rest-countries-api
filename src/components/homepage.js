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
            justifyContent: "space-between"
        }
    }

    name = () => {
        return {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between  ",
            // margin: "20px"
        }
    }

    select = (e) => {
        const region = e.target.value;
        console.log("sssss", region)
        region ? this.getDataByRegion(region) : this.getAllData()
    }

    getDataByRegion = (region) => {
        console.log("dsdsds", region)
        fetch(`https://restcountries.eu/rest/v2/region/${region}`, {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => this.setState({ filterCountriesData: data }))
    }


    singleCountry = (name) => {
        console.log("ffff", name)
        const filterData = this.state.countriesData.filter(data => data.name === name);
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
                data.name.toLowerCase().match(countryName.toLowerCase()))
            this.setState({
                filterCountriesData: filterCountry
            })
        } else {
            this.getAllData()
        }
    }

    darkStyle = () => {
        return {
            backgroundColor: "hsl(207, 26%, 17%)",
            darkmodeElement: "hsl(209, 23%, 22%)",
            textColor: "hsl(0, 0%, 100%)",
        }
    }

    lightStyle = () => {
        return {
            backgroundColor: "hsl(0, 0%, 98%)",
            lightmodeElement: " hsl(0, 0%, 100%)",
            textColor: " hsl(200, 15%, 8%)",
            LightModeInput: "hsl(0, 0%, 52%)",
        }
    }

    render() {
        return (
            <div>
                {this.state.homepageShow ?
                    (<div>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            margin: "30px"
                        }}>
                            <input
                                placeholder=" &#128269; Search for a country..."
                                style={{ width: "300px", height: "16px", padding: "10px", backgroundColor: "hsl(207, 26%, 17%)", }}
                                onChange={(e) => this.filter(e)} />
                            <select onChange={(e) => this.select(e)}>
                                <option value="">Filter by Region</option>
                                <option value="africa">Africa</option>
                                <option value="americas">Americas</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="oceania">Oceania</option>
                            </select>
                        </div>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between  ",
                        }}>
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