import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';
import { Button, Col, Row } from 'antd';

class DetailPage extends Component {
  click = country => {
    this.props.changeCountry(country);
  };
  render() {
    const country = this.props.data;
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme } = context;
          const theme = isLightTheme ? 'light' : 'dark';
          return (
            <>
              <Col span={4}>
                <img
                  src={country.flag}
                  width="360px"
                  height="260px"
                  alt="flag missing"
                />
              </Col>
              <Col span={8} offset={12} className="single-country-detail">
                <Row className={`country-name-${theme}`}>{country.name}</Row>
                <Row justify="space-between" className="singleCountry-detail">
                  <Col>
                    <Row>
                      <strong>Native Name :</strong> {country.nativeName}
                    </Row>
                    <Row>
                      <strong> Population:</strong> {country.population}
                    </Row>
                    <Row>
                      <strong> Region:</strong> {country.region}
                    </Row>
                    <Row>
                      <strong> Sub Region:</strong> {country.subregion}
                    </Row>
                    <Row>
                      <strong> Capital:</strong> {country.capital}
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <strong>Top Level Domain:</strong>{' '}
                      {country.topLevelDomain}
                    </Row>
                    <Row>
                      <strong>Currencies: </strong>
                      {country.currencies.map((name, index) => (
                        <Col key={index}>{name.name}</Col>
                      ))}
                    </Row>
                    <Row gutter={4}>
                      <strong>Languages: </strong>
                      {country.languages.map((name, index) => (
                        <Col key={index}>{name.name} </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
                <Row className="border-details">
                  <Col span={10}>
                    <strong>Border Countries:</strong>
                  </Col>
                  <Col span={14}>
                    <Row gutter={[2, 4]}>
                      {country.borders.map((country, index) => (
                        <Col span={6} key={index}>
                          {' '}
                          <Button
                            className={`border-name-${theme}`}
                            onClick={() => this.click(country)}
                          >
                            {country}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default DetailPage;
