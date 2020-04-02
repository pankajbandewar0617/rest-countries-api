import React, { Component } from 'react';
import { Input, Menu, Dropdown, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Filter(props) {

    const { Option } = Select;

    function handleChange(value) {
        props.select(value)
    }

    function searchCountry(e) {
        const text = e.target.value;
        props.filterCountry(text);
    }

    return (
        <React.Fragment>
            <Input className="filter-country" onChange={searchCountry}
                style={{ width: 320, height: 32 }} placeholder=" &#128269; Search for a country..." />
            <Select className="filter-dropdown"
                defaultValue="" style={{ width: 160 }} onChange={handleChange}>
                <Option value="">Filter by Region</Option>
                <Option value="africa">Africa</Option>
                <Option value="americas">Americas</Option>
                <Option value="asia">Asia</Option>
                <Option value="europe">Europe</Option>
                <Option value="oceania">Oceania</Option>
            </Select>
        </React.Fragment>
    );
}

export default Filter;