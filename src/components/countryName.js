import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import { Card, Row, Col } from 'antd';

class CountryName extends Component {
  render() {
    const country = this.props.data;
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme } = context;
          const theme = isLightTheme ? 'light' : 'dark';
          return (
            <div className="country-style">
              <Link to={`/country/${country.name}`}>
                <Card
                  className={`country-card-${theme}`}
                  cover={
                    <img
                      style={{ objectFit: 'cover' }}
                      src={country.flag}
                      height="120px"
                      alt="flag missing"
                    />
                  }
                  bordered={false}
                >
                  <Row className="country-name">{country.name}</Row>
                  <Col className="country-detail">
                    <Row>Population: {country.population}</Row>
                    <Row>Region: {country.region}</Row>
                    <Row>Capital: {country.capital}</Row>
                  </Col>
                </Card>
              </Link>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CountryName;
