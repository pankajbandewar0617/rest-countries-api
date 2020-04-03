import React, { Component } from 'react';
import CountryName from './countryName';
import { connect } from 'react-redux';
import {
  getAllData,
  getDataByRegion,
  getFilterData
} from '../reduxComponents/action';
import { ThemeContext } from '../context/themeContext';
import Filter from './filter';
import { Col, Row } from 'antd';

class Homepage extends Component {
  componentDidMount() {
    this.props.getAllData();
  }

  select = region => {
    region ? this.props.getDataByRegion(region) : this.props.getAllData();
  };

  filter = countryName => {
    if (countryName.length > 0) {
      const filterCountry = this.props.allData.filter(data =>
        data.name.toLowerCase().match(countryName.toLowerCase())
      );
      this.props.getFilterData(filterCountry);
    } else {
      this.props.getAllData();
    }
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme } = context;
          const theme = isLightTheme ? 'light' : 'dark';
          return (
            <>
              <Row justify="space-between" className={`input-div-${theme}`}>
                <Filter select={this.select} filterCountry={this.filter} />
              </Row>
              <Row className={`all-countries-${theme}`}>
                <Row justify="space-around">
                  {this.props.data.map((data, index) => (
                    <Col span={6} key={index}>
                      <CountryName data={data} key={index} />
                    </Col>
                  ))}
                </Row>
              </Row>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.filterCountriesData,
    allData: state.countriesData
  };
};

const mapDispatchToProps = {
  getAllData,
  getDataByRegion,
  getFilterData
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
