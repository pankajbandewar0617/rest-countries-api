import React from 'react';
import { Input, Select } from 'antd';
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
      {context => {
        const { isLightTheme } = context;
        const theme = isLightTheme ? 'light' : 'dark';
        return (
          <>
            <Input
              className={`filter-country-${theme}`}
              onChange={searchCountry}
              placeholder=" &#128269; Search for a country..."
            />
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
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Filter;
