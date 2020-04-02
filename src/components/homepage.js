import React, { Component } from 'react';
import CountryName from './countryName';
import { connect } from 'react-redux';
import { getAllData, getDataByRegion, getFilterData } from '../reduxComponents/action';
import { ThemeContext } from '../context/themeContext';
import Filter from './filter';

class Homepage extends Component {

    componentDidMount() {
        this.props.getAllData();
    }

    select = (region) => {
        region ? this.props.getDataByRegion(region) : this.props.getAllData()
    }

    filter = (countryName) => {
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
                            <Filter bgColor={theme.ui} color={theme.textColor}
                                select={this.select} filterCountry={this.filter} />
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
