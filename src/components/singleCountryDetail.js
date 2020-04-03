import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, getDataByCode } from '../reduxComponents/action';
import { Link } from 'react-router-dom';
import DetailPage from './detailPage';
import { ThemeContext } from '../context/themeContext';
import { Button, Col, Row } from 'antd';

class SingleCountry extends Component {
  componentDidMount() {
    const name = this.props.match.params.country_id;
    this.props.getData(name);
  }

  changeCountry = name => {
    const filterData = this.props.allData.filter(
      data => data.alpha3Code === name
    );
    this.props.getDataByCode(filterData);
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme } = context;
          const theme = isLightTheme ? 'light' : 'dark';
          return (
            <Col className={`detail-page-${theme}`}>
              <Link to="/">
                <Row>
                  <Button className={`back-button-${theme}`}>
                    &#x2190; Back
                  </Button>
                </Row>
              </Link>
              <Row
                justify="space-between"
                className={`single-country-${theme}`}
              >
                {this.props.data.map((data, index) => (
                  <DetailPage
                    data={data}
                    key={index}
                    changeCountry={this.changeCountry}
                  />
                ))}
              </Row>
            </Col>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

const mapStateToProps = state => {
  return {
    allData: state.countriesData,
    data: state.singleCountry
  };
};

const mapDispatchToProps = {
  getData,
  getDataByCode
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry);
