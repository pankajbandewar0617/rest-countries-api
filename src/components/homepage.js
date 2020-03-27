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
        }).then(data => this.setState({ filterCountriesData: data }))
    }

    singleCountry = (name) => {
        const filterData = this.state.countriesData.filter(data => data.name === name);
        this.setState({
            singleCountryData: filterData,
            homepageShow: false
        })
    }

    nextCountry = (name) => {
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

    changeStyle = () => {
        return {
            backgroundColor: this.props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            color: this.props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)",
        }
    }

    changeBackgroundStyle = () => {
        return {
            backgroundColor: this.props.darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 90%)",
        }
    }

    render() {
        return (
            <div>
                {this.state.homepageShow ?
                    (<div>
                        <div className="input-div" style={this.changeBackgroundStyle()} >
                            <input
                                className="filter-country"
                                placeholder=" &#128269; Search for a country..."
                                onChange={(e) => this.filter(e)}
                                style={this.changeStyle()} />
                            <select
                                className="filter-dropdown"
                                onChange={(e) => this.select(e)}
                                style={this.changeStyle()}>
                                <option value="">Filter by Region</option>
                                <option value="africa">Africa</option>
                                <option value="americas">Americas</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="oceania">Oceania</option>
                            </select>
                        </div>
                        <div
                            className="all-countries">
                            {this.state.filterCountriesData.map((data, index) =>
                                <CountryName
                                    data={data}
                                    key={index}
                                    country={this.singleCountry}
                                    darkMode={this.props.darkMode} />
                            )}
                        </div>
                    </div>)
                    :
                    (<div>
                        {this.state.singleCountryData.map(data =>
                            <SingleCountry
                                data={data}
                                detail={this.getAllData}
                                switchCountry={this.nextCountry}
                                darkMode={this.props.darkMode} />
                        )
                        }
                    </div>)}
            </div>
        );
    }
}

export default Homepage;