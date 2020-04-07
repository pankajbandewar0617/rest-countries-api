import React from 'react';
import { Input, Select, Col } from 'antd';
import { ThemeContext } from '../context/themeContext';

function Filter(props) {
  const { Option } = Select;

  function handleChange(value) {
    props.select(value);
  }

  function searchCountry(e) {
    const text = e.target.value;
    props.filterCountry(text);
  }

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme } = context;
        const theme = isLightTheme ? 'light' : 'dark';
        return (
          <>
            <Col sm={24} md={18} lg={12} xl={21}>
              <Input
                className={`filter-country-${theme}`}
                onChange={searchCountry}
                placeholder=" &#128269; Search for a country..."
              />
            </Col>
            <Col sm={24} md={6} lg={12} xl={3}>
              <Select
                className="filter-dropdown"
                defaultValue=""
                onChange={handleChange}
              >
                <Option className={`filter-option-${theme}`} value="">
                  Filter by Region
                </Option>
                <Option className={`filter-option-${theme}`} value="africa">
                  Africa
                </Option>
                <Option className={`filter-option-${theme}`} value="americas">
                  Americas
                </Option>
                <Option className={`filter-option-${theme}`} value="asia">
                  Asia
                </Option>
                <Option className={`filter-option-${theme}`} value="europe">
                  Europe
                </Option>
                <Option className={`filter-option-${theme}`} value="oceania">
                  Oceania
                </Option>
              </Select>
            </Col>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Filter;
