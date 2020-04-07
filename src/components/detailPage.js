import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';
import { Button, Col, Row } from 'antd';

class DetailPage extends Component {
  click = (country) => {
    this.props.changeCountry(country);
  };
  render() {
    const country = this.props.data;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme } = context;
          const theme = isLightTheme ? 'light' : 'dark';
          return (
            <>
              <Col sm={24} lg={12} xl={18}>
                <img
                  src={country.flag}
                  width="360px"
                  height="260px"
                  alt="flag missing"
                />
              </Col>
              <Col sm={24} lg={12} xl={6} className="single-country-detail">
                <Row className={`country-name-${theme}`}>{country.name}</Row>
                <Row
                  justify="space-between"
                  gutter={[16, 16]}
                  className="singleCountry-detail"
                >
                  <Col sm={24} xl={12}>
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
                  <Col sm={24} xl={12}>
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
                  <Col sm={24} md={12} xl={12}>
                    <strong>Border Countries:</strong>
                  </Col>
                  <Col sm={24} md={12} xl={12}>
                    <Row gutter={[2, 4]}>
                      {country.borders.map((country, index) => (
                        <Col sm={8} md={8} xl={8} key={index}>
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
