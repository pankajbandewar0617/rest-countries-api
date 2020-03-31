import React, { Component } from 'react';
import CountryName from './countryName';
import { connect } from 'react-redux';
import { getAllData, getDataByRegion, getFilterData } from '../reduxComponents/action';
import { ThemeContext } from '../context/themeContext';

class Homepage extends Component {

    componentDidMount() {
        this.props.getAllData();
    }

    select = (e) => {
        const region = e.target.value;
        region ? this.props.getDataByRegion(region) : this.props.getAllData()
    }

    filter = (e) => {
        const countryName = e.target.value;
        if (countryName.length > 0) {
            const filterCountry = this.props.allData.filter(data =>
                data.name.toLowerCase().match(countryName.toLowerCase()))
            this.props.getFilterData(filterCountry)
        } else {
            this.props.getAllData()
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div>
                        <div className="input-div" style={{ backgroundColor: theme.bg, }}>
                            <input
                                style={{ backgroundColor: theme.ui, color: theme.textColor }}
                                className="filter-country"
                                placeholder=" &#128269; Search for a country..."
                                onChange={(e) => this.filter(e)}
                            />
                            <select
                                style={{ backgroundColor: theme.ui, color: theme.textColor }}
                                className="filter-dropdown"
                                onChange={(e) => this.select(e)}
                            >
                                <option value="">Filter by Region</option>
                                <option value="africa">Africa</option>
                                <option value="americas">Americas</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="oceania">Oceania</option>
                            </select>
                        </div>
                        <div className="all-countries"
                            style={{ backgroundColor: theme.bg, }}>
                            {this.props.data.map((data, index) =>
                                <CountryName
                                    data={data}
                                    key={index} />
                            )}
                        </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.filterCountriesData,
        allData: state.countriesData,
    };
};

const mapDispatchToProps = {
    getAllData,
    getDataByRegion,
    getFilterData
};


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
